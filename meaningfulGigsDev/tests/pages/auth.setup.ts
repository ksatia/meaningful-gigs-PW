import { expect, test as setup } from '@playwright/test'

const authFile = 'playwright/.auth/user.json'

// turns out that we don't need to do anything here since the site doesn't require a password.
// 

setup('authenticate', async ({ page }) => {
    // authenticate here 
    await page.goto('https://showcase-dev.meaningfulgigs.com/')
    await page.getByRole('button', { name: 'Login' }).click()
    await page.getByTestId('email-input').fill(process.env.M_GIGS_USERNAME as string)
    // await page.getByTestId('datalogin-submit-cta')
    await page.getByTestId('login-submit-cta').click()
    // wait for cookies to set
    await page.waitForURL('https://showcase-dev.meaningfulgigs.com/')
    await page.context().storageState({ path: authFile })
})
// destructure Page fix
import { expect, Page } from '@playwright/test';

export class HomePage {

    // let's try to avoid the long stuff and instead just 
    readonly page: Page;

    constructor(page: Page) {
        this.page = page
    }

    async open() {
        await this.page.goto('https://showcase-dev.meaningfulgigs.com/');
        await this.page.waitForLoadState()
    }

    // look for the user profile link
    async clickLink(linkText: string) {
        await this.page.getByRole('link')
            .filter({ hasText: `${linkText}` })
            .click()
    }

    async beginMagicMatch() {
        await this.page.getByRole('button')
            .filter({ hasText: 'Magic Match' })
            .click()
    }

    async confirmMagicMatch() {
        const magicMatchConfirmationText = await this.page.getByTestId('magic-matches')
            .locator('p')
            .first()
            .innerText()
        expect(magicMatchConfirmationText).toMatch(/Magic Match/)
    }
}
import { expect, Page } from '@playwright/test';

export class MagicMatchPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page
    }

    async verifyMagicMatchPage() {
        await expect(this.page).toHaveURL(/magic-match/)
    }

    async selectCreatives() {
        await this.page.getByTestId('specialty-chip')
            .filter({ hasText: 'UI/UX' })
            .click()
        await this.page.getByTestId('specialty-chip')
            .filter({ hasText: 'Graphic' })
            .click()
        await this.page.getByRole('button', { name: 'Next Step' }).click()
        await expect(this.page.locator('h2')).toHaveText(/Final/)
        await this.page.getByTestId('skill-chip')
            .filter({ hasText: 'Other' })
            .click()
        await this.page.getByPlaceholder(/Search titles/).fill('App')
        await this.page.getByText('App Design', { exact: true }).click()
        await this.page.getByRole('button', {name: /Magic Matches/}).click()
    }
}
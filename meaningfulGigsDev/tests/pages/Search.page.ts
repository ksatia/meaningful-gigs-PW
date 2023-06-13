// destructure Page fix
import { expect, Page } from '@playwright/test';

export class SearchPage {

    readonly page: Page
    readonly headerText: string = 'shout-out-component'

    constructor(page: Page) {
        this.page = page
    }

    async verifyPageLoad(linkSearchTerm: string) {
        let searchRegex = new RegExp(`${linkSearchTerm}`)
        await expect(this.page).toHaveURL(searchRegex)
    }
}  
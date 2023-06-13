// destructure Page fix
import { expect, Page } from '@playwright/test';

export class FAQPage {

    // let's try to avoid the long stuff and instead just 
    readonly page: Page
    readonly headerText: string = 'shout-out-component'

    constructor(page: Page) {
        this.page = page
    }

    async verifyPageLoad(linkSearchTerm: string) {
        //await expect(this.page).toHaveTitle(/Apply/);
        //await expect(this.page.getByTestId(this.headerText)).toHaveText(searchTerm);
        let searchRegex = new RegExp(`${linkSearchTerm}`)
        await expect(this.page).toHaveURL(searchRegex)
    }
}  
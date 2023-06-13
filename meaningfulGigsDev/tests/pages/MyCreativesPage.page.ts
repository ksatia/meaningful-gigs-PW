// destructure Page fix
import { expect, Locator, Page, BrowserContext } from '@playwright/test';

export class MyCreativesPage {

    // let's try to avoid the long stuff and instead just 
    readonly page: Page
    readonly textSearchOptions: object = {
        myLists : 'my-creatives',
        interviewing: 'interviewing',
        active: 'active'
    }
    readonly headerText: string = 'shout-out-component'

    constructor(page: Page) {
        this.page = page
    }

    async verifyPageLoad(linkSearchTerm: string) {
        //await expect(this.page).toHaveTitle(/Apply/);
        //await expect(this.page.getByTestId(this.headerText)).toHaveText(searchTerm);
        let searchRegex = new RegExp(`${this.textSearchOptions[linkSearchTerm]}`)
        await expect(this.page).toHaveURL(searchRegex)
    }
}  
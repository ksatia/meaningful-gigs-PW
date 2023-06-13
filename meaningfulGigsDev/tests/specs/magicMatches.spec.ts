import { expect } from '@playwright/test';
import { test } from '../fixtures/base.page'


// beforeEach block to open the webpage
test.beforeEach(async ({ homePage }) => homePage.open());

test ('Begin Magic Match workflow', async ({homePage, magicMatchPage}) => {
    await homePage.beginMagicMatch()
    await magicMatchPage.verifyMagicMatchPage()
}),

test('Select Magic Match creative types with App Design skills', async ({homePage, magicMatchPage}) => {
    await homePage.beginMagicMatch()
    await magicMatchPage.selectCreatives()
    await homePage.confirmMagicMatch()
})

test('Confirm that Magic Matches are correct and can be viewed', async({homePage, magicMatchPage, portfolioPage}) => {
    await homePage.beginMagicMatch()
    await magicMatchPage.selectCreatives()
    await homePage.confirmMagicMatch()
    
})

// write test to actually click creative type. confirm the name, confirm the specialization, 

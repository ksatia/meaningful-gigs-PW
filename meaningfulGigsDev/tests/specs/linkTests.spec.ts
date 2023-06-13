import { expect } from '@playwright/test';
import { test } from '../fixtures/base.page'


// beforeEach block to open the webpage
test.beforeEach(async ({ homePage }) => homePage.open());

test('MeaningfulGigs link verification: My Creatives - My Lists', async ({ homePage, myCreativesPage }) => {
    await homePage.clickLink('My Creatives')
    await myCreativesPage.verifyPageLoad('myLists')
}),

test('MeaningfulGigs link verification: My Creatives - Interviewing', async ({homePage, myCreativesPage}) => {
    await homePage.clickLink('My Creatives')
    await homePage.clickLink('interviewing')
    await myCreativesPage.verifyPageLoad('interviewing')
}),

test('MeaningfulGigs link verification: My Creatives - Active', async ({homePage, myCreativesPage}) => {
    await homePage.clickLink('My Creatives')
    await homePage.clickLink('Active')
    await myCreativesPage.verifyPageLoad('active')
}),

test('MeaningfulGigs link verification: Search', async ({ homePage, searchPage }) => {
    await homePage.clickLink('Search')
    await searchPage.verifyPageLoad('search')
}),

test('MeaningfulGigs link verification: FAQs', async ({ homePage, faqPage }) => {
    await homePage.clickLink('FAQs')
    await faqPage.verifyPageLoad('how-we-work')
})

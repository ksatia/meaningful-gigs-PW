import { test as base } from '@playwright/test';
import { HomePage } from '../pages/Homepage.page';
import { MyCreativesPage } from '../pages/MyCreativesPage.page';
import { SearchPage } from '../pages/Search.page';
import { FAQPage } from '../pages/FAQPage.page';
import { MagicMatchPage } from '../pages/MagicMatchPage.page';
import { PortfolioPage } from '../pages/PortfolioPage.page';

export const test = base.extend<{
    homePage: HomePage;
    myCreativesPage: MyCreativesPage;
    searchPage: SearchPage;
    faqPage: FAQPage;
    magicMatchPage: MagicMatchPage;
    portfolioPage: PortfolioPage;
}>({
    homePage: async ({ page, context }, use) => {
        await use(new HomePage(page));
    },
    myCreativesPage: async ({page}, use) => {
        await use(new MyCreativesPage(page))
    },
    searchPage: async ({page}, use) => {
        await use(new SearchPage(page))
    },
    faqPage: async ({page}, use) => {
        await use(new FAQPage(page))
    },
    magicMatchPage: async ({page}, use) => {
        await use(new MagicMatchPage(page))
    },
    portfolioPage: async ({page}, use) => {
        await use(new PortfolioPage(page))
    }
})
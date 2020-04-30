const openPage = require('../openPage')
const scrapSection = require('../scrapSection')

const template = require('./companyScraperTemplate')
const cleanCompanyData = require('./cleanCompanyData')

const logger = require('../logger')

module.exports = async (browser, cookies, url, waitTimeToScrapMs = 500) => {
  logger.info('company', `starting scraping url: ${url}`)

  //TODO: implement company scraper

  const page = await openPage(browser, cookies, url)
  const organizationPageIndicatorSelector = '.org-page-details__definition-term'
  
  await page.waitFor(organizationPageIndicatorSelector, { timeout: 5000 })
    .catch(() => {
      logger.warn('organization', 'organization selector was not found')
    })


  // const contact = hasToGetContactInfo ? await contactInfo(page) : {}
  const [company] = await scrapSection(page, template.company)
  const [info] = await scrapSection(page, template.info)

  if(info.setor.includes('telefone')) {
    info.setor = info.setorAlternative
    delete info.setorAlternative
  }

  await page.close()
  logger.info('organization', `finished scraping url: ${url}`)

  const rawProfile = {
    company,
    info
  }
  const cleanedProfile = cleanCompanyData(rawProfile)
  return cleanedProfile
}

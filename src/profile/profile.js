const openPage = require('../openPage')
const scrapSection = require('../scrapSection')
const scrollToPageBottom = require('./scrollToPageBottom')
const seeMoreButtons = require('./seeMoreButtons')
const contactInfo = require('./contactInfo')
const template = require('./profileScraperTemplate')
const cleanProfileData = require('./cleanProfileData')

const logger = require('../logger')

module.exports = async (cookies, url, waitTimeToScrapMs = 500, hasToGetContactInfo = false) => {
  logger.info('profile', `starting scraping url: ${url}`)

  const page = await openPage(cookies, url)
  const profilePageIndicatorSelector = '.pv-profile-section'
  
  await page.waitFor(profilePageIndicatorSelector, { timeout: 5000 })
    .catch(() => {
      logger.warn('profile', 'profile selector was not found')
    })

  if(waitTimeToScrapMs) {
    logger.info('profile', `applying 1st delay`)
    await new Promise((resolve) => { setTimeout(() => { resolve() }, waitTimeToScrapMs / 2)})
  }

  const contact = hasToGetContactInfo ? await contactInfo(page) : {}
  const [profileAlternative] = await scrapSection(page, template.profileAlternative)
  const positions = await scrapSection(page, template.positions)

  await page.close()
  logger.info('profile', `finished scraping url: ${url}`)

  const rawProfile = {
    contact,
    profileAlternative,
    positions,
  }

  const cleanedProfile = cleanProfileData(rawProfile)
  return cleanedProfile
}

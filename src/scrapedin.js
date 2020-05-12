const login = require('./login')
const profile = require('./profile/profile')
const company = require('./company/company')
const logger = require('./logger')

module.exports = async({ cookies, hasToLog, hasToGetContactInfo, type }) => {
  if (!hasToLog) {
    logger.stopLogging()
  }
  logger.info('scrapedin', 'initializing')

  if(type === 'profile')
  {
  return (url, waitMs) =>  profile(cookies, url, waitMs, hasToGetContactInfo)
  } else {
  return (url, waitMs) =>  company(cookies, url, waitMs, hasToGetContactInfo)
  }
}

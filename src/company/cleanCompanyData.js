const logger = require('scrapedin/src/logger')

module.exports = (profile) => {

  if(!profile.company) {
    const messageError = 'LinkedIn website changed and scrapedin can\'t read basic data.'
    logger.error('cleanMessageData', messageError, '')
    throw new Error(messageError)
  } 

  return profile
}

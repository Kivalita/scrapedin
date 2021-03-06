const logger = require('../logger')

module.exports = (profile) => {

  if(!profile.profileAlternative) {
    const messageError = 'LinkedIn website changed and scrapedin can\'t read basic data.'
    logger.error('cleanMessageData', messageError, '')
    throw new Error(messageError)
  } 

  return profile
}

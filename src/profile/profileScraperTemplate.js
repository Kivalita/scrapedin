const alternativeProfileSelector = '.core-rail > *:first-child section >'

module.exports = {
  profileAlternative: {
    selector: '.pv-content',
    fields: {
      name: `${alternativeProfileSelector} div:last-child > div:last-child > div:first-child ul:first-child > li:first-child`,
    }
  },
  positions: {
    selector: 'section[id=experience-section] li',
    fields: {
      title: 'h3',
      companyLinkedinUrl : {
        selector: '.pv-profile-section__section-info > li:first-child div a',
        attribute: 'href'
      }
    }
  }
}

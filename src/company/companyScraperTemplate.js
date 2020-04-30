const alternativeProfileSelector = '.org-organization-page__container > *:last-child section >'

module.exports = {
  info: {
    selector: '.org-grid',
    fields: {
      site: `${alternativeProfileSelector} *:last-child > dd > a > span`,
      setor: `${alternativeProfileSelector} dl > dd:nth-child(4)`,
      setorAlternative: `${alternativeProfileSelector} dl > dd:nth-child(6)`,
    }
  },
  company: {
    selector: '.org-organization-page__container',
    fields: {
      companyName: '*:first-child section > *:last-child > *:last-child > *:last-child > *:first-child div > *:first-child > div.org-top-card-primary-content__content-inner > div > h1 > span'
    }
  }
}

import { ROLE } from './elementAttr';

const SOCIAL = Object.freeze({
  LINKEDIN: Object.freeze({
    target: '_blank',
    href: 'https://www.linkedin.com/company/vnator',
    rel: 'linkedin',
    role: ROLE.LINK,
  }),
  STACKSHARE: Object.freeze({
    target: '_blank',
    href: 'https://stackshare.io/vnator/vnator/main',
    rel: 'stackshare',
    role: ROLE.LINK,
  }),
  MAIL: Object.freeze({
    target: '_blank',
    href: 'mailto:contato@vnator.com',
    rel: 'email',
    role: ROLE.LINK,
  }),
  GITHUB: Object.freeze({
    target: '_blank',
    href: 'https://github.com/vnator',
    rel: 'github',
    role: ROLE.LINK,
  }),
});

export { SOCIAL };

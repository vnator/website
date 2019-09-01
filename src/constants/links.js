import { ROLE } from './elementAttr';
import { CHANEL } from './chanel';

const LINKS = Object.freeze({
  EMAIL: Object.freeze({
    target: '_blank',
    href: 'mailto:hi@vnator.com',
    rel: CHANEL.EMAIL,
    role: ROLE.LINK,
  }),
  GITHUB: Object.freeze({
    target: '_blank',
    href: 'https://github.com/vnator',
    rel: CHANEL.GITHUB,
    role: ROLE.LINK,
  }),
  MEDIUM: Object.freeze({
    target: '_blank',
    href: 'https://medium.com/vnator',
    rel: CHANEL.MEDIUM,
    role: ROLE.LINK,
  }),
  LINKEDIN: Object.freeze({
    target: '_blank',
    href: 'https://www.linkedin.com/company/vnator',
    rel: CHANEL.LINKEDIN,
    role: ROLE.LINK,
  }),
  STACKSHARE: Object.freeze({
    target: '_blank',
    href: 'https://stackshare.io/vnator/vnator/main',
    rel: CHANEL.STACKSHARE,
    role: ROLE.LINK,
  }),
});

export { LINKS };

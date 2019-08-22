import { ROLE } from './elementAttr';
import { CHANEL } from './chanel';

const LINKS = Object.freeze({
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
  GITHUB: Object.freeze({
    target: '_blank',
    href: 'https://github.com/vnator',
    rel: CHANEL.GITHUB,
    role: ROLE.LINK,
  }),
  MAIL: Object.freeze({
    target: '_blank',
    href: 'mailto:contato@vnator.com',
    rel: CHANEL.EMAIL,
    role: ROLE.LINK,
  }),
});

export { LINKS };

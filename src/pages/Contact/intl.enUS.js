import { CHANEL } from '../../constants/chanel';

const contact_enUS = {
  title: 'Contact',
  paragraph:
    'To chat with us directly you can use RocketChat or from our email.',
  subtitle: 'Our pages.',
  chanels: {
    [CHANEL.EMAIL]: {
      label: 'E-mail',
      link: 'contato@vnator.com',
    },
    [CHANEL.GITHUB]: {
      label: 'Github',
      link: 'github.com/vnator',
    },
    [CHANEL.LINKEDIN]: {
      label: 'Linkedin',
      link: 'linkedin.com/company/vnator',
    },
    [CHANEL.MEDIUM]: {
      label: 'Medium',
      link: 'medium.com/vnator',
    },
    [CHANEL.STACKSHARE]: {
      label: 'StackShare',
      link: 'stackshare.io/vnator',
    },
  },
};
export { contact_enUS };

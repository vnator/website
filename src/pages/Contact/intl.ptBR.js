import { CHANEL } from '../../constants/chanel';

const contact_ptBR = {
  title: 'Contato',
  paragraph:
    'Sintasse a vontade para conversar conosco através do Rocket Chat ou pelo do nosso E-mail.',
  subtitle: 'Nossas páginas na web.',
  chanels: {
    [CHANEL.EMAIL]: {
      label: 'E-mail',
      link: 'hi@vnator.com',
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

export { contact_ptBR };

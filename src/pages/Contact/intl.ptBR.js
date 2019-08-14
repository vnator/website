import { FORM, HINT } from '../../constants/form';

const contact_ptBR = {
  title: 'Contato',
  form: {
    legend: 'Gostaria de nos deixar uma mensagem?',
    input: {
      [FORM.EMAIL]: {
        label: 'E-mail',
        placeholder: 'Digite seu e-mail',
      },
      [FORM.NAME]: {
        label: 'Nome',
        placeholder: 'Digite seu nome completo',
      },
      [FORM.SUBJECT]: {
        label: 'Assunto',
        placeholder: 'Qual o motivo da sua mensagem?',
      },
      [FORM.MESSAGE]: {
        label: 'Mensagem',
        placeholder: 'Deixe sua mensagem',
      },
    },
    hint: {
      [HINT.EMAIL]: 'digite um e-mail valido',
      [HINT.MIN]: 'mínimo {number} caracteres',
      [HINT.MAX]: '{current}/{max}',
      [HINT.REQUIRED]: 'campo obrigatório',
    },
  },
};

export { contact_ptBR };

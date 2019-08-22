import { FORM, HINT } from '../../constants/form';

const contact_enUS = {
  title: 'Contact',
  submited: 'Email successfully sent. Thank you for your contact.',
  form: {
    legend: 'Leave us a message',
    input: {
      [FORM.EMAIL]: {
        label: 'E-mail',
        placeholder: 'Type your e-mail',
      },
      [FORM.NAME]: {
        label: 'Name',
        placeholder: 'Type your full name',
      },
      [FORM.SUBJECT]: {
        label: 'Subject',
        placeholder: 'what is the reason for your contact?',
      },
      [FORM.MESSAGE]: {
        label: 'Message',
        placeholder: 'Type your message',
      },
    },
    submit: 'submit',
    hint: {
      [HINT.EMAIL]: 'type a valid e-mail',
      [HINT.MIN]: 'min {number} chars',
      [HINT.MAX]: '{current}/{max}',
      [HINT.REQUIRED]: 'required',
    },
  },
};
export { contact_enUS };

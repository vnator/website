import React from 'react';
import { useIntl } from 'react-intl';

import style from './Contact.module.css';
import { Title } from '../../components/Title/Title';
import { FORM, TYPE } from '../../constants/form';

const Contact = () => {
  const { formatMessage } = useIntl();

  return (
    <div className={style.Contact}>
      <Title>{formatMessage({ id: 'contact.title' })}</Title>

      <form className={style.form}>
        <legend>{formatMessage({ id: 'contact.form.legend' })}</legend>
        <div className={style.inputBox}>
          <label className={style.label}>
            {formatMessage({ id: `contact.form.input.${FORM.NAME}.label` })}
          </label>
          <input
            type={TYPE.TEXT}
            name={FORM.NAME}
            placeholder={formatMessage({
              id: `contact.form.input.${FORM.NAME}.placeholder`,
            })}
          />
        </div>
        <div className={style.inputBox}>
          <label className={style.label}>
            {formatMessage({ id: `contact.form.input.${FORM.EMAIL}.label` })}
          </label>
          <input
            type={TYPE.EMAIL}
            name={FORM.EMAIL}
            placeholder={formatMessage({
              id: `contact.form.input.${FORM.EMAIL}.placeholder`,
            })}
          />
        </div>
        <div className={style.inputBox}>
          <label className={style.label}>
            {formatMessage({ id: `contact.form.input.${FORM.SUBJECT}.label` })}
          </label>
          <input
            type={TYPE.TEXT}
            name={FORM.SUBJECT}
            placeholder={formatMessage({
              id: `contact.form.input.${FORM.SUBJECT}.placeholder`,
            })}
          />
        </div>
        <div className={style.inputBox}>
          <label className={style.label}>
            {formatMessage({ id: `contact.form.input.${FORM.MESSAGE}.label` })}
          </label>
          <textarea
            name={FORM.MESSAGE}
            placeholder={formatMessage({
              id: `contact.form.input.${FORM.MESSAGE}.placeholder`,
            })}
          />
        </div>
      </form>
    </div>
  );
};

export { Contact };

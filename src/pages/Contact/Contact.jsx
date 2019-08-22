import React, { useState } from 'react';
import { useIntl } from 'react-intl';

import style from './Contact.module.css';
import { FORM, TYPE } from '../../constants/form';
import { Banner } from '../../components/Banner/Banner';
import imgDesktop from '../../img/banner-contact-desktop.jpeg';
import imgMobile from '../../img/banner-contact-mobile.jpeg';
import { IconRotate } from '../../components/Icon';

const Contact = () => {
  const { formatMessage } = useIntl();
  const [submiting, setSubmiting] = useState(false);
  const [input, setInput] = useState({
    [FORM.NAME]: '',
    [FORM.EMAIL]: '',
    [FORM.SUBJECT]: '',
    [FORM.MESSAGE]: '',
  });


  const submit = e => {
    e.preventDefault();
    console.log('enviando');
    setSubmiting(true);

    // USE Submit function
    setTimeout(() => {
      console.log(input);
    }, 6000);

    setSubmiting(false);
  };

  return (
    <div className={style.Contact}>
      <Banner
        img={{ desktop: imgDesktop, mobile: imgMobile }}
        title={formatMessage({ id: 'contact.title' })}
        white
      />
      <div className={style.super}>
        <div className={style.container}>
          <form className={style.form} onSubmit={submit}>
            <legend className={style.legend}>
              {formatMessage({ id: 'contact.form.legend' })}
            </legend>
            <div className={style.inputBox}>
              <label className={style.label}>
                {formatMessage({ id: `contact.form.input.${FORM.NAME}.label` })}
              </label>
              <input
                required
                type={TYPE.TEXT}
                name={FORM.NAME}
                value={input[FORM.NAME]}
                onChange={e => {
                  e.preventDefault();
                  console.log('caraio');
                  setInput({
                    ...input,
                    [FORM.NAME]: e.target.value,
                  });
                }}
                placeholder={formatMessage({
                  id: `contact.form.input.${FORM.NAME}.placeholder`,
                })}
              />
            </div>
            <div className={style.line}>
              <div className={style.inputBox}>
                <label className={style.label}>
                  {formatMessage({
                    id: `contact.form.input.${FORM.EMAIL}.label`,
                  })}
                </label>
                <input
                  required
                  type={TYPE.EMAIL}
                  name={FORM.EMAIL}
                  value={input[FORM.EMAIL]}
                  onChange={e => {
                    e.preventDefault();
                    console.log('caraio');
                    setInput({
                      ...input,
                      [FORM.EMAIL]: e.target.value,
                    });
                  }}
                  placeholder={formatMessage({
                    id: `contact.form.input.${FORM.EMAIL}.placeholder`,
                  })}
                />
              </div>
              <div className={style.inputBox}>
                <label className={style.label}>
                  {formatMessage({
                    id: `contact.form.input.${FORM.SUBJECT}.label`,
                  })}
                </label>
                <input
                  required
                  type={TYPE.TEXT}
                  name={FORM.SUBJECT}
                  value={input[FORM.SUBJECT]}
                  onChange={e => {
                    e.preventDefault();
                    console.log('caraio');
                    setInput({
                      ...input,
                      [FORM.SUBJECT]: e.target.value,
                    });
                  }}
                  placeholder={formatMessage({
                    id: `contact.form.input.${FORM.SUBJECT}.placeholder`,
                  })}
                />
              </div>
            </div>
            <div className={style.inputBox}>
              <label className={style.label}>
                {formatMessage({
                  id: `contact.form.input.${FORM.MESSAGE}.label`,
                })}
              </label>
              <textarea
                required
                name={FORM.MESSAGE}
                value={input[FORM.MESSAGE]}
                onChange={e => {
                  e.preventDefault();
                  console.log('caraio');
                  setInput({
                    ...input,
                    [FORM.MESSAGE]: e.target.value,
                  });
                }}
                placeholder={formatMessage({
                  id: `contact.form.input.${FORM.MESSAGE}.placeholder`,
                })}
              />
            </div>

            <div className={style.inputBox}>
              <button
                type="submit"
                className={style.submit}
                disabled={
                  submiting ||
                  !Object.values(input).every(
                    value => value !== '' || value !== undefined,
                  )
                }>
                {submiting ? (
                  <IconRotate className={style.rotate} />
                ) : (
                  formatMessage({
                    id: `contact.form.submit`,
                  })
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { Contact };

import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconGit = (props) => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.dev.git' })}</title>
      <path
        fill="#f05032"
        d="M31.395 14.573l-13.972-13.971c-0.805-0.804-2.109-0.804-2.917 0l-2.895 2.9 3.68 3.68c0.86-0.287 1.839-0.093 2.519 0.588 0.688 0.687 0.877 1.677 0.584 2.533l3.544 3.547c0.86-0.297 1.849-0.104 2.533 0.58 0.961 0.96 0.961 2.512 0 3.472-0.959 0.959-2.508 0.959-3.467 0-0.719-0.721-0.899-1.783-0.539-2.661l-3.319-3.301v8.7c0.235 0.115 0.456 0.271 0.651 0.464 0.951 0.961 0.951 2.511 0 3.467-0.959 0.961-2.519 0.961-3.479 0-0.959-0.959-0.959-2.505 0-3.464 0.243-0.24 0.516-0.421 0.807-0.541v-8.785c-0.289-0.121-0.565-0.296-0.8-0.535-0.727-0.727-0.901-1.789-0.528-2.679l-3.616-3.633-9.581 9.575c-0.8 0.807-0.8 2.112 0 2.919l13.973 13.969c0.805 0.805 2.109 0.805 2.915 0l13.907-13.907c0.807-0.804 0.807-2.109 0-2.916z"></path>
    </Svg>
  );
};

IconGit.defaultProps = {
  viewBox: {
    minX: 0,
    minY: 0,
    width: 32,
    height: 32,
  },
  size: {
    height: undefined,
    width: undefined,
  },
  className: '',
};

IconGit.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconGit };

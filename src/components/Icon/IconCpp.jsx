import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconCpp = props => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.languages.cpp' })}</title>
      <path
        fill="#00599c"
        d="M29.857 8c-0.223-0.387-0.531-0.724-0.869-0.92l-11.755-6.787c-0.677-0.391-1.785-0.391-2.463 0l-11.757 6.787c-0.677 0.391-1.231 1.351-1.231 2.133v13.573c0 0.392 0.139 0.827 0.361 1.213s0.531 0.724 0.869 0.919l11.755 6.788c0.677 0.391 1.785 0.391 2.463 0l11.755-6.788c0.339-0.195 0.647-0.532 0.869-0.919s0.361-0.821 0.361-1.213v-13.573c0.003-0.392-0.136-0.827-0.359-1.213zM16 25.479c-5.227 0-9.479-4.252-9.479-9.479s4.252-9.479 9.479-9.479c3.487 0.007 6.533 1.889 8.184 4.691l0.024 0.044-4.101 2.375c-0.837-1.426-2.361-2.369-4.106-2.372h-0c-2.613 0-4.739 2.127-4.739 4.74s2.125 4.74 4.739 4.74c1.745-0.004 3.269-0.946 4.095-2.348l0.012-0.022 4.103 2.373c-1.675 2.847-4.722 4.729-8.208 4.736h-0.001zM25.479 16.527h-1.053v1.053h-1.053v-1.053h-1.053v-1.053h1.053v-1.053h1.053v1.053h1.053v1.053zM29.428 16.527h-1.053v1.053h-1.053v-1.053h-1.052v-1.053h1.052v-1.053h1.053v1.053h1.053v1.053z"></path>
    </Svg>
  );
};

IconCpp.defaultProps = {
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

IconCpp.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconCpp };

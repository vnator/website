import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconStackshare = props => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.chanel.stackshare' })}</title>
      <path d="M22.945 8.929c-0.047-0.365 0-0.792 0-0.792v-0.013c0.188-0.952 1.028-1.672 2.033-1.672 0.007 0 0.012 0.001 0.019 0.001h0.003c1.145 0 2.076 0.931 2.076 2.075s-0.929 2.075-2.076 2.075c-0.004 0-0.008-0.001-0.012-0.001h-0.009c-0.989-0.001-1.84-0.701-2.033-1.672zM32 2.053v27.893c0 1.135-0.861 2.053-1.924 2.053h-28.151c-1.063 0-1.925-0.919-1.925-2.053v-27.893c0-1.133 0.863-2.053 1.925-2.053h28.151c1.063 0 1.924 0.92 1.924 2.053zM28.929 23.396c0-2.181-1.768-3.949-3.948-3.949-1.756 0-3.303 1.16-3.792 2.845h-2.344l-3.656-6.295 0.003-0.005 3.648-6.279h2.331c0.609 2.095 2.803 3.299 4.897 2.689s3.3-2.803 2.689-4.897c-0.609-2.095-2.803-3.299-4.896-2.689-1.3 0.387-2.303 1.389-2.683 2.661l-0.007 0.028h-3.553l-0.035-0.021-4.336 7.459h-2.556c-0.609-2.095-2.803-3.299-4.897-2.688s-3.299 2.803-2.689 4.897c0.611 2.095 2.804 3.299 4.897 2.689 1.297-0.377 2.311-1.393 2.689-2.689h2.615l4.277 7.36 0.020-0.012h3.587c0.492 1.657 2.002 2.845 3.789 2.845 0 0 0 0 0 0h0.003c2.181 0 3.948-1.768 3.948-3.949zM25.019 21.237c-0.991 0.003-1.841 0.701-2.036 1.672-0.005 0.039-0.005 0.076-0.009 0.113-0.005 0.023-0.020 0.039-0.024 0.061-0.055 0.401 0 0.803 0 0.803 0.231 1.123 1.327 1.844 2.449 1.612 0.764-0.157 1.34-0.731 1.552-1.451 0.087-0.229 0.14-0.475 0.14-0.735 0-1.145-0.929-2.076-2.072-2.076zM6.933 13.889c-1.144 0-2.075 0.931-2.075 2.076 0 0.008 0.003 0.016 0.003 0.024 0 0.004-0.001 0.007-0.001 0.011 0.001 1.139 0.924 2.063 2.064 2.064 0.721-0.001 1.353-0.371 1.723-0.931 0.228-0.332 0.363-0.735 0.363-1.167 0-1.147-0.931-2.077-2.076-2.077z"></path>
    </Svg>
  );
};

IconStackshare.defaultProps = {
  className: '',
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
};

IconStackshare.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconStackshare };

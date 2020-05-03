import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from '../Svg/Svg';

const IconArch = (props) => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.dev.arch' })}</title>
      <path
        fill="#1793d1"
        d="M15.187 0.807c-1.353 3.315-2.168 5.485-3.673 8.702 0.924 0.98 2.057 2.119 3.897 3.405-1.979-0.814-3.328-1.631-4.337-2.479-1.927 4.021-4.947 9.749-11.074 20.758 4.816-2.78 8.549-4.493 12.028-5.149-0.149-0.641-0.234-1.338-0.229-2.063l0.005-0.154c0.077-3.086 1.682-5.459 3.582-5.297 1.901 0.16 3.378 2.794 3.304 5.879-0.014 0.581-0.080 1.139-0.195 1.657 3.441 0.673 7.136 2.383 11.886 5.125-0.936-1.724-1.773-3.278-2.571-4.759-1.258-0.975-2.569-2.244-5.244-3.617 1.839 0.478 3.156 1.029 4.182 1.645-8.12-15.113-8.775-17.122-11.56-23.654zM30.53 28.48v-0.831h-0.311v-0.112h0.749v0.112h-0.313v0.831h-0.125zM31.097 28.48v-0.943h0.189l0.223 0.668c0.021 0.063 0.036 0.11 0.045 0.141 0.011-0.034 0.027-0.085 0.051-0.152l0.225-0.658h0.169v0.943h-0.121v-0.791l-0.275 0.791h-0.112l-0.273-0.803v0.803h-0.121z"></path>
    </Svg>
  );
};

IconArch.defaultProps = {
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

IconArch.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconArch };

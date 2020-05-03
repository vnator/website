import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from '../Svg/Svg';

const IconAws = (props) => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.dev.aws' })}</title>
      <path
        fill="#f90"
        d="M15.63 31.388l-7.135-2.56v-10.455l7.135 2.43zM16.93 31.388l7.135-2.56v-10.455l-7.135 2.432zM9.23 17.588l7.2-2.033 6.696 2.16-6.696 2.273zM7.138 16.788l-7.138-2.568v-10.47l7.135 2.43zM8.445 16.788l7.135-2.56v-10.478l-7.137 2.442zM0.745 2.988l7.2-2.043 6.696 2.16-6.696 2.273zM23.797 16.788l-7.135-2.56v-10.478l7.135 2.43zM25.097 16.788l7.135-2.56v-10.478l-7.135 2.43zM17.397 2.988l7.2-2.033 6.696 2.16-6.696 2.273z"
      />
    </Svg>
  );
};

IconAws.defaultProps = {
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

IconAws.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconAws };

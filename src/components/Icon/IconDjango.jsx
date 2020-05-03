import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from '../Svg/Svg';

const IconDjango = (props) => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.persistence.django' })}</title>
      <path d="M14.861 0h5.232v24.22c-2.684 0.509-4.655 0.713-6.795 0.713-6.388 0-9.717-2.888-9.717-8.427 0-5.335 3.533-8.8 9.004-8.8 0.849 0 1.495 0.068 2.276 0.272v-7.979zM14.861 12.191c-0.496-0.173-1.067-0.273-1.662-0.273-0.037 0-0.074 0-0.111 0.001l0.005-0c-2.651 0-4.179 1.631-4.179 4.485 0 2.787 1.461 4.315 4.145 4.315 0.577 0 1.053-0.033 1.8-0.136v-8.393zM28.419 8.080v12.129c0 4.179-0.305 6.184-1.223 7.916-0.849 1.665-1.971 2.719-4.281 3.873l-4.859-2.311c2.311-1.087 3.432-2.039 4.145-3.5 0.748-1.495 0.985-3.228 0.985-7.78v-10.329h5.232zM23.187 0.028h5.232v5.368h-5.232v-5.368z"></path>
    </Svg>
  );
};

IconDjango.defaultProps = {
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

IconDjango.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconDjango };

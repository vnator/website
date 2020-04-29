import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconDocker = (props) => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.archtectural.docker' })}</title>
      <path
        fill="#1488c6"
        d="M6.427 23.033c-0.912 0-1.739-0.747-1.739-1.653s0.747-1.657 1.74-1.657c0.997 0 1.747 0.747 1.747 1.656s-0.829 1.653-1.74 1.653zM27.776 14.016c-0.18-1.323-1-2.4-2.080-3.227l-0.42-0.333-0.339 0.413c-0.659 0.747-0.92 2.071-0.84 3.060 0.080 0.749 0.32 1.493 0.739 2.072-0.339 0.173-0.757 0.333-1.080 0.503-0.76 0.249-1.499 0.333-2.24 0.333h-21.387l-0.080 0.493c-0.16 1.576 0.080 3.227 0.749 4.72l0.325 0.58v0.080c2 3.311 5.56 4.8 9.437 4.8 7.459 0 13.576-3.227 16.476-10.177 1.9 0.083 3.819-0.413 4.72-2.235l0.24-0.413-0.4-0.249c-1.080-0.659-2.56-0.747-3.8-0.413l-0.024 0.003zM17.099 12.693h-3.237v3.227h3.24v-3.229l-0.003 0.004zM17.099 8.636h-3.237v3.227h3.24v-3.223l-0.003-0.004zM17.099 4.497h-3.237v3.227h3.24v-3.227h-0.003zM21.059 12.693h-3.219v3.227h3.227v-3.229l-0.009 0.004zM9.061 12.693h-3.217v3.227h3.229v-3.229l-0.013 0.004zM13.101 12.693h-3.2v3.227h3.219v-3.229l-0.020 0.004zM5.061 12.693h-3.195v3.227h3.237v-3.229l-0.040 0.004zM13.101 8.636h-3.2v3.227h3.219v-3.223l-0.020-0.004zM9.041 8.636h-3.192v3.227h3.217v-3.223l-0.021-0.004z"></path>
    </Svg>
  );
};

IconDocker.defaultProps = {
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

IconDocker.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconDocker };

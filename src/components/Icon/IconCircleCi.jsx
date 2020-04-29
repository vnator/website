import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconCircleCi = (props) => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.dev.circleCi' })}</title>
      <path d="M11.951 16c0-2.112 1.712-3.807 3.807-3.807 2.096 0 3.808 1.712 3.808 3.807 0 2.096-1.712 3.808-3.808 3.808-2.093 0-3.807-1.712-3.807-3.808zM15.757 0c-7.471 0-13.728 5.12-15.504 12.033-0.013 0.048-0.013 0.093-0.013 0.16 0 0.417 0.336 0.768 0.767 0.768h6.447c0.307 0 0.577-0.173 0.689-0.444 1.329-2.88 4.24-4.896 7.616-4.896 4.621 0 8.381 3.76 8.381 8.383 0 4.627-3.76 8.387-8.387 8.387-3.373 0-6.285-2-7.613-4.897-0.129-0.253-0.387-0.448-0.689-0.448h-6.444c-0.416 0-0.767 0.337-0.767 0.768 0 0.049 0.019 0.096 0.019 0.16 1.76 6.907 8.027 12.027 15.499 12.027 8.832 0 16-7.167 16-16 0-8.831-7.168-16-16-16z"></path>
    </Svg>
  );
};

IconCircleCi.defaultProps = {
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

IconCircleCi.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconCircleCi };

import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconRedux = props => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.frontend.redux' })}</title>
      <path
        fill="#764abc"
        d="M22.177 22.005c1.159-0.1 2.057-1.12 1.999-2.339-0.061-1.219-1.060-2.197-2.277-2.197h-0.081c-1.257 0.041-2.237 1.099-2.197 2.359 0.040 0.639 0.301 1.159 0.659 1.537-1.397 2.717-3.495 4.715-6.672 6.393-2.137 1.117-4.395 1.539-6.592 1.239-1.837-0.259-3.275-1.080-4.155-2.397-1.317-1.999-1.437-4.155-0.34-6.312 0.801-1.559 1.999-2.697 2.799-3.257-0.2-0.519-0.44-1.397-0.56-2.056-5.915 4.236-5.313 10.028-3.516 12.765 1.339 1.997 4.076 3.275 7.072 3.275 0.799 0 1.639-0.059 2.457-0.259 5.195-0.999 9.129-4.115 11.387-8.709l0.019-0.041zM29.308 17.011c-3.095-3.636-7.651-5.633-12.845-5.633h-0.68c-0.337-0.739-1.116-1.199-1.996-1.199h-0.060c-1.257 0-2.237 1.080-2.196 2.337 0.040 1.197 1.059 2.197 2.277 2.197h0.099c0.9-0.040 1.679-0.6 1.997-1.399h0.74c3.079 0 5.993 0.899 8.651 2.656 2.036 1.339 3.496 3.096 4.315 5.195 0.717 1.717 0.679 3.396-0.060 4.796-1.139 2.196-3.057 3.356-5.593 3.356-1.599 0-3.156-0.5-3.956-0.859-0.479 0.397-1.279 1.057-1.859 1.457 1.757 0.797 3.536 1.257 5.253 1.257 3.896 0 6.791-2.196 7.891-4.315 1.197-2.397 1.099-6.432-1.959-9.888l-0.019 0.040zM8.653 22.723c0.039 1.199 1.057 2.197 2.277 2.197h0.080c1.279-0.040 2.257-1.097 2.197-2.357 0-1.199-1.039-2.196-2.257-2.196h-0.081c-0.080 0-0.199 0-0.3 0.039-1.657-2.797-2.357-5.795-2.096-9.028 0.159-2.437 0.959-4.556 2.396-6.313 1.199-1.499 3.456-2.239 4.995-2.277 4.315-0.081 6.113 5.295 6.252 7.432l1.997 0.599c-0.46-6.552-4.533-9.989-8.429-9.989-3.656 0-7.031 2.657-8.391 6.553-1.857 5.195-0.639 10.188 1.639 14.184-0.199 0.26-0.319 0.719-0.279 1.157z"></path>
    </Svg>
  );
};

IconRedux.defaultProps = {
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

IconRedux.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconRedux };

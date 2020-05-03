import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from '../Svg/Svg';

const IconMongo = (props) => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.persistence.mongoDB' })}</title>
      <path
        fill="#47a248"
        d="M22.907 12.691c-1.684-7.413-5.656-9.849-6.083-10.781-0.469-0.657-0.977-1.909-0.977-1.909-0.003 0.025-0.005 0.041-0.007 0.065v0.017h-0.001c-0.003 0.020-0.004 0.033-0.005 0.052v0.020h-0.003c0 0.013-0.003 0.024-0.003 0.035v0.035h-0.004c-0.001 0.011-0.001 0.024-0.004 0.033v0.028h-0.003c0 0.009 0 0.020-0.003 0.028v0.027h-0.003c0 0.013-0.001 0.029-0.003 0.043v0.003c-0.004 0.023-0.008 0.045-0.012 0.067v0.011h-0.003c-0.001 0.005-0.004 0.011-0.004 0.016v0.023h-0.004v0.029h-0.007v0.024h-0.007v0.028h-0.005v0.025h-0.005v0.023h-0.008v0.019h-0.005v0.024h-0.005v0.019h-0.007v0.017h-0.004v0.020h-0.005c-0.001 0.001-0.001 0.004-0.001 0.005v0.013h-0.004c-0.001 0.003-0.001 0.005-0.001 0.008v0.008h-0.003c-0.001 0.004-0.003 0.011-0.003 0.013-0.004 0.009-0.009 0.019-0.013 0.028v0.003c-0.003 0.003-0.005 0.007-0.007 0.009v0.011h-0.005v0.011h-0.007v0.011h-0.004v0.013h-0.008v0.019h-0.005v0.005h-0.005v0.011h-0.005v0.015h-0.005v0.011h-0.008v0.015h-0.005v0.011h-0.007v0.011h-0.004v0.013h-0.007v0.011h-0.005v0.008h-0.005v0.011h-0.008v0.012h-0.005v0.008h-0.007v0.011h-0.005v0.015h-0.007v0.005h-0.004v0.011h-0.008v0.005h-0.005v0.013h-0.005v0.005h-0.005v0.011h-0.007v0.008h-0.004l-0.003 0.005v0.005h-0.003c-0.001 0.003-0.003 0.003-0.003 0.005v0.001h-0.001c-0.001 0.004-0.003 0.007-0.005 0.009v0.004h-0.001c-0.007 0.008-0.011 0.016-0.016 0.024v0.001c-0.003 0.003-0.009 0.008-0.012 0.013v0.003h-0.001c-0.001 0.001-0.004 0.003-0.004 0.004v0.004h-0.003l-0.004 0.004v0.001h-0.001c0 0.001-0.003 0.003-0.004 0.005v0.005h-0.004l-0.003 0.003v0.003h-0.003c0 0.003-0.003 0.003-0.003 0.004v0.004h-0.005c0 0.001-0.001 0.003-0.003 0.004v0.008h-0.004v0.005h-0.005v0.008h-0.005v0.011h-0.007v-0.011h-0.007v0.005h-0.005v0.008h-0.007v0.011h-0.007v0.005h-0.005v0.008h-0.005v0.005h-0.005v0.011h-0.008v0.005h-0.005v0.008h-0.007v0.005h-0.005v0.007h-0.007v0.013h-0.003v0.005h-0.008v0.007h-0.005v0.003h-0.005v0.005h-0.007v0.013h-0.005v0.005h-0.007v0.005h-0.005v0.008h-0.007v0.005h-0.007v0.005h-0.005v0.005h-0.005v0.013h-0.005v0.007h-0.008v0.005h-0.005v0.005h-0.007v0.008h-0.005v0.005h-0.007v0.009h-0.005v0.005h-0.008v0.008h-0.003v0.005h-0.005v0.005h-0.007v0.005h-0.005v0.008h-0.007v0.005h-0.004c-0.001 0.001-0.001 0.003-0.001 0.003v0.003h-0.003l-0.005 0.005s-0.003 0.003-0.005 0.004v0.008h-0.005v0.007h-0.005v0.005h-0.005v0.005h-0.004l-0.004 0.004v0.004h-0.003l-0.003 0.003v0.004h-0.003c-0.007 0.008-0.009 0.013-0.019 0.021-0.003 0.003-0.011 0.009-0.016 0.013-0.016 0.011-0.036 0.028-0.052 0.043-0.011 0.007-0.021 0.016-0.029 0.023v0.001h-0.001c-0.021 0.017-0.041 0.033-0.065 0.052v0.001c-0.032 0.027-0.063 0.052-0.099 0.083v-0.001h-0.003c-0.076 0.063-0.156 0.133-0.248 0.212v0.001h-0.001c-0.225 0.197-0.493 0.451-0.793 0.757l-0.025 0.025c-1.813 1.876-4.671 5.785-4.972 12.103-0.027 0.523-0.021 1.031 0.008 1.525v0.012c0.145 2.489 0.927 4.615 1.904 6.341v0.001c0.389 0.688 0.809 1.313 1.235 1.873v0.001c1.469 1.94 2.969 3.089 3.352 3.368 0.588 1.364 0.533 3.705 0.533 3.705l0.859 0.287s-0.175-2.268 0.071-3.363c0.076-0.343 0.256-0.635 0.465-0.883 0.141-0.1 0.56-0.401 1.063-0.86 0.024-0.025 0.037-0.048 0.059-0.072 2.028-1.891 5.816-6.547 4.517-14.132z"></path>
    </Svg>
  );
};

IconMongo.defaultProps = {
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

IconMongo.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconMongo };

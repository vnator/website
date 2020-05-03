import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from '../Svg/Svg';

const IconNodeJs = (props) => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.languages.nodeJs' })}</title>
      <path
        fill="#8cc84b"
        d="M14.656 0.427c0.8-0.453 1.82-0.455 2.6 0l11.944 6.733c0.747 0.42 1.247 1.253 1.24 2.114v13.5c0.005 0.897-0.544 1.748-1.332 2.16l-11.88 6.702c-0.363 0.204-0.796 0.324-1.258 0.324-0.512 0-0.99-0.148-1.392-0.404l0.011 0.006-3.565-2.060c-0.243-0.145-0.516-0.26-0.688-0.495 0.152-0.204 0.422-0.23 0.642-0.32 0.496-0.158 0.95-0.4 1.406-0.656 0.115-0.080 0.256-0.050 0.366 0.022l3.040 1.758c0.217 0.125 0.437-0.040 0.623-0.145l11.665-6.583c0.144-0.070 0.224-0.222 0.212-0.38v-13.37c0.016-0.18-0.087-0.344-0.25-0.417l-11.85-6.673c-0.065-0.046-0.146-0.073-0.233-0.073s-0.167 0.027-0.233 0.073l0.001-0.001-11.833 6.687c-0.16 0.073-0.27 0.235-0.25 0.415v13.37c-0.014 0.158 0.070 0.307 0.215 0.375l3.162 1.785c0.594 0.32 1.323 0.5 1.977 0.265 0.572-0.22 0.971-0.765 0.971-1.404 0-0.002 0-0.004 0-0.006v0l0.003-13.29c-0.014-0.197 0.172-0.36 0.363-0.34h1.52c0.2-0.005 0.357 0.207 0.33 0.405l-0.003 13.374c0.001 1.188-0.487 2.48-1.586 3.063-1.354 0.7-3.028 0.553-4.366-0.12l-3.4-1.88c-0.8-0.4-1.337-1.264-1.332-2.16v-13.5c0.007-0.919 0.518-1.718 1.269-2.135l0.013-0.006 11.878-6.715zM18.1 9.785c1.727-0.1 3.576-0.066 5.13 0.785 1.203 0.652 1.87 2.020 1.892 3.358-0.034 0.18-0.222 0.28-0.394 0.267-0.5-0.001-1.002 0.007-1.504-0.003-0.213 0.008-0.336-0.188-0.363-0.376-0.144-0.64-0.493-1.273-1.095-1.582-0.924-0.463-1.996-0.44-3.004-0.43-0.736 0.040-1.527 0.103-2.15 0.535-0.48 0.328-0.624 1-0.453 1.522 0.16 0.383 0.603 0.506 0.964 0.62 2.082 0.544 4.287 0.5 6.33 1.207 0.845 0.292 1.672 0.86 1.962 1.745 0.378 1.186 0.213 2.604-0.63 3.556-0.684 0.784-1.68 1.2-2.675 1.442-1.323 0.295-2.695 0.302-4.038 0.17-1.263-0.144-2.577-0.476-3.552-1.336-0.834-0.724-1.24-1.852-1.2-2.94 0.010-0.184 0.193-0.312 0.37-0.297h1.5c0.202-0.014 0.35 0.16 0.36 0.35 0.093 0.6 0.322 1.25 0.854 1.6 1.026 0.662 2.313 0.616 3.487 0.635 0.973-0.043 2.065-0.056 2.86-0.7 0.42-0.367 0.543-0.98 0.43-1.508-0.123-0.446-0.6-0.653-1-0.8-2.055-0.65-4.285-0.414-6.32-1.15-0.826-0.292-1.625-0.844-1.942-1.693-0.443-1.2-0.24-2.687 0.693-3.607 0.9-0.915 2.22-1.268 3.47-1.394z"></path>
    </Svg>
  );
};

IconNodeJs.defaultProps = {
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

IconNodeJs.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconNodeJs };

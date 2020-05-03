import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from '../Svg/Svg';

const IconSketch = ({ className, ...props }) => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props} className={className}>
      <title>{formatMessage({ id: 'icon.figure.sketch' })}</title>
      <path
        fill="#e0e0e2"
        d="M0.472 6.998c0 0 0.045 16.231 0 17.973 0.045 1.666 1.409 3.003 3.086 3.003h15.486l10.278-10.278v-10.698h-28.85z"
      />
      <path
        fill="#ffca10"
        d="M15.539 31.479h15.991v-15.991l-15.991 15.991zM28.135 28.149h-5.133l5.133-5.133v5.133z"
      />
      <path fill="#ffa304" d="M29.965 17.054v14.425h1.566v-15.991z" />
      <path
        fill="#546f7a"
        d="M27.954 2.262l-1.46-1.46c-0.376-0.376-0.985-0.376-1.361 0l-1.263 1.263 2.821 2.821 1.263-1.263c0.376-0.376 0.376-0.985 0-1.361z"
      />
      <path
        fill="#475d63"
        d="M27.954 2.262l-0.94-0.94c0.376 0.376 0.376 0.985 0 1.361l-1.263 1.263 0.94 0.94 1.263-1.263c0.376-0.376 0.376-0.985 0-1.361z"
      />
      <path
        fill="#ff6137"
        d="M23.87 2.065l2.821 2.821-1.526 1.526-2.821-2.821 1.526-1.526z"
      />
      <path
        fill="#e04f32"
        d="M25.751 3.946l0.94 0.94-1.526 1.526-0.94-0.94 1.526-1.526z"
      />
      <path fill="#ffc89f" d="M10.417 18.34l4.355-1.537-2.818-2.818z" />
      <path
        fill="#f7b081"
        d="M13.835 15.865l-2.907 1.026-0.511 1.448 4.355-1.537z"
      />
      <path
        fill="#ffd039"
        d="M25.164 6.413l-10.388 10.388-2.821-2.821 10.388-10.388 2.821 2.821z"
      />
      <path
        fill="#ffa304"
        d="M25.164 6.413l-10.388 10.388-0.939-0.939 10.388-10.388 0.939 0.939z"
      />
      <path
        fill="#919191"
        d="M3.694 21.831v-19.949c-1.781 0-3.224 1.444-3.224 3.224v19.949c0-1.781 1.444-3.224 3.224-3.224z"
      />
      <path
        fill="#c6c5ca"
        d="M8.663 18.34h1.753l1.539-4.36 6.982-6.982h-1.753l-6.982 6.982z"
      />
      <path fill="#c6c5ca" d="M27.756 6.998v12.264l1.566-1.566v-10.698z" />
      <path fill="#3c5156" d="M10.417 18.34l2.033-0.717-1.315-1.315z" />
      <path
        fill="#000"
        d="M28.315 22.583c-0.175-0.073-0.378-0.033-0.512 0.102l-5.133 5.133c-0.134 0.134-0.174 0.336-0.102 0.512s0.244 0.29 0.434 0.29h5.133c0.259 0 0.47-0.21 0.47-0.47v-5.133c-0-0.19-0.114-0.361-0.29-0.434zM27.665 27.68h-3.529l3.529-3.529 0 3.529z"
      />
      <path
        fill="#000"
        d="M31.71 15.054c-0.175-0.073-0.378-0.033-0.512 0.102l-1.407 1.407v-9.564c0-0.259-0.21-0.47-0.47-0.47h-3.609l1.31-1.31c0-0 0-0 0.001-0.001l1.262-1.262c0.27-0.27 0.419-0.63 0.419-1.013s-0.149-0.742-0.419-1.013l-1.46-1.46c-0.27-0.27-0.63-0.419-1.013-0.419s-0.742 0.149-1.013 0.419l-6.058 6.058h-14.579v-4.647c0-0.259-0.21-0.47-0.47-0.47-2.037 0-3.694 1.657-3.694 3.694v19.949c0 0.035 0.004 0.068 0.011 0.101 0.065 0.864 0.439 1.667 1.064 2.277 0.668 0.651 1.55 1.010 2.483 1.010h14.352l-2.703 2.703c-0.134 0.134-0.175 0.336-0.102 0.512s0.244 0.29 0.434 0.29h15.991c0.259 0 0.47-0.21 0.47-0.47v-15.991c0-0.19-0.114-0.361-0.29-0.434zM23.87 2.73l2.157 2.156-0.862 0.862-2.156-2.156 0.862-0.862zM25.465 1.135c0.192-0.192 0.505-0.192 0.697 0l1.46 1.46c0.192 0.192 0.192 0.505 0 0.697l-0.931 0.931-2.157-2.157 0.931-0.931zM16.673 31.009l2.702-2.702c0-0 0.001-0.001 0.001-0.001l2.041-2.041c0.183-0.183 0.183-0.481 0-0.664-0.021-0.021-0.044-0.039-0.067-0.056-0.183-0.125-0.434-0.107-0.597 0.056l-1.904 1.904h-15.292c-1.424 0-2.571-1.112-2.616-2.534 0.003-0.089 0.010-0.178 0.021-0.265 0-0 0-0.001 0-0.002 0.005-0.042 0.012-0.083 0.019-0.124 0.001-0.005 0.002-0.009 0.002-0.014 0.007-0.037 0.014-0.073 0.022-0.11 0.002-0.010 0.005-0.020 0.007-0.030 0.007-0.031 0.015-0.061 0.023-0.092 0.004-0.016 0.009-0.033 0.014-0.049 0.007-0.024 0.014-0.048 0.022-0.071s0.016-0.047 0.024-0.070c0.006-0.016 0.011-0.033 0.017-0.049 0.011-0.031 0.024-0.061 0.036-0.091 0.004-0.009 0.007-0.017 0.011-0.026 0.016-0.038 0.033-0.075 0.050-0.111 0.001-0.002 0.001-0.003 0.002-0.005 0.367-0.76 1.074-1.327 1.922-1.503 0.002-0 0.005-0.001 0.007-0.002 0.039-0.008 0.078-0.015 0.118-0.021 0.007-0.001 0.013-0.002 0.020-0.003 0.036-0.005 0.072-0.010 0.108-0.014 0.010-0.001 0.020-0.003 0.030-0.004 0.035-0.003 0.070-0.006 0.105-0.008 0.011-0.001 0.022-0.002 0.033-0.002 0.046-0.002 0.092-0.003 0.139-0.003 0.259 0 0.47-0.21 0.47-0.47v-3.406c0-0.259-0.21-0.47-0.47-0.47s-0.47 0.21-0.47 0.47v2.965c-0.793 0.1-1.529 0.454-2.11 1.021-0.061 0.060-0.119 0.122-0.175 0.185v-17.49c0-1.359 0.989-2.491 2.285-2.715v14.155c0 0.259 0.21 0.47 0.47 0.47s0.47-0.21 0.47-0.47v-9.079h13.64l-2.596 2.597c-0.183 0.184-0.183 0.481 0 0.664s0.481 0.183 0.664 0l3.398-3.398c0-0 0-0 0-0l3.074-3.074 2.156 2.157-0.253 0.253c-0 0-0 0-0.001 0.001l-9.471 9.471-2.156-2.156 1.867-1.867c0.183-0.184 0.183-0.481 0-0.664s-0.481-0.183-0.664 0l-2.199 2.199c-0.012 0.012-0.023 0.024-0.033 0.037-0.003 0.004-0.007 0.009-0.010 0.013-0.007 0.009-0.013 0.018-0.019 0.027-0.003 0.005-0.007 0.011-0.010 0.016-0.005 0.009-0.010 0.018-0.015 0.027-0.003 0.006-0.006 0.012-0.008 0.018-0.004 0.009-0.008 0.019-0.012 0.028-0.001 0.003-0.003 0.006-0.004 0.010l-1.539 4.36c-0.008 0.023-0.014 0.047-0.019 0.071h-1.562c-0.259 0-0.47 0.21-0.47 0.47s0.21 0.47 0.47 0.47h13.007c0.259 0 0.47-0.21 0.47-0.47s-0.21-0.47-0.47-0.47h-9.332l2.864-1.011c0.002-0.001 0.005-0.002 0.007-0.003 0.011-0.004 0.022-0.009 0.033-0.014 0.004-0.002 0.009-0.004 0.013-0.006 0.011-0.006 0.022-0.012 0.033-0.018 0.004-0.002 0.007-0.004 0.011-0.006 0.011-0.007 0.022-0.015 0.033-0.024 0.003-0.002 0.005-0.004 0.008-0.006 0.013-0.011 0.026-0.022 0.038-0.034l9.665-9.665h4.078v10.034l-6.718 6.719c-0.183 0.183-0.183 0.481 0 0.664 0.011 0.011 0.023 0.022 0.036 0.032 0.086 0.070 0.191 0.105 0.296 0.105s0.21-0.035 0.296-0.105c0.012-0.010 0.024-0.021 0.036-0.032l6.856-6.856c0-0 0-0 0-0.001l1.406-1.406v4.144h-0.867c-0.259 0-0.47 0.21-0.47 0.47s0.21 0.47 0.47 0.47h0.867v1.415h-0.867c-0.259 0-0.47 0.21-0.47 0.47s0.21 0.47 0.47 0.47h0.867v1.415h-0.867c-0.259 0-0.47 0.21-0.47 0.47s0.21 0.47 0.47 0.47h0.867v1.415h-0.867c-0.259 0-0.47 0.21-0.47 0.47s0.21 0.47 0.47 0.47h0.867v2.24l-14.387-0zM12.572 17.081l-0.896-0.896 0.475-1.345 1.767 1.767-1.345 0.475z"
      />
    </Svg>
  );
};

IconSketch.defaultProps = {
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

IconSketch.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconSketch };

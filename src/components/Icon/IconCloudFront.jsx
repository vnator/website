import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconCloudFront = props => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.archtectural.awsCloudfront' })}</title>
      <path d="M19.686 25.886l-0.759-0.393c0.371-0.687 0.7-1.488 0.946-2.325l0.023-0.090 0.819 0.239c-0.286 0.986-0.636 1.838-1.064 2.642l0.036-0.073zM20.48 18.074c-0.16-2.51-0.977-4.801-2.279-6.739l0.031 0.049 0.713-0.465c1.352 2.005 2.22 4.438 2.387 7.062l0.002 0.042zM14.852 7.778c-0.572-0.431-1.217-0.834-1.898-1.178l-0.073-0.034 0.388-0.759c0.803 0.399 1.491 0.824 2.135 1.306l-0.036-0.026z"></path>
      <path d="M18.347 19.157c-1.31-1.302-2.902-2.321-4.677-2.959l-0.089-0.028 0.265-0.811c1.985 0.709 3.681 1.794 5.078 3.18l-0.001-0.001z"></path>
      <path d="M21.862 24.252c-0.158-0.427-0.337-0.819-0.533-1.216l0.764-0.38c0.174 0.331 0.365 0.753 0.535 1.185l0.033 0.095z"></path>
      <path d="M19.443 26.091l-0.273-0.806c1.083-0.371 2.021-0.888 2.849-1.539l-0.021 0.016 0.525 0.674c-0.879 0.691-1.901 1.253-3.007 1.634l-0.073 0.022z"></path>
      <path d="M5.879 15.787l-0.196-0.828c0.86-0.22 1.853-0.357 2.874-0.379l0.015-0 0.021 0.853c-0.973 0.021-1.905 0.148-2.8 0.372l0.086-0.018z"></path>
      <path d="M12.877 13.073l-0.717-0.465c0.65-1.046 1.409-1.944 2.279-2.72l0.012-0.011 0.563 0.644c-0.824 0.735-1.532 1.574-2.11 2.503l-0.028 0.048z"></path>
      <path d="M19.221 8.013l-0.29-0.802c0.55-0.215 1.212-0.409 1.894-0.549l0.082-0.014 0.158 0.853c-0.709 0.136-1.328 0.313-1.922 0.538l0.079-0.026z"></path>
      <path d="M10.773 25.173c-0.667-1.508-1.068-3.263-1.096-5.109l-0-0.011c0.015-0.722 0.111-1.414 0.278-2.078l-0.014 0.064c0.030-0.149 0.064-0.303 0.094-0.461l0.853 0.166c-0.030 0.162-0.064 0.316-0.094 0.469-0.141 0.547-0.231 1.178-0.247 1.828l-0 0.011c0.021 1.743 0.393 3.395 1.047 4.894l-0.032-0.081z"></path>
      <path d="M16 26.667c-5.891 0-10.667-4.776-10.667-10.667v0c0-0.218 0-0.427 0.021-0.644 0.282-4.538 3.362-8.286 7.523-9.559l0.076-0.020c0.91-0.281 1.957-0.443 3.041-0.443 1.918 0 3.717 0.506 5.272 1.392l-0.053-0.028c3.276 1.863 5.45 5.329 5.45 9.304 0 3.422-1.611 6.467-4.116 8.419l-0.024 0.018c-1.786 1.384-4.056 2.22-6.522 2.227h-0.002zM16 6.187c-1.002 0.003-1.965 0.159-2.871 0.445l0.068-0.019c-3.894 1.189-6.725 4.632-6.987 8.774l-0.001 0.028c0 0.201-0.021 0.393-0.021 0.585 0 5.42 4.394 9.813 9.813 9.813v0c0.004 0 0.010 0 0.015 0 1.129 0 2.212-0.194 3.218-0.55l-0.067 0.021c1.085-0.37 2.025-0.887 2.854-1.539l-0.020 0.015c2.326-1.812 3.808-4.614 3.808-7.761 0-5.417-4.39-9.81-9.806-9.813h-0z"></path>
      <path d="M17.037 11.063c-1.044 0-1.89-0.846-1.89-1.89s0.846-1.89 1.89-1.89c1.044 0 1.89 0.846 1.89 1.89 0 0.002 0 0.003 0 0.005v-0c0 0 0 0 0 0 0 1.042-0.844 1.886-1.886 1.886-0.002 0-0.003 0-0.005 0h0zM17.037 8.141c-0.573 0-1.037 0.464-1.037 1.037s0.464 1.037 1.037 1.037c0.573 0 1.037-0.464 1.037-1.037v0c0-0.573-0.464-1.037-1.037-1.037v0z"></path>
      <path d="M11.217 17.015c-1.044 0-1.89-0.846-1.89-1.89s0.846-1.89 1.89-1.89c1.044 0 1.89 0.846 1.89 1.89v0c-0.002 1.043-0.847 1.888-1.89 1.89h-0zM11.217 14.089c-0.573 0-1.037 0.464-1.037 1.037s0.464 1.037 1.037 1.037c0.573 0 1.037-0.464 1.037-1.037v0c0-0.003 0-0.006 0-0.009 0-0.573-0.464-1.037-1.037-1.037 0 0-0 0-0 0v0z"></path>
      <path d="M20.599 22.485c-0.001 0-0.003 0-0.004 0-1.044 0-1.89-0.846-1.89-1.89s0.846-1.89 1.89-1.89c1.044 0 1.89 0.846 1.89 1.89 0 0.002 0 0.003 0 0.005v-0c0 1.042-0.844 1.886-1.886 1.886v0zM20.599 19.563c-0.001 0-0.003 0-0.004 0-0.573 0-1.037 0.464-1.037 1.037s0.464 1.037 1.037 1.037c0.573 0 1.037-0.464 1.037-1.037v0c0 0 0 0 0 0 0-0.571-0.462-1.034-1.032-1.037h-0z"></path>
    </Svg>
  );
};

IconCloudFront.defaultProps = {
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

IconCloudFront.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconCloudFront };

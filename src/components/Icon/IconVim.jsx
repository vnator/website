import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconVim = props => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.dev.vim' })}</title>
      <path d="M18.752 19.442c0.042 0.042 0.125 0.105 0.188 0.105h1.109c0.063 0 0.146-0.063 0.188-0.105l0.293-0.314c0.042-0.042 0.063-0.084 0.063-0.125l0.314-1.067c0.021-0.105 0-0.209-0.063-0.272l-0.23-0.188c-0.042-0.042-0.125-0.021-0.188-0.021h-1.004l-0.063-0.063c-0.042 0-0.084-0.021-0.126 0.021l-0.398 0.251c-0.042 0-0.063 0.105-0.084 0.146l-0.335 1.025c-0.013 0.032-0.021 0.070-0.021 0.109 0 0.080 0.032 0.152 0.084 0.205l-0-0 0.272 0.293zM18.919 24.966l-0.084 0.021h-0.251l1.507-4.415c0.042-0.146-0.021-0.314-0.167-0.356l-0.084-0.021h-2.532c-0.105 0.022-0.187 0.104-0.209 0.207l-0 0.002-0.146 0.523c-0.042 0.146 0.063 0.272 0.209 0.314l0.063-0.021h0.377l-1.528 4.373c-0.042 0.146 0.021 0.335 0.167 0.398l0.084 0.063h2.344c0.125 0 0.23-0.105 0.272-0.23l0.146-0.502c0.013-0.030 0.021-0.066 0.021-0.103 0-0.119-0.078-0.219-0.186-0.252l-0.002-0zM30.031 20.844l-0.398-0.523v-0.021c-0.063-0.063-0.125-0.125-0.209-0.125h-1.507c-0.084 0-0.146 0.084-0.209 0.125l-0.419 0.502h-0.649l-0.439-0.502v-0.021c-0.047-0.064-0.123-0.105-0.208-0.105-0 0-0.001 0-0.001 0h-0.837l4.227-4.227-4.729-4.687 4.227-4.352v-1.883l-0.586-0.753h-8.558l-0.691 0.732v0.607l-2.365-2.385-1.611 1.569-0.502-0.523h-8.454l-0.67 0.774v1.967l0.628 0.607h0.628v5.461l-2.929 2.929 2.929 2.93v6.696l1.088 0.607h2.427l1.904-1.988 4.52 4.52 3.034-3.034c0.021 0.084 0.084 0.105 0.188 0.146l0.084-0.042h1.967c0.126 0 0.23-0.021 0.251-0.125l0.146-0.418c0.042-0.146-0.021-0.272-0.167-0.314l-0.084 0.021h-0.084l0.712-2.239 0.481-0.481h1.046l-1.046 3.327c-0.042 0.146 0.042 0.23 0.188 0.293l0.084-0.042h1.904c0.105 0 0.209-0.021 0.251-0.125l0.167-0.377c0.063-0.146-0.021-0.272-0.146-0.335-0.021-0.021-0.063 0-0.105 0h-0.084l0.879-2.72h1.276l-1.067 3.327c-0.042 0.146 0.042 0.23 0.188 0.272l0.084-0.063h2.093c0.105 0 0.209-0.021 0.251-0.125l0.167-0.418c0.063-0.146-0.021-0.272-0.167-0.314-0.021-0.021-0.063 0.021-0.105 0.021h-0.146l1.172-3.871c0.015-0.037 0.023-0.080 0.023-0.124 0-0.062-0.016-0.12-0.045-0.171l0.001 0.002zM16.68 3.623l2.365 2.365v0.984l0.711 0.858h0.335l-6.068 5.859v-5.859h0.691l0.565-0.879v-1.862l-0.042-0.063 1.444-1.402zM4.167 16.010l2.532-2.532v5.064l-2.532-2.532zM12.307 24.025l12.22-12.555 4.478 4.499-4.227 4.227h-0.021c-0.058 0.023-0.107 0.059-0.146 0.104l-0 0.001-0.439 0.502h-0.607l-0.46-0.502c-0.042-0.063-0.126-0.125-0.209-0.125h-1.841c-0.129 0.003-0.236 0.089-0.271 0.207l-0.001 0.002-0.167 0.523c-0.042 0.146 0.021 0.272 0.167 0.335h0.314l-1.339 3.955-3.16 3.181-4.29-4.352z"></path>
    </Svg>
  );
};

IconVim.defaultProps = {
  viewBox: {
    minX: 0,
    minY: 0,
    width: 34,
    height: 32,
  },
  size: {
    height: undefined,
    width: undefined,
  },
  className: '',
};

IconVim.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconVim };

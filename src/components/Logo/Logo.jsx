import React from 'react';
import Type from 'prop-types';
import { intlShape, injectIntl } from 'react-intl';

let Logo = ({ width, height, fill, intl: { formatMessage } }) => (
  <svg
    id="icon-vnator"
    viewBox="0 0 60 32"
    width={width}
    height={height}
    fill={fill}>
    <title>{formatMessage({ id: 'logo.title' })}</title>
    <path d="M14.612 11.301c0.098 0 0.18 0.004 0.247 0.013s0.127 0.027 0.18 0.053c0.053 0.022 0.104 0.056 0.153 0.1s0.104 0.104 0.167 0.18l4.612 5.832c-0.018-0.187-0.031-0.367-0.040-0.54-0.009-0.178-0.013-0.344-0.013-0.5v-3.577c0.001-1.557 0.001-1.557 1.986-1.561v9.711h-1.173c-0.173 0-0.32-0.027-0.44-0.080s-0.235-0.151-0.347-0.293l-4.579-5.785c0.013 0.169 0.024 0.335 0.033 0.5 0.009 0.16 0.013 0.311 0.013 0.453v5.205h-1.986v-9.711h1.186z"></path>
    <path d="M32.538 21.012h-1.746c-0.195 0-0.358-0.044-0.486-0.133-0.124-0.093-0.211-0.211-0.26-0.353l-0.573-1.693h-3.692l-0.573 1.693c-0.044 0.124-0.131 0.238-0.26 0.34-0.129 0.098-0.287 0.147-0.473 0.147h-1.76l3.585-9.262c0.2-0.449 0.2-0.449 0.507-0.449h1.636c0.308-0 0.308-0 0.51 0.449zM26.3 17.299h2.653l-0.893-2.659c-0.058-0.169-0.127-0.367-0.207-0.593-0.076-0.231-0.151-0.48-0.227-0.746-0.071 0.271-0.144 0.522-0.22 0.753s-0.147 0.431-0.213 0.6z"></path>
    <path d="M39.458 11.301c-0 1.786-0 1.786-1.466 1.786h-1.425v7.924h-2.253v-7.924h-2.891c0-1.787 0-1.787 1.466-1.787z"></path>
    <path d="M49.435 16.153q0 1.053-0.367 1.959-0.36 0.906-1.020 1.58-0.66 0.666-1.593 1.046-0.926 0.38-2.059 0.38t-2.066-0.38-1.6-1.046q-0.66-0.673-1.026-1.58-0.36-0.906-0.36-1.959t0.36-1.959q0.367-0.906 1.026-1.573 0.666-0.666 1.6-1.046t2.066-0.38 2.059 0.387q0.933 0.38 1.593 1.046t1.020 1.573q0.367 0.906 0.367 1.953zM47.129 16.153q0-0.72-0.187-1.293-0.187-0.58-0.54-0.98-0.347-0.4-0.853-0.613t-1.153-0.213q-0.653 0-1.166 0.213-0.507 0.213-0.86 0.613-0.347 0.4-0.533 0.98-0.187 0.573-0.187 1.293 0 0.727 0.187 1.306 0.187 0.573 0.533 0.973 0.353 0.4 0.86 0.613 0.513 0.207 1.166 0.207 0.647 0 1.153-0.207 0.507-0.213 0.853-0.613 0.353-0.4 0.54-0.973 0.187-0.58 0.187-1.306z"></path>
    <path d="M52.777 17.419v3.592h-2.253v-9.711h3.159q1.053 0 1.793 0.22 0.746 0.213 1.213 0.6 0.473 0.387 0.686 0.913t0.213 1.146q0 0.473-0.127 0.893t-0.38 0.78q-0.247 0.353-0.613 0.633-0.36 0.28-0.833 0.46 0.227 0.113 0.42 0.28 0.2 0.167 0.347 0.407l2.066 3.379h-2.039q-0.567 0-0.813-0.427l-1.613-2.819q-0.107-0.187-0.253-0.267-0.14-0.080-0.4-0.080h-0.573zM52.777 15.867h0.906q0.46 0 0.78-0.113 0.327-0.12 0.533-0.327t0.3-0.48q0.093-0.28 0.093-0.6 0-0.64-0.42-1-0.413-0.36-1.286-0.36h-0.906v2.879z"></path>
    <path d="M7.005 23.55h0.171c0.34-0.012 0.34-0.012 0.666-0.499l3.724-6.011c0.567-0.941 0.567-0.941 0.572-1.81 0-2.269 0-6.781 0-6.781l-1.146 0.468c-1.099 0.464-1.171 0.464-1.171 1.298v5.166c0 0.48 0 0.48-0.312 1.004l-2.080 3.358c-0.183 0.268-0.183 0.267-0.372 0.278h-0.102c-0.19-0.011-0.19-0.009-0.372-0.278l-2.080-3.358c-0.312-0.524-0.313-0.524-0.312-1.004v-5.166c0-0.832-0.072-0.832-1.171-1.298l-1.146-0.468c0 0 0 4.511 0 6.781 0.006 0.869 0.006 0.869 0.572 1.81l3.724 6.011c0.327 0.486 0.327 0.486 0.666 0.499z"></path>
  </svg>
);

Logo.defaultProps = {
  width: '1em',
  height: '1em',
  fill: 'var(--deep-ocean)',
};

Logo.propTypes = {
  width: Type.string,
  height: Type.string,
  fill: Type.string,
  intl: intlShape.isRequired,
};

Logo = injectIntl(Logo);

export { Logo };

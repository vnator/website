import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import style from './Logo.module.css';

let Logo = ({ className }) => {
  const { formatMessage } = useIntl();

  return (
    <svg
      className={`${style.Logo} ${className}`}
      id="icon-vnator"
      viewBox="0 0 61 16">
      <title>{formatMessage({ id: 'logo.title' })}</title>
      <g>
        <path d="M13.617000341415405,3.0500011444091797 c0.10400000214576721,0 0.19200000166893005,0.004999999888241291 0.2639999985694885,0.014000000432133675 s0.13500000536441803,0.02800000086426735 0.19200000166893005,0.05700000002980232 c0.05700000002980232,0.024000000208616257 0.1120000034570694,0.05900000035762787 0.164000004529953,0.10700000077486038 s0.1120000034570694,0.1120000034570694 0.17800000309944153,0.19200000166893005 l4.929999828338623,6.234000205993652 c-0.01899999938905239,-0.19900000095367432 -0.032999999821186066,-0.3919999897480011 -0.0430000014603138,-0.5770000219345093 c-0.008999999612569809,-0.1899999976158142 -0.014000000432133675,-0.36800000071525574 -0.014000000432133675,-0.5339999794960022 v-3.8239998817443848 c0.0010000000474974513,-1.6649999618530273 0.0010000000474974513,-1.6649999618530273 2.122999906539917,-1.6690000295639038 v10.380000114440918 h-1.253999948501587 c-0.1850000023841858,0 -0.34200000762939453,-0.028999999165534973 -0.4699999988079071,-0.08500000089406967 s-0.25200000405311584,-0.16200000047683716 -0.3700000047683716,-0.31299999356269836 l-4.894999980926514,-6.184000015258789 c0.014000000432133675,0.1809999942779541 0.026000000536441803,0.35899999737739563 0.035999998450279236,0.5339999794960022 c0.008999999612569809,0.17100000381469727 0.014000000432133675,0.3319999873638153 0.014000000432133675,0.48399999737739563 v5.564000129699707 h-2.122999906539917 v-10.380000114440918 h1.2680000066757202 z" />
        <path d="M32.77999949455261,13.430001258850098 h-1.8669999837875366 c-0.20900000631809235,0 -0.38199999928474426,-0.04699999839067459 -0.5199999809265137,-0.1420000046491623 c-0.13300000131130219,-0.10000000149011612 -0.22599999606609344,-0.22599999606609344 -0.27799999713897705,-0.3779999911785126 l-0.6129999756813049,-1.809999942779541 h-3.947000026702881 l-0.6129999756813049,1.809999942779541 c-0.04699999839067459,0.13300000131130219 -0.14000000059604645,0.2540000081062317 -0.27799999713897705,0.3630000054836273 c-0.1379999965429306,0.10499999672174454 -0.3059999942779541,0.15700000524520874 -0.5059999823570251,0.15700000524520874 h-1.88100004196167 l3.8329999446868896,-9.901000022888184 c0.21400000154972076,-0.47999998927116394 0.21400000154972076,-0.47999998927116394 0.5419999957084656,-0.47999998927116394 h1.7489999532699585 c0.32899999618530273,0 0.32899999618530273,0 0.5460000038146973,0.47999998927116394 zM26.112000226974487,9.462000846862793 h2.8359999656677246 l-0.9549999833106995,-2.8429999351501465 c-0.06199999898672104,-0.1809999942779541 -0.13500000536441803,-0.3919999897480011 -0.22100000083446503,-0.6340000033378601 c-0.08100000023841858,-0.24699999392032623 -0.16200000047683716,-0.5130000114440918 -0.24199999868869781,-0.7979999780654907 c-0.07599999755620956,0.28999999165534973 -0.15399999916553497,0.5580000281333923 -0.23499999940395355,0.8050000071525574 s-0.15700000524520874,0.460999995470047 -0.2280000001192093,0.640999972820282 z" />
        <path d="M40.17699885368347,3.0500011444091797 c0,1.909000039100647 0,1.909000039100647 -1.5670000314712524,1.909000039100647 h-1.5230000019073486 v8.470999717712402 h-2.4079999923706055 v-8.470999717712402 h-3.0910000801086426 c0,-1.909999966621399 0,-1.909999966621399 1.5670000314712524,-1.909999966621399 z" />
        <path d="M50.841999769210815,8.236001014709473 q0,1.1260000467300415 -0.3919999897480011,2.0950000286102295 q-0.38499999046325684,0.968999981880188 -1.090000033378601,1.6890000104904175 q-0.7049999833106995,0.7120000123977661 -1.7029999494552612,1.11899995803833 q-0.9900000095367432,0.4059999883174896 -2.2009999752044678,0.4059999883174896 t-2.2090001106262207,-0.4059999883174896 t-1.7100000381469727,-1.11899995803833 q-0.7049999833106995,-0.7200000286102295 -1.097000002861023,-1.6890000104904175 q-0.38499999046325684,-0.968999981880188 -0.38499999046325684,-2.0950000286102295 t0.38499999046325684,-2.0950000286102295 q0.3919999897480011,-0.968999981880188 1.097000002861023,-1.680999994277954 q0.7120000123977661,-0.7120000123977661 1.7100000381469727,-1.11899995803833 t2.2090001106262207,-0.4059999883174896 t2.2009999752044678,0.4129999876022339 q0.996999979019165,0.4059999883174896 1.7029999494552612,1.11899995803833 t1.090000033378601,1.680999994277954 q0.3919999897480011,0.968999981880188 0.3919999897480011,2.0880000591278076 zM48.376999616622925,8.236001014709473 q0,-0.7689999938011169 -0.19900000095367432,-1.3819999694824219 q-0.19900000095367432,-0.6200000047683716 -0.5770000219345093,-1.0470000505447388 q-0.3700000047683716,-0.4269999861717224 -0.9120000004768372,-0.6549999713897705 t-1.2330000400543213,-0.2280000001192093 q-0.6980000138282776,0 -1.246999979019165,0.2280000001192093 q-0.5410000085830688,0.2280000001192093 -0.9190000295639038,0.6549999713897705 q-0.3700000047683716,0.4269999861717224 -0.5699999928474426,1.0470000505447388 q-0.19900000095367432,0.6129999756813049 -0.19900000095367432,1.3819999694824219 q0,0.7770000100135803 0.19900000095367432,1.3960000276565552 q0.19900000095367432,0.6129999756813049 0.5699999928474426,1.0399999618530273 q0.3779999911785126,0.4269999861717224 0.9190000295639038,0.6549999713897705 q0.5490000247955322,0.22100000083446503 1.246999979019165,0.22100000083446503 q0.6909999847412109,0 1.2330000400543213,-0.22100000083446503 q0.5410000085830688,-0.2280000001192093 0.9120000004768372,-0.6549999713897705 q0.3779999911785126,-0.4269999861717224 0.5770000219345093,-1.0399999618530273 q0.19900000095367432,-0.6200000047683716 0.19900000095367432,-1.3960000276565552 z" />
        <path d="M54.416001081466675,9.590001106262207 v3.8399999141693115 h-2.4079999923706055 v-10.380000114440918 h3.377000093460083 q1.1260000467300415,0 1.9160000085830688,0.23499999940395355 q0.7979999780654907,0.2280000001192093 1.2970000505447388,0.640999972820282 q0.5059999823570251,0.4129999876022339 0.734000027179718,0.9760000109672546 t0.2280000001192093,1.225000023841858 q0,0.5059999823570251 -0.13500000536441803,0.9549999833106995 t-0.4059999883174896,0.8339999914169312 q-0.2639999985694885,0.3779999911785126 -0.6549999713897705,0.6769999861717224 q-0.38499999046325684,0.29899999499320984 -0.890999972820282,0.492000013589859 q0.24199999868869781,0.12099999934434891 0.4490000009536743,0.29899999499320984 q0.21400000154972076,0.17800000309944153 0.3700000047683716,0.4350000023841858 l2.2090001106262207,3.611999988555908 h-2.180000066757202 q-0.6060000061988831,0 -0.8690000176429749,-0.4560000002384186 l-1.7239999771118164,-3.0139999389648438 q-0.11400000005960464,-0.19900000095367432 -0.2709999978542328,-0.2849999964237213 q-0.15000000596046448,-0.08500000089406967 -0.4269999861717224,-0.08500000089406967 h-0.6129999756813049 zM54.416001081466675,7.930001258850098 h0.968999981880188 q0.492000013589859,0 0.8339999914169312,-0.12099999934434891 q0.3490000069141388,-0.12800000607967377 0.5699999928474426,-0.3490000069141388 t0.32100000977516174,-0.5130000114440918 q0.10000000149011612,-0.29899999499320984 0.10000000149011612,-0.640999972820282 q0,-0.6840000152587891 -0.4490000009536743,-1.069000005722046 q-0.44200000166893005,-0.38499999046325684 -1.375,-0.38499999046325684 h-0.968999981880188 v3.078000068664551 z" />
        <path d="M5.486000299453735,16.143000602722168 h0.18299999833106995 c0.36399999260902405,-0.013000000268220901 0.36399999260902405,-0.013000000268220901 0.7120000123977661,-0.5339999794960022 l3.9800000190734863,-6.426000118255615 c0.6060000061988831,-1.00600004196167 0.6060000061988831,-1.00600004196167 0.6119999885559082,-1.934999942779541 c0,-2.4260001182556152 0,-7.248000144958496 0,-7.248000144958496 l-1.225000023841858,0.5 c-1.1749999523162842,0.4959999918937683 -1.2510000467300415,0.4959999918937683 -1.2510000467300415,1.3880000114440918 v5.5229997634887695 c0,0.5130000114440918 0,0.5130000114440918 -0.33399999141693115,1.0740000009536743 l-2.2239999771118164,3.5899999141693115 c-0.19599999487400055,0.28600001335144043 -0.19599999487400055,0.28600001335144043 -0.39800000190734863,0.296999990940094 h-0.10899999737739563 c-0.2029999941587448,-0.012000000104308128 -0.2029999941587448,-0.009999999776482582 -0.39800000190734863,-0.296999990940094 l-2.2239999771118164,-3.5899999141693115 c-0.33399999141693115,-0.5600000023841858 -0.33399999141693115,-0.5600000023841858 -0.33399999141693115,-1.0740000009536743 v-5.521999835968018 c0,-0.8889999985694885 -0.07599999755620956,-0.8889999985694885 -1.2510000467300415,-1.3880000114440918 l-1.225000023841858,-0.5 c0,0 0,4.822000026702881 0,7.248000144958496 c0.006000000052154064,0.9290000200271606 0.006000000052154064,0.9290000200271606 0.6119999885559082,1.934999942779541 l3.9800000190734863,6.426000118255615 c0.3499999940395355,0.5189999938011169 0.3499999940395355,0.5189999938011169 0.7120000123977661,0.5339999794960022 z" />
      </g>
    </svg>
  );
};

Logo.defaultProps = {
  width: '1em',
  height: '1em',
  className: '',
};

Logo.propTypes = {
  className: Type.string,
  width: Type.string,
  height: Type.string,
};

export { Logo };

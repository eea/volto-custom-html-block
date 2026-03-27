import installCustomJS from './CustomJS';
import installCustomCSS from './CustomCSS';

const config = (config) => {
  return [installCustomJS, installCustomCSS].reduce(
    (acc, apply) => apply(acc),
    config,
  );
};

export default config;

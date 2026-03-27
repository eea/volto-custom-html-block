import installBlocks from './components/manage/Blocks';

const applyConfig = (config) => {
  config = installBlocks(config);
  return config;
};

export default applyConfig;

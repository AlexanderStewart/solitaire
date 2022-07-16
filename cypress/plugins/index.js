module.export = (on, config) => {
  require('cypress-react-unit-test/plugin/react-scripts')(on, config);
  return config;
};
module.exports = {
  devServer: {
    host: '0.0.0.0',
    hot: false,
    port: 4000,
    public: '0.0.0.0:4000',
    disableHostCheck: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  css: {
    extract: process.env.NODE_ENV !== 'development',
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/main.scss";'
      },
    },
  },
  lintOnSave: false,
  pluginOptions: {},
  configureWebpack: {
    devtool: 'source-map'
  }
};

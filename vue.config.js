// vue.config.js
module.exports = {
  publicPath: "/360portfolio/",
  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => {
        options.compilerOptions = {
          ...options.compilerOptions,
          isCustomElement: (tag) => tag.startsWith("a-"),
        };
        return options;
      });
  },
};

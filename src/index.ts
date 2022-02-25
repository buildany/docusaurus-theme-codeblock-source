import path from "path";

export default () => ({
  name: "docusaurus-theme-codeblock-source",

  getThemePath() {
    return path.resolve(__dirname, "./theme");
  },
});

var Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "title",
        message: "Your title name",
        default: this.appname, // Default to current folder name
      },
    ]);
  }
  writing() {
    this.destinationRoot(this.answers.title);

    const pkg = {
      name: this.answers.title,
      version: "1.0.0",
      description: "",
      main: "generators/app/index.js",
      scripts: {
        test: "mocha",
        build: "webpack",
        coverage: "nyc mocha --require @babel/register",
      },
      author: "",
      license: "ISC",
      dependencies: {},
      devDependencies: {},
    };

    this.fs.extendJSON(this.destinationPath("package.json"), pkg);
    this.fs.copyTpl(
      this.templatePath("index.html"),
      this.destinationPath("src/index.html"),
      { title: this.answers.title }
    );
    this.fs.copyTpl(
      this.templatePath("index.js"),
      this.destinationPath("src/index.js")
    );
    this.fs.copyTpl(
      this.templatePath("HelloWorld.vue"),
      this.destinationPath("src/HelloWorld.vue")
    );
    this.fs.copyTpl(
      this.templatePath("webpack.config.js"),
      this.destinationPath("webpack.config.js")
    );
  }
  install() {
    this.npmInstall(["vue"], { "save-dev": false });
    this.npmInstall(
      [
        "webpack",
        "webpack-cli",
        "vue-loader",
        "vue-style-loader",
        "css-loader",
        "vue-template-compiler",
        "copy-webpack-plugin",
        "@babel/register",
        "@istanbuljs/nyc-config-babel",
        "babel-plugin-istanbul",
        "mocha",
        "nyc",
      ],
      { "save-dev": true }
    );
  }
};

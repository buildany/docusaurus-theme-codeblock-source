# Docusaurus Theme Codeblock Source link

A docusaurus plugin displays the title with URL links to the external source code file.

## Installation

Install the plugin with npm:

```shell
npm i @buildany/theme-codeblock-source --save
```

Add the plugin to `docusaurus.config.js`:

    ```js
     themes: [
         '@buildany/theme-codeblock-source'
      ],
    ```

Check out example project [docusaurus config](./example/docusaurus.config.js).

## Usage

In your `*.md` file add `sourceUrl` to the language meta string with link to the external source code file:


    ```js title=src/utils/docsUtils.tsx sourceUrl=https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-theme-common/src/utils/docsUtils.tsx#L35
      ...

      return (
        <DocsVersionContext.Provider value={version}>
          {children}
        </DocsVersionContext.Provider>
      );
      ...

    ```

The title element has the default class name `source-code-link`, which you can use to style the element within your project. Also, you could customize your link style by providing a custom link class name via an additional `sourceClassName` metadata property:


    ```js title=src/utils/docsUtils.tsx sourceUrl=https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-theme-common/src/utils/docsUtils.tsx#L35  sourceClassName=source-link-custom
      ...

      return (
        <DocsVersionContext.Provider value={version}>
          {children}
        </DocsVersionContext.Provider>
      );
      ...
    ```




Check out [example](./example/blog/2022-02-23-code-block-example.md) docusaurus project.

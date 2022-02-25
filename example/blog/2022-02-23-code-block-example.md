---
slug: code-block-example
title: Code Block Example
tags: [codeblock, example]
---

# Codeblock source link example

This is an example of how to use code block with the source code link example:


```js title=docusaurus-theme-common/src/utils/docsUtils.tsx sourceUrl=https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-theme-common/src/utils/docsUtils.tsx sourceClassName=source-link
export function DocsVersionProvider({
  children,
  version,
}: {
  children: ReactNode;
  version: PropVersionMetadata | typeof EmptyContextValue;
}): JSX.Element {
  return (
    <DocsVersionContext.Provider value={version}>
      {children}
    </DocsVersionContext.Provider>
  );
}
```

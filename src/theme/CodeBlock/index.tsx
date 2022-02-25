import React from "react";
import CodeBlock from "@theme-init/CodeBlock";
import { validUrl } from "../../utils";

import type { CodeBlockProps } from "../types";

const CodeBlockSource = ({
  title,
  sourceUrl,
  sourceClassName,
  ...props
}: CodeBlockProps) => {
  const url = validUrl(sourceUrl);
  const codeBlockTitle = url ? (
    <a href={url} target="_blank" className={sourceClassName}>
      {!!title ? title : url}
    </a>
  ) : (
    title
  );

  return <CodeBlock {...props} title={codeBlockTitle} />;
};

export default CodeBlockSource;

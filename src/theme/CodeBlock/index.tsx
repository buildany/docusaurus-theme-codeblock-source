import React from "react";
import DocusaurusCodeBlock from "../DocusaurusCodeBlock";
import { validUrl } from "../../utils";
import cx from "classnames";

import type { CodeBlockProps } from "../types";

const CodeBlock = ({
  title,
  sourceUrl,
  sourceClassName,
  ...props
}: CodeBlockProps) => {
  const url = validUrl(sourceUrl);
  const codeBlockTitle = url ? (
    <a
      data-testid="sourceCodeLink"
      href={url}
      target="_blank"
      className={cx("source-code-link", sourceClassName)}
    >
      {!!title ? title : url}
    </a>
  ) : (
    title
  );

  return <DocusaurusCodeBlock {...props} title={codeBlockTitle} />;
};

export default CodeBlock;

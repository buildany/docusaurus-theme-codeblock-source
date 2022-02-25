import type { Props } from "@theme-init/CodeBlock";

export interface CodeBlockProps extends Props {
  sourceUrl?: string;
  sourceClassName?: string;
  title?: string | Element;
  children: any;
}

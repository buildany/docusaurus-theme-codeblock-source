declare module "@theme-init/CodeBlock" {
  export type Props = {
    readonly children: any;
    readonly className?: string;
    readonly metastring?: string;
    title?: string | Element | JSX.Element;
  };

  const CodeBlock: (props: Props) => JSX.Element;
  export default CodeBlock;
}

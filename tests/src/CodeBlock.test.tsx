import React from "react";

import CodeBlock from "../../src/theme/CodeBlock";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock(
  "../../src/theme/DocusaurusCodeBlock",
  () =>
    ({ className, title }: { className: string; title: string | Element }) =>
      (
        <div data-testid="docusaurusCodeBlock" className={className}>
          <div data-testid="title">{title}</div>
        </div>
      )
);
it("should render code block correctly without source code link", async () => {
  const title = "Code block title";
  const { asFragment } = render(
    <CodeBlock title={title}>
      <div id="codeBlockChildren" />
    </CodeBlock>
  );

  expect(asFragment()).toMatchSnapshot();
  await waitFor(() => screen.getByTestId("docusaurusCodeBlock"));
  expect(screen.getByTestId("title").textContent).toBe(title);
});

it("should render code block correctly with source code link", async () => {
  const title = "Code block title";
  const sourceUrl = "https://example.code.org/file.js";
  const { asFragment } = render(
    <CodeBlock title={title} sourceUrl={sourceUrl}>
      <div id="codeBlockChildren" />
    </CodeBlock>
  );

  expect(asFragment()).toMatchSnapshot();
  await waitFor(() => screen.getByTestId("docusaurusCodeBlock"));
  expect(screen.getByTestId("sourceCodeLink").textContent).toBe(title);
  expect(screen.getByTestId("sourceCodeLink")).toHaveAttribute(
    "href",
    sourceUrl
  );
  expect(screen.getByTestId("sourceCodeLink")).toHaveClass("source-code-link");
});

it("should render code block correctly with source code link if title is not specified", async () => {
  const sourceUrl = "https://example.code.org/file.js";
  const { asFragment } = render(
    <CodeBlock sourceUrl={sourceUrl}>
      <div id="codeBlockChildren" />
    </CodeBlock>
  );

  expect(asFragment()).toMatchSnapshot();
  await waitFor(() => screen.getByTestId("docusaurusCodeBlock"));
  expect(screen.getByTestId("sourceCodeLink").textContent).toBe(sourceUrl);
  expect(screen.getByTestId("sourceCodeLink")).toHaveAttribute(
    "href",
    sourceUrl
  );
  expect(screen.getByTestId("sourceCodeLink")).toHaveClass("source-code-link");
});

it("should render code block correctly with source code link and custom class name", async () => {
  const title = "Code block title";
  const sourceUrl = "https://example.code.org/file.js";
  const sourceClassName = "source-link-custom-class";
  const { asFragment } = render(
    <CodeBlock
      title={title}
      sourceUrl={sourceUrl}
      sourceClassName={sourceClassName}
    >
      <div id="codeBlockChildren" />
    </CodeBlock>
  );

  expect(asFragment()).toMatchSnapshot();
  await waitFor(() => screen.getByTestId("docusaurusCodeBlock"));
  expect(screen.getByTestId("sourceCodeLink").textContent).toBe(title);
  expect(screen.getByTestId("sourceCodeLink")).toHaveAttribute(
    "href",
    sourceUrl
  );
  expect(screen.getByTestId("sourceCodeLink")).toHaveClass("source-code-link");
  expect(screen.getByTestId("sourceCodeLink")).toHaveClass(sourceClassName);
});

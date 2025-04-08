import { unified } from 'unified';
import remarkParse from 'remark-parse';
import type { Root } from 'mdast';

/**
 * Parses raw markdown text into a Markdown AST (MDAST)
 */
export async function parseMarkdownToAst(content: string): Promise<Root> {
  const tree = unified().use(remarkParse).parse(content) as Root;
  return tree;
}
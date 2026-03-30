import nodeTikzjax from 'node-tikzjax';

function getTextContent(node) {
  if (!node) return '';
  if (typeof node.value === 'string') return node.value;
  if (!Array.isArray(node.children)) return '';
  return node.children.map(getTextContent).join('');
}

const tex2svg =
  typeof nodeTikzjax?.default === 'function'
    ? nodeTikzjax.default
    : typeof nodeTikzjax === 'function'
      ? nodeTikzjax
      : null;
let renderQueue = Promise.resolve();

function getClasses(className) {
  if (Array.isArray(className)) return className;
  if (typeof className === 'string') return [className];
  return [];
}

function extractTikzSource(node) {
  if (!node || node.type !== 'element') return null;

  if (node.tagName === 'pre') {
    const codeNode = node.children?.find((child) => child?.type === 'element' && child.tagName === 'code');
    if (!codeNode) return null;

    const classes = getClasses(codeNode.properties?.className);
    const language = codeNode.properties?.['data-language'] ?? node.properties?.['data-language'];
    const source = getTextContent(codeNode).trim();

    if (source.includes('\\begin{tikzpicture}') && source.includes('\\end{tikzpicture}')) {
      return source;
    }

    if (classes.includes('language-tikz') || language === 'tikz') return source;
    if ((classes.includes('language-tex') || language === 'tex') && source.includes('\\begin{tikzpicture}')) {
      return source;
    }

    return null;
  }

  if (node.tagName === 'div') {
    const classes = getClasses(node.properties?.className);
    if (!classes.includes('tikz-diagram')) return null;

    const scriptNode = node.children?.find(
      (child) =>
        child?.type === 'element' &&
        child.tagName === 'script' &&
        child.properties?.type === 'text/tikz'
    );

    return scriptNode ? getTextContent(scriptNode).trim() : null;
  }

  return null;
}

async function renderTikz(source) {
  if (!tex2svg) {
    throw new Error('node-tikzjax renderer is not available');
  }

  const job = async () =>
    tex2svg(`\\begin{document}\n${source}\n\\end{document}`, {
      embedFontCss: true,
      disableOptimize: false,
      showConsole: false,
    });

  const resultPromise = renderQueue.then(job, job);
  renderQueue = resultPromise.catch(() => undefined);
  return resultPromise;
}

function createTikzNode(svg) {
  return {
    type: 'element',
    tagName: 'div',
    properties: { className: ['tikz-diagram'] },
    children: [
      {
        type: 'raw',
        value: svg,
      },
    ],
  };
}

async function transformNode(node) {
  if (!node || typeof node !== 'object') return;

  if (Array.isArray(node.children)) {
    for (let i = 0; i < node.children.length; i += 1) {
      const child = node.children[i];
      const tikzSource = extractTikzSource(child);

      if (tikzSource) {
        const svg = await renderTikz(tikzSource);
        node.children[i] = createTikzNode(svg);
        continue;
      }

      await transformNode(child);
    }
  }
}

export default function rehypeTikz() {
  return async function transformer(tree) {
    await transformNode(tree);
  };
}

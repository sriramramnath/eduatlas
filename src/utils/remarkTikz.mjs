import nodeTikzjax from 'node-tikzjax';

const tex2svg =
  typeof nodeTikzjax?.default === 'function'
    ? nodeTikzjax.default
    : typeof nodeTikzjax === 'function'
      ? nodeTikzjax
      : null;

let renderQueue = Promise.resolve();

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

function isTikzCodeNode(node) {
  if (!node || node.type !== 'code' || typeof node.value !== 'string') return false;
  return node.value.includes('\\begin{tikzpicture}') && node.value.includes('\\end{tikzpicture}');
}

async function transformChildren(parent) {
  if (!parent || !Array.isArray(parent.children)) return;

  for (let index = 0; index < parent.children.length; index += 1) {
    const child = parent.children[index];

    if (isTikzCodeNode(child)) {
      const svg = await renderTikz(child.value.trim());
      parent.children[index] = {
        type: 'html',
        value: `<div class="tikz-diagram">${svg}</div>`,
      };
      continue;
    }

    if (Array.isArray(child?.children)) {
      await transformChildren(child);
    }
  }
}

export default function remarkTikz() {
  return async function transformer(tree) {
    await transformChildren(tree);
  };
}

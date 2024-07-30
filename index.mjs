import stylelint from 'stylelint';

const {
  createPlugin,
  utils: { report, ruleMessages, validateOptions }
} = stylelint;

const ruleName = 'rxMATTEO/no-nested-media';

const messages = ruleMessages(ruleName, {
  rejected: (selector) => `Unexpected no nested media selector in "${selector}"`
});

const meta = {
  url: 'https://github.com/rxMATTEO/stylelint-plugin-no-nested-media/blob/main/README.md'
};

/** @type {import('stylelint').Rule} */
const ruleFunction = (primary) => {
  return (root, result) => {
    const validOptions = validateOptions(result, ruleName, {
      actual: primary,
      possible: [true]
    });

    if (!validOptions) return;

    root.walkAtRules('media', (ruleNode) => {

      if(!ruleNode.parent || ruleNode.parent.type === 'root') return;

      const { column, line} = ruleNode.source.start;
      const [node] = ruleNode.parent.nodes;

      report({
        result,
        ruleName,
        message: messages.rejected(`With content: ${node.parent?.selector || node.parent.name} at line ${line} at column ${column}`),
        node: ruleNode,
        word: ruleNode.parent.type
      });
    });
  };
};

ruleFunction.ruleName = ruleName;
ruleFunction.messages = messages;
ruleFunction.meta = meta;

export default createPlugin(ruleName, ruleFunction);
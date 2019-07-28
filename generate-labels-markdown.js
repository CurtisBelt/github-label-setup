const labels = require("./labels.json");

const toMarkdown = label => {
  let description = "";
  if (label.description) {
    description = `<i><small>${label.description}</i></small>`;
  }
  return `- \`#${label.color}\` &nbsp;&nbsp; ![#${
    label.color
  }](https://placehold.it/30x12/${label.color}/000000?text=+) &nbsp;&nbsp; **${
    label.name
  }** ${description}`;
};
const markdown = labels.map(toMarkdown).join("\n");

console.log(markdown);

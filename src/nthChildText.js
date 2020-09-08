const nthChildText = (rowNum) => {
  let text = "";
  for (let i = 1; i < rowNum; i++) {
    if (i % 2 === 1) {
      text += `div:nth-child(${2 * rowNum}n + ${i}), `;
    } else {
      text += `div:nth-child(${2 * rowNum}n + ${rowNum + i}), `;
    }
  }
  text += `div:nth-child(${2 * rowNum}n)`;
  return text;
};

/* div:nth-child(16n + 1),
  div:nth-child(16n + 3),
  div:nth-child(16n + 5),
  div:nth-child(16n + 7),
  div:nth-child(16n + 10),
  div:nth-child(16n + 12),
  div:nth-child(16n + 14),
  div:nth-child(16n) */

module.exports = nthChildText;

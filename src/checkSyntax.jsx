export const checkSyntax = (input) => {
  const grammar = {
    VN: ["S"],
    VT: ["+", "-", "*", "/", "(", ")", "v", "c"],
    P: ["S→S+S", "S→S-S", "S→S*S", "S→S/S", "S→(S)", "S→v", "S→c"],
  };

  const stack = [];
  let lastToken = "";

  const inputWithoutSpaces = input.replace(/\s+/g, "");

  for (let i = 0; i < inputWithoutSpaces.length; i++) {
    const char = inputWithoutSpaces[i];

    if (grammar.VT.includes(char)) {
      if (char === "(") {
        stack.push(char);
      } else if (char === ")") {
        if (stack.length === 0 || stack.pop() !== "(") {
          return false;
        }
      } else if (char === "/" && lastToken === "/") {
        return false;
      } else if (
        char === "/" &&
        i !== inputWithoutSpaces.length - 1 &&
        inputWithoutSpaces[i + 1] === "0"
      ) {
        return false;
      }

      lastToken = char;
    }
  }

  return stack.length === 0;
};

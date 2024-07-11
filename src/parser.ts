import { JSONNode, NULL, Token } from "./types";

export const parser = (tokens: Token[]) => {
  let current = 0;
  /**
   *  Utililty function for advancing through the tokens
   * @returns next token to parse
   */
  function next() {
    return tokens[++current];
  }

  // primitive value parse
  function parseValue() {
    let token = tokens[current];
    switch (token.type) {
      case "STRING":
        return { type: "STRING", value: token.value };
      case "NUMBER":
        return { type: "NUMBER", value: Number(token.value) };
      case "TRUE":
        return { type: "BOOLEAN", value: true };
      case "FALSE":
        return { type: "BOOLEAN", value: false };
      case "NULL":
        return { type: "NULL" };
      case "OPENBRACKET":
        return parseArray();
      case "OPENBRACE":
        return parseObject();
      default:
        throw new Error(`[Unexpected token]: ${token.type}`);
    }
  }

  // array parser
  function parseArray(): JSONNode {
    const node = { type: "ARRAY", value: [] as JSONNode[] };
    let token = next(); // consume [
    // waits for terminating "CLOSEBRACE"
    while (token.type != "CLOSEBRACKET") {
      const val = parseValue() as JSONNode;
      node.value.push(val);
      token = next();
      // consume COMMA token in array
      if (token.type === "COMMA") token = next();
    }

    return node as JSONNode;
  }

  // object parser
  function parseObject(): JSONNode {
    let node = { type: "OBJECT", value: {} as Record<string, JSONNode> };
    let token = next();
    // waits for terminating "CLOSEBRACKET"
    while (token.type != "CLOSEBRACE") {
      if (token.type != "STRING")
        throw new Error(`keys can only be string got ${token.type}`);
      const key = token.value;

      // consume COLON
      token = next();
      if (token.type != "COLON") {
        throw new Error("missing colon between key-value pair");
      }

      // value
      token = next();
      const val = parseValue() as JSONNode;
      node.value[key] = val;

      token = next();
      // consume comma token
      if (token.type == "COMMA") {
        token = next();
      }
      // WAS HERE
    }

    return node as JSONNode;
  }

  // Return AST of JSON
  return parseValue();
};

import {
  CLOSEBRACE,
  CLOSEBRACKET,
  CLOSEQUOTE,
  COLON,
  COMMA,
  OPENBRACE,
  OPENBRACKET,
  OPENQUOTE,
  Token,
} from "./types";
import { isFalse, isNull, isNumber, isTrue } from "./utils";

/**
 *
 * @param input - a string to parse as json
 * @returns returns an array of tokens - `Token[]`
 */
export const tokenizer = (input: any): Token[] => {
  let tokens: Token[] = [];
  // keep track of current character
  let current = 0;

  // loop through each char of input
  while (current < input.length) {
    let char = input[current];

    switch (char) {
      case OPENBRACE:
        tokens.push({ type: "OPENBRACE", value: char });
        current++;
        continue;

      case CLOSEBRACE:
        tokens.push({ type: "CLOSEBRACE", value: char });
        current++;
        continue;

      case OPENBRACKET:
        tokens.push({ type: "OPENBRACKET", value: char });
        current++;
        continue;

      case CLOSEBRACKET:
        tokens.push({ type: "CLOSEBRACKET", value: char });
        current++;
        continue;
      case COLON:
        tokens.push({ type: "COLON", value: char });
        current++;
        continue;

      case COMMA:
        tokens.push({ type: "COMMA", value: char });
        current++;
        continue;
      // handling string
      case OPENQUOTE:
        // don't push the open qoute
        // tokens.push({ type: "OPENQUOTE", value: char });
        let value = "";
        char = input[++current];

        while (char != CLOSEQUOTE) {
          value += char;
          char = input[++current];
        }
        current++;
        tokens.push({ type: "STRING", value: value });
        // tokens.push({ type: "CLOSEQUOTE", value: CLOSEQUOTE });
        continue;

      default:
        // handle numbers, null, booleans
        // perform regex test
        if (/[\d\w]/.test(char)) {
          let value = "";
          while (/[\d\w]/.test(char)) {
            value += char;
            char = input[++current];
          }

          // check if token is number, boolean
          if (isNumber(value)) tokens.push({ type: "NUMBER", value: value });
          else if (isTrue(value)) tokens.push({ type: "TRUE", value: value });
          else if (isFalse(value)) tokens.push({ type: "FALSE", value: value });
          else if (isNull(value)) tokens.push({ type: "NULL", value: value });
          //   handles generic case of unhandle values
          else throw new Error(`[Unexpected value]:  ${value}`);

          continue;
        }
        // skip whitespace
        if (/\s/.test(char)) {
          current++;
          continue;
        }

        throw new Error(`[Invalid token]: ${char}`);
    }
  }
  return tokens;
};

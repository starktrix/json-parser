export type TokenType =
  | "OPENBRACE"
  | "CLOSEBRACE"
  | "OPENBRACKET"
  | "CLOSEBRACKET"
  | "TRUE"
  | "FALSE"
  | "NULL"
  | "COMMA"
  | "COLON"
  | "STRING"
  | "Number";

interface Token {
    type: TokenType
    value: string
  }


/**
 * 
 * @param input - a string to parse as json
 * @returns returns an array of tokens - `Token[]`
 */
export const tokenizer = (input: any): Token[] => {
    // keep track of current character
    let current = 0

    // loop through each char of input
    while (current < input.length) {
    let char = input[current]

        current++
    }
    // placeholder
    return {} as Token[]
  }
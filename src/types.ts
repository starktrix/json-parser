// tokenizers
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
  | "OPENQUOTE"
  | "CLOSEQUOTE"
  | "STRING"
  | "NUMBER";

export const OPENBRACE = "{";
export const CLOSEBRACE = "}";
export const OPENBRACKET = "[";
export const CLOSEBRACKET = "]";
export const COLON = ":";
export const COMMA = ",";
export const TRUE = "true";
export const FALSE = "false";
export const NULL = "null";
// convinience token for lexing string
export const OPENQUOTE = '"'; 
export const CLOSEQUOTE = '"';
// considering best way to represent it
// might as well have a validation check
// const NUMBER = ""

export interface Token {
  type: TokenType;
  value: string;
}


// parser
export type JSONNode =
  | { type: "OBJECT", value: { [key: string]: JSONNode } }
  | { type: "ARRAY", value: JSONNode[] }
  | { type: "STRING", value: string }
  | { type: "NUMBER", value: number }
  | { type: "BOOLEAN", value: boolean }
  | { type: "NULL" };
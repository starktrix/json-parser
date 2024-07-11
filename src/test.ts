import { parser } from "./parser";
import { tokenizer } from "./tokenizer";

console.log(
  parser(
    tokenizer(`{
  "id": "193-0492-4923",
  "score": 100,
  "skills": ["js", "go", "rust", "AI"],
  "active": true,
  "challenge": null,
  "obj": {
      "a": "one",
      "b": 2
  }
}
`)
  )
);

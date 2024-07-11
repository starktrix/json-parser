## JSON PARSER

### Tokenizer

```ts
{
    "name": "Starktrix",
    "backend": true,
    "frontend": false,
    "skills": ["ddd", "clean arch.", "software design patterns"],
    "interests": {
        "ai": ["RL", "LLM"],
        "blockchain": true,
        "language": ["js", "ts", "go", "py", "rust", "solidity"]
    }
    "proficiency": 60,
    "empty": null
}
```

The above contains a typical json data. The following are the availble primitive tokens that can construct the complicated data types.

```yml
- OPENBRACE = {
- CLOSEBRACE = }
- OPENBRACKET = [
- CLOSEBRACKET = ]
- TRUE = true
- FALSE = false
- NULL = null
- COMMA = ,
- COLON = :,
# - STRING = ".."
- OPENQUOTE = "
- CLOSEQUOTE = "
- Number = 60
```


### Parser

We need to define the ASTNodes for JSON

```yml
- OBJECT
- ARRAY
- STRING
- NUMBER
- BOOLEAN #TRUE or FALSE
- NULL
```
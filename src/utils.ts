export const isNumber = (value: string) => !Number.isNaN(Number(value))
export const isTrue = (value: string) => value === "true"
export const isFalse = (value: string) => value === "false"
export const isNull = (value: string) => value === "null"
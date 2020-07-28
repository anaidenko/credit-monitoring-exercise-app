export const matches = (str1: string, str2: string): boolean =>
  str1 === str2 || (str1 && str2) ? str1.trim().toUpperCase() === str2.trim().toUpperCase() : false

export const includes = (str: string, searchString: string): boolean =>
  str === searchString || (str && searchString)
    ? str.trim().toUpperCase().includes(searchString.trim().toUpperCase())
    : false

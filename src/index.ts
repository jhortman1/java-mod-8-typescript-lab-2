function prepend(numSpaces: number, inputString: string) {
  // your code here
  let newString:string = "";
  for(let i = 0; i<numSpaces;i++)
  {
    newString+=" ";
  }
  return newString.concat(inputString);
}
console.log(prepend(5,"Hello"));

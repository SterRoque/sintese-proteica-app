export function splitIntoGroupsOfThree(string: string) {
   const matches = string.match(/.{1,3}/g);
   return matches ? matches.join(' ') : '';
}

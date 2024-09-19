export function splitIntoGroupsOfThree(string: string, separator: string) {
   let cleanedInput = string.replace(new RegExp(`[${separator}]`, 'g'), '');

   // Adiciona o separador a cada 3 caracteres
   let result = cleanedInput.replace(/(.{3})(?=.)/g, `$1${separator}`);

   return result;
}

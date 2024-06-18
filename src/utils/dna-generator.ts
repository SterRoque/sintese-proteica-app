export function dnaGenerator() {
   const base = ['A', 'T', 'C', 'G'];
   const baseStop = ['ATT', 'ATC', 'ACT'];
   let baseStr = '';

   let tam = Math.floor(Math.random() * (40 - 20 + 1)) + 20;
   let randStop = Math.floor(Math.random() * 3);

   for (let i = 0; i < tam; i++) {
      const index = Math.floor(Math.random() * base.length);

      baseStr = baseStr.concat(base[index]);
   }

   const indexTAC = getRandomIndexTAC(baseStr.length);
   const indexStop = getRandomIndexStop(indexTAC, baseStr.length);

   const regexTAC = getRegex(indexTAC, 'TAC');
   const regexStop = getRegex(indexStop, baseStop[randStop]);

   baseStr = baseStr.replace(regexTAC, `$1${'TAC'}`);
   baseStr = baseStr.replace(regexStop, `$1${baseStop[randStop]}`);

   console.log(
      `FITA: ${baseStr}, \nINDEX-TAC: ${indexTAC}, INDEX-STOP: ${indexStop}`,
   );

   return baseStr;
}

function getRegex(index: number, caractere: string) {
   return new RegExp(`(.{${index}}).{${caractere.length}}`);
}

function getRandomIndexTAC(length: number) {
   let indexTAC = 0;

   while (true) {
      indexTAC = Math.floor(Math.random() * length - 6) + 0;
      if (indexTAC > 0 && indexTAC % 3 === 0) {
         break;
      }
   }

   return indexTAC;
}
function getRandomIndexStop(indexTAC: number, length: number) {
   let indexStop = 0;

   while (true) {
      indexStop =
         Math.floor(Math.random() * (length - (indexTAC + 6) + 1)) +
         (indexTAC + 6);
      if (indexStop > indexTAC && indexStop % 3 === 0) {
         break;
      }
   }

   return indexStop;
}

export function dnaTranscription(dna: string) {
   const complementaryBases: { [key: string]: string } = {
      A: 'U',
      T: 'A',
      C: 'G',
      G: 'C',
   };
   let rna = '';

   for (let i = 0; i < dna.length; i++) {
      rna += complementaryBases[dna[i]];
   }
   return rna;
}

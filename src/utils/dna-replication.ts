export function dnaReplication(dna: string): string {
   const nucleotides: { [key: string]: string } = {
      A: 'T',
      T: 'A',
      C: 'G',
      G: 'C',
   };
   let replicatedDna = '';
   for (let i = 0; i < dna.length; i++) {
      replicatedDna += nucleotides[dna[i]];
   }
   return replicatedDna;
}

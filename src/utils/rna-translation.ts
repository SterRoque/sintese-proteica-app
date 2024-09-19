import { codonTable } from '../constants/codon-table';
import { splitIntoGroupsOfThree } from './split-in-to-group-of-three';

export function rnaTranslation(rna: string) {
   let aminoAcidSequence = '';
   const mRNAsplit = splitIntoGroupsOfThree(rna, ' ').split(' ');
   const indexAUG = mRNAsplit.indexOf('AUG');
   const rnaSplitAtAUG = mRNAsplit.slice(indexAUG);

   if (indexAUG < 0) return;

   const stop =
      rnaSplitAtAUG.find((item) => {
         if (item === 'UAA' || item === 'UGA' || item === 'UAG') {
            return item;
         }
      }) ?? '';

   const indexSTOP = mRNAsplit.indexOf(stop);

   if (indexSTOP < indexAUG) return;

   const startRNA = mRNAsplit.slice(0, indexAUG).join('');
   const middleRNA = mRNAsplit.slice(indexAUG, indexSTOP);
   const endRNA = mRNAsplit.slice(indexSTOP).join('');

   console.log(startRNA);

   for (let i = 0; i < middleRNA.length; i++) {
      aminoAcidSequence += codonTable[middleRNA[i]];
   }

   return {
      startRNA: `${startRNA} `,
      middleRNA: middleRNA.join(' '),
      endRNA: ` ${endRNA}`,
      aminoAcidSequence: splitIntoGroupsOfThree(aminoAcidSequence, ' - '),
   };
}

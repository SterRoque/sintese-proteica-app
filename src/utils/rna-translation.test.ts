import { dnaGenerator } from './dna-generator';
import { dnaTranscription } from './dna-transcription';
import { rnaTranslation } from './rna-translation';

describe('rnaTranslation', () => {
   test('', () => {
      const dna = dnaGenerator();
      const rna = dnaTranscription(dna);
      const result = rnaTranslation(rna);

      console.log({
         result,
      });
   });
});

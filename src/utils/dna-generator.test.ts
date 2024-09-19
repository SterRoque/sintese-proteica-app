import { dnaGenerator } from './dna-generator';
import { splitIntoGroupsOfThree } from './split-in-to-group-of-three';

function throwError() {
   throw new Error('Forced error');
}

describe('dnaGenerator', () => {
   test('Deve encontrar o TAC na fita', () => {
      const result = splitIntoGroupsOfThree(dnaGenerator(), ' ');
      console.log('teste1', {
         result,
      });
      expect(result.includes('TAC')).toBe(true);
   });

   test('Deve encontrar um condição de parada, ATT, ACT ou ATC', () => {
      const result = splitIntoGroupsOfThree(dnaGenerator(), ' ');
      const stop = ['ATT', 'ACT', 'ATC'];
      const containsStop = result
         .split(' ')
         .some((char: any) => stop.includes(char));

      console.log('aaa', {
         result,
         containsTAC: result.includes('TAC'),
         containsStop,
      });
      expect(result.includes('TAC')).toBe(true);
      expect(containsStop).toBe(true);
   });
});

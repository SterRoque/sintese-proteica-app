import { splitIntoGroupsOfThree } from './split-in-to-group-of-three';

describe('splitIntoGroupsOfThree', () => {
   test('deveria separar a string a cada 3 caracteres, colocando espaço entre elas', () => {
      const result = splitIntoGroupsOfThree('ABCDEFGHI');
      expect(result).toEqual('ABC DEF GHI');
   });
});

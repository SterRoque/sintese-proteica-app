import { splitIntoGroupsOfThree } from './split-in-to-group-of-three';

type DnaValidationResponse = {
   message:
      | 'condição encontrada'
      | 'condição não encontrada'
      | 'TAC encontrado'
      | 'TAC não encontrado';
   success: boolean;
};

export function dnaValidationTAC(dna: string): DnaValidationResponse {
   const fitaDNA = splitIntoGroupsOfThree(dna);

   if (fitaDNA.includes('TAC')) {
      return {
         message: 'TAC encontrado',
         success: true,
      };
   }

   return {
      message: 'TAC não encontrado',
      success: false,
   };
}

export function dnaValidationSTOP(dna: string): DnaValidationResponse {
   const indexTAC = dna.indexOf('TAC');
   const fitaDNA = splitIntoGroupsOfThree(dna.substring(indexTAC));
   if (
      fitaDNA.includes('ATT') ||
      fitaDNA.includes('ACT') ||
      fitaDNA.includes('ATC')
   ) {
      return {
         message: 'condição encontrada',
         success: true,
      };
   }
   return {
      message: 'condição não encontrada',
      success: false,
   };
}

export function dnaValidation(
   fitaArray: string[],
   fitaBase: string,
   baseStop: string[],
   addTAC: (fitaArray: string[]) => void,
   addBaseStop: (
      fitaArray: string[],
      indexTAC: number,
      baseStop: string[],
   ) => void,
) {
   let dnaValidationTACResult = dnaValidationTAC(fitaBase);

   fitaArray = splitIntoGroupsOfThree(fitaBase).split(' ');

   if (dnaValidationTACResult.message === 'TAC não encontrado') {
      addTAC(fitaArray);
      dnaValidationTACResult.message = 'TAC encontrado';
   }

   if (dnaValidationTACResult.message === 'TAC encontrado') {
      let dnaValidationSTOPResult = dnaValidationSTOP(fitaArray.join(''));
      let indexTAC = fitaArray.indexOf('TAC');

      if (dnaValidationSTOPResult.message === 'condição não encontrada') {
         addBaseStop(fitaArray, indexTAC, baseStop);
         dnaValidationSTOPResult.message = 'condição encontrada';
      }

      let valida =
         dnaValidationTACResult.message === 'TAC encontrado' &&
         dnaValidationSTOPResult.message === 'condição encontrada';

      if (valida) {
         return fitaArray.join('');
      }
   }
}

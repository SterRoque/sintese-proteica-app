import { dnaValidation } from './dna-validation';

export function dnaGenerator(): string {
   const base = ['A', 'T', 'C', 'G'];
   const baseStop = ['ATT', 'ATC', 'ACT'];
   let fitaBase = '';
   let fitaArray: any = [];
   let fitaValida = '';

   for (let i = 0; i < 30; i++) {
      const index = gerarNumeroAleatorio(0, base.length - 1);
      fitaBase = fitaBase.concat(base[index]);
   }

   fitaValida =
      dnaValidation(fitaArray, fitaBase, baseStop, addTAC, addBaseStop) ?? '';

   console.log({
      fitaValida,
   });

   return fitaValida;
}

function gerarNumeroAleatorio(min: number, max: number) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addTAC(fitaArray: string[]) {
   let indexAleatorio = gerarNumeroAleatorio(0, 3);

   fitaArray[indexAleatorio] = 'TAC';
}

function addBaseStop(
   fitaArray: string[],
   indexTAC: number,
   baseStop: string[],
) {
   let indexAleatorio = gerarNumeroAleatorio(indexTAC + 1, fitaArray.length);
   const indexAleatorioStop = gerarNumeroAleatorio(0, baseStop.length - 1);
   fitaArray[indexAleatorio] = baseStop[indexAleatorioStop];
}

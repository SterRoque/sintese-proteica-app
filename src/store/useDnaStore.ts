import { create } from 'zustand';

interface IDnaStore {
   dna: string;
   dnaUpdate: (value: string) => void;
}

export const useDnaStore = create<IDnaStore>()((set) => ({
   dna: '',
   dnaUpdate: (newDNA: string) => set(() => ({ dna: newDNA })),
}));

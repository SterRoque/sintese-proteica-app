import { create } from 'zustand';

type PreloaderStore = {
   isOpenPreloader: boolean;
   setIsOpenPreloader: (value: boolean) => void;
};

export const usePreloaderStore = create<PreloaderStore>((set) => ({
   isOpenPreloader: false,
   setIsOpenPreloader: (value) => set({ isOpenPreloader: value }),
}));

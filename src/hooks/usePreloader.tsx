import { usePreloaderStore } from '../store/usePreloaderStore';

export function usePreloader() {
   const { isOpenPreloader, setIsOpenPreloader } = usePreloaderStore();

   function openPreloader() {
      setIsOpenPreloader(true);
   }
   function closePreloader() {
      setTimeout(() => {
         setIsOpenPreloader(false);
      }, 500);
   }

   return {
      isOpenPreloader,
      openPreloader,
      closePreloader,
   };
}

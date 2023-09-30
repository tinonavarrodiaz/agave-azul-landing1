import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type State = {
  lang: string;
};

export const useLangStore = create(
  persist<State>(
    (set) => ({
      lang: 'en',
      setLang: (lang: string) => set(() => ({ lang })),
    }),
    {
      name: 'lang', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

import { create } from "zustand";

type TFilter = {
  filter: string;
  setFilter: (value:"GeneralPhysician"|"Gynecologist"|"Dermatologist"|"Pediatricians"|"Neurologist"|"Gastroenterologist") => void;
};

export const useFilter = create<TFilter>()((set) => ({
  filter: "",
  setFilter: (value) => set({filter:value}),
}));

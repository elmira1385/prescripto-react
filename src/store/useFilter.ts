import { create } from "zustand";
export type TSpeciality =
  | "GeneralPhysician"
  | "Gynecologist"
  | "Dermatologist"
  | "Pediatricians"
  | "Neurologist"
  | "Gastroenterologist";
type TFilter = {
  filter: string;
  setFilter: (value: TSpeciality) => void;
};

export const useFilter = create<TFilter>()((set) => ({
  filter: "",
  setFilter: (value) => set({ filter: value }),
}));

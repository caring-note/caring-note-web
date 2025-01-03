import { create } from "zustand";

interface FetchParams {
  baseDate: string;
  cursor?: string;
  size: number;
}

interface ParamsState {
  params?: Partial<FetchParams>;
  setParams: (newParams: Partial<FetchParams>) => void;
}

export const useCounselSessionStore = create<ParamsState>((set) => ({
  params: undefined,
  setParams: (newParams) =>
    set((state) => ({ params: { ...state.params, ...newParams } })),
}));

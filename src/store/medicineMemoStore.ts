import { SelectCounselCardRes, SelectMedicationRecordHistRes } from "@api/api";
import { create } from "zustand";

interface MedicineMemoState {
  httpStatus?: number;
  originalData?: SelectMedicationRecordHistRes[];
  editedData?: SelectMedicationRecordHistRes[];
  setHttpStatus?: (status: number) => void;
  setOriginalData?: (data: SelectMedicationRecordHistRes[]) => void;
  setEditedData?: (data: SelectMedicationRecordHistRes[]) => void;
  resetEditedData?: () => void;
}

const useMedicineMemoStore = create<MedicineMemoState>((set, get) => ({
  originalData: [],
  editedData: [],
  setHttpStatus: (status: number) => set({ httpStatus: status }),
  setOriginalData: (data: SelectMedicationRecordHistRes[]) =>
    set({ originalData: [...data] }),
  setEditedData: (data: SelectMedicationRecordHistRes[]) =>
    set({ editedData: [...data] }),
  resetEditedData: () =>
    set({ editedData: JSON.parse(JSON.stringify(get().originalData)) }),
}));

export default useMedicineMemoStore;

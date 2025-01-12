import { create } from "zustand";
import { MedicineConsultDTO } from "@/types/MedicineConsultDTO";

export const useMedicineConsultStore = create<{
    medicineConsult: MedicineConsultDTO;
    setMedicationConsult: (data: MedicineConsultDTO) => void;
  }>((set) => ({
    medicineConsult: {
      counselSessionId: '',
      medicationCounselId: '',
      counselRecord: '',
      counselRecordHighlights: [],
    },
    setMedicationConsult: (data: MedicineConsultDTO) => set({ medicineConsult: data }),
  }));

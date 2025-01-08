import { SelectMedicationRecordHistResUsageStatusCodeEnum } from '@/api';

export const convertMedicineStatus = (
  status?: SelectMedicationRecordHistResUsageStatusCodeEnum,
): string => {
  switch (status) {
    case SelectMedicationRecordHistResUsageStatusCodeEnum.AsNeeded:
      return '필요 시 복용';
    case SelectMedicationRecordHistResUsageStatusCodeEnum.Regular:
      return '상시복용';
    case SelectMedicationRecordHistResUsageStatusCodeEnum.Stopped:
      return '복용 중단';
    default:
      return '';
  }
};

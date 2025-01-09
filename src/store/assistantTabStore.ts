import { create } from 'zustand';

export enum AssistantInfoTab {
  basicInfo = 'basicInfo',
  healthInfo = 'healthInfo',
  lifeInfo = 'lifeInfo',
  independentInfo = 'independentInfo',
}

interface AssistantInfoTabState {
  activeTab: AssistantInfoTab;
  setActiveTab: (tab: AssistantInfoTab) => void;
}

const useAssistantInfoTabStore = create<AssistantInfoTabState>((set) => ({
  activeTab: AssistantInfoTab.basicInfo,
  setActiveTab: (tab: AssistantInfoTab) => set({ activeTab: tab }),
}));

export default useAssistantInfoTabStore;

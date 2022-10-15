import create from 'zustand';

const useSiteStore = create((set) => ({
    currentView: 'landing',
    setCurrentView: (currentView: string) => set({ currentView }),
}));

export default useSiteStore;

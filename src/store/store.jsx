import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
const useStore = create(
    devtools(set => ({
        isUserLoggedIn: false,
        user: {},
        activeContent: 'allUsers',
        isOrgSelected: false,
        login: data => set({ isUserLoggedIn: true, user: { ...data } }),
        setUser: data => set({ user: { ...data } }),
        logout: () => set({ isUserLoggedIn: false, user: {} }),
        setActiveContent: content => set({ activeContent: content }),
        isSideNavOpen: false,
        whichSideNav: {
            isSideNavOpen: false,
            isSettingsOpen: false,
        },
        toggleNav: () => set(state => ({ isSideNavOpen: !state.isSideNavOpen })),
        toggleSideNav: stateKey =>
            set(state => ({
                whichSideNav: {
                    isSideNavOpen: stateKey === 'isSideNavOpen' ? !state.whichSideNav.isSideNavOpen : false,
                    isSettingsOpen: stateKey === 'isSettingsOpen' ? !state.whichSideNav.isSettingsOpen : false,
                },
            })),
    })),
);

export default useStore;

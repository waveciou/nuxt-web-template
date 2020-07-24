
// * ==========================================================================
// * state
// * ==========================================================================
export const state = () => ({
  menuOpen: false,
  screenWidth: 0,
});

// * ==========================================================================
// * Actions
// * ==========================================================================
export const actions = {};

// * ==========================================================================
// * mutations
// * ==========================================================================

export const mutations = {
  CTRL_MENU_OPEN(state, payload) {
    state.menuOpen = payload;
  },
  GET_SCREEN_WIDTH(state) {
    state.screenWidth = window.innerWidth;
  },
};
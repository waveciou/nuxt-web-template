
// * ==========================================================================
// * state
// * ==========================================================================
export const state = () => ({
  website: {
    title: 'Nuxt Website',
    route: {
      header: [
        {
          name: 'Sitemap',
          path: '/sitemap'
        },
        {
          name: 'Favorite',
          path: '/favorite'
        },
        {
          name: 'Opinion',
          path: '/opinion'
        }
      ],
      menu: [
        {
          name: 'News',
          path: '/news'
        },
        {
          name: 'About',
          path: '/about'
        },
        {
          name: 'Work',
          path: '/work'
        },
        {
          name: 'Product',
          path: '/product'
        },
        {
          name: 'Media',
          path: '/media'
        },
        {
          name: 'Shop',
          path: '/shop'
        },
        {
          name: 'Form',
          path: '/form'
        },
      ],
      footer: [
        {
          name: 'contact',
          path: '/contact'
        }
      ]
    }
    
    
  },
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
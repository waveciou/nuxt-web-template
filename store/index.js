
// * ==========================================================================
// * State
// * ==========================================================================
export const state = () => ({
  title: 'Nuxt Website',
  route: {
    header: [
        {
          name: 'sitemap',
          title: 'Sitemap',
          path: '/sitemap'
        },
        {
          name: 'favorite',
          title: 'Favorite',
          path: '/favorite'
        },
        {
          name: 'opinion',
          title: 'Opinion',
          path: '/opinion'
        }
    ],
    menu: [
        {
          name: 'news',
          title: 'News',
          path: '/news'
        },
        {
          name: 'about',
          title: 'About',
          path: '/about'
        },
        {
          name: 'work',
          title: 'Work',
          path: '/work'
        },
        {
          name: 'product',
          title: 'Product',
          path: '/product'
        },
        {
          name: 'media',
          title: 'Media',
          path: '/media'
        },
        {
          name: 'shop',
          title: 'Shop',
          path: '/shop'
        },
        {
          name: 'form',
          title: 'Form',
          path: '/form'
        },
    ],
    footer: [
        {
          name: 'contact',
          title: 'Contact',
          path: '/contact'
        }
    ]
  },
  menuOpen: false,
  screenWidth: 0,
});

// * ==========================================================================
// * Actions
// * ==========================================================================
export const actions = {};

// * ==========================================================================
// * Mutations
// * ==========================================================================

export const mutations = {
  CTRL_MENU_OPEN(state, payload) {
    state.menuOpen = payload;
  },
  GET_SCREEN_WIDTH(state) {
    state.screenWidth = window.innerWidth;
  },
};

// * ==========================================================================
// * Getters
// * ==========================================================================

export const getters = {
  flatRouteData: (state) => {
    let result = [];
    let keys = Object.keys(state.route);

    keys.forEach(item => {
      state.route[item].forEach(data => {
        result.push(data);
      });
    });

    return result;
  }
}

import HomePage from '../pages/home/home.jsx';
import TranslatePage from '../pages/translate/translatePage.jsx';
import ChatroomPage from '../pages/chatroom/chatroom.jsx';

import AboutPage from '../pages/util/about.jsx';
import FormPage from '../pages/util/form.jsx';
import ProductPage from '../pages/util/product.jsx';
import SettingsPage from '../pages/setting/settingsPage.jsx';
import PreferenceSettingsPage from '../pages/setting/preferenceSettingsPage.jsx'
import AccountSettingPage from '../pages/setting/accountSettings'

import MessagePage from '../pages/chatroom/Message.jsx'

import DynamicRoutePage from '../pages/dynamic-route.jsx';
import RequestAndLoad from '../pages/util/request-and-load.jsx';
import NotFoundPage from '../pages/util/404.jsx';
import MaterialPage from '../pages/home/material.jsx';

var routes = [
  /* Main pages */
  {
    path: '/home/',
    component: HomePage,
  },
  {
    path: '/translate/',
    component: TranslatePage,
  },
  { 
    path: '/chatroom/',
    component: ChatroomPage
  },

  /* subpages */
  // Feed
  {
    path: '/material/:id/',
    component: MaterialPage,
  },
  // About
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },

  {
    path: '/product/:id/',
    component: ProductPage,
  },
  {
    path: '/message/:id/',
    component: MessagePage,
  },

  // Setting
  {
    path: '/settings/',
    component: SettingsPage,
  },
  {
    path:'/settings/preference',
    component: PreferenceSettingsPage,

  },
  {
    path:'/settings/accountSetting',
    component: AccountSettingPage
  },

  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;

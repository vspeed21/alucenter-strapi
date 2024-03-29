const config = {
  locales: ['es', 'en'],
  translations: {
    fr: {
      'Auth.form.welcome.subtitle': 'Subtitle en frances',
      'Auth.form.welcome.title': 'title en frances'
    },
    es: {
      'Auth.form.welcome.subtitle': 'Bienvenido al panel de administración',
      'Auth.form.welcome.title': 'Inicia sesión'
    }
  },

};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};

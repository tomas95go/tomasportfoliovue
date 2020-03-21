/*
Receives The context (NUXT) which provides additional objects/params from Nuxt to Vue components 
and is available in special nuxt lifecycle 
areas like asyncData, fetch, plugins, middleware and nuxtServerInit.
*/
export default function({ isHMR, app, store, route, params, error, redirect }) {
  const defaultLocale = app.i18n.fallbackLocale;
  //fallBackLocale = 'en'
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) {
    return;
  }
  // Get locale from params
  const locale = params.lang || defaultLocale;
  if (!store.state.locales.includes(locale)) {
    return error({ message: "This page could not be found.", statusCode: 404 });
  }
  // Set locale
  store.commit("SET_LANG", locale);
  app.i18n.locale = store.state.locale;
  // If route is /<defaultLocale>/... -> redirect to /...
  if (
    locale === defaultLocale &&
    route.fullPath.indexOf("/" + defaultLocale) === 0
  ) {
    const toReplace =
      "^/" +
      defaultLocale +
      (route.fullPath.indexOf("/" + defaultLocale + "/") === 0 ? "/" : "");
    const re = new RegExp(toReplace);
    return redirect(route.fullPath.replace(re, "/"));
  }
}

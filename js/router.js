const Router = (() => {
  let routes = {};
  let defaultRoute = 'inicio';

  const init = (config) => {
    routes = config.routes;
    defaultRoute = config.defaultRoute || defaultRoute;
    window.addEventListener('hashchange', handleRoute);
    if (!location.hash) {
      navigate(defaultRoute);
    } else {
      handleRoute();
    }
  };

  const normalize = (hash) => hash.replace('#/', '') || defaultRoute;

  const handleRoute = () => {
    const route = normalize(location.hash);
    const target = routes[route];
    if (target && typeof target.onEnter === 'function') {
      target.onEnter(route);
    }
    updateActiveNav(route);
  };

  const navigate = (route) => {
    location.hash = `#/${route}`;
  };

  const updateActiveNav = (route) => {
    document.querySelectorAll('.nav__link').forEach((link) => {
      link.classList.toggle('is-active', link.dataset.route === route);
    });
  };

  return { init, navigate };
})();

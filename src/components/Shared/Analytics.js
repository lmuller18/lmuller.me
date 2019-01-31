import ReactGA from 'react-ga';

const initAnalytics = page => {
    ReactGA.initialize('UA-74688282-2');
    ReactGA.pageview(`/${page}`);
}

const logEvent = (category, action) => {
    ReactGA.event({
        category,
        action
    });
}

export { initAnalytics, logEvent };
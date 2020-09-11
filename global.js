const scrollToSection = (el) => {
    const y = (el.getBoundingClientRect().top - 20) + window.scrollY;
    window.scroll({
      top: y,
      behavior: 'smooth'
    });
};

window.addEventListener('DOMContentLoaded', () => {
    const el = document.querySelector('.autofocus');
    if(el) {
        el.focus();
    }
});

const toggleDark = (mode = 'toggle') => {
    const pres = document.querySelectorAll('pre.include');
    pres.forEach(pre => pre.classList[mode]('none'));

    const darks = document.querySelectorAll('body > *:not(code), a, div.message-box, input, button');
    darks.forEach(el => el.classList[mode]('dark'));

    const nones = document.querySelectorAll('table');
    nones.forEach(el => el.classList[mode]('none'));
};

document.querySelector('details:not(.skip)').addEventListener('toggle', (e) => {
    const details = e.currentTarget;

    toggleDark();

    if(details.open) {
        scrollToSection(details);
    } else {
        scrollToSection(document.querySelector('body'));
    }
});

const clonePosition = position => {
    return {
        coords: {
            accuracy: position.coords.accuracy,
            altitude: position.coords.altitude,
            altitudeAccuracy: position.coords.altitudeAccuracy,
            heading: position.coords.heading,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            speed: position.coords.speed
        },
        timestamp: position.timestamp
    };
};
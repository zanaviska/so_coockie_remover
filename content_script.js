let url = new URL(window.location.href);
let element;

switch (url.host)
{
    case 'stackoverflow.com':
        element = document.querySelector("body > div.ff-sans.ps-fixed.z-nav-fixed.ws4.sm\\:w-auto.p32.sm\\:p16.bg-black-750.fc-white.bar-lg.b16.l16.r16.js-consent-banner");
        break;
    case 'www.transfermarkt.com':
        element = document.querySelector("#sp_message_container_575843");
        break;
    default:
        element = undefined;
        console.log('there is no coockie remover for this page');
}

element.parentElement.removeChild(element);
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Router from 'next/router';
import NProgress from 'nprogress';

export const configProgressBar = () => {
  NProgress.configure({ showSpinner: false });

  Router.events.on('hashChangeStart', () => {
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
    bootstrapHeadersWithId();
    bootstrapExternalLinks();
  });

  Router.events.on('routeChangeError', () => {
    NProgress.done();
  });
}

export const bootstrapHeadersWithId = () => {
  Array.from(window.document.querySelectorAll('h1, h2, h3, h4, h5, h6')).forEach((element) => {
    if (element?.id && !element.classList.contains('header-link')) {

      element.classList.add('header-link', 'fw-bold');
      element.setAttribute('title', 'Copy URL');

      element.addEventListener('click', (event) => {
        if (event.isTrusted) {
          window.location.href = `${Router.route}#${element.id}`;
          navigator.clipboard.writeText(window.location.href).then(() => {
            element.classList.add('copied');
          });
        }
      });

      element.addEventListener('mouseout', (event) => {
        if (event.isTrusted) {
          element.classList.remove('copied');
        }
      });
    }
  });
}

export const bootstrapExternalLinks = () => {
  Array.from(window.document.querySelectorAll('a[target="_blank"]')).forEach((link) => {
    const wrapperClass = 'externalLinkIconWrapper';
    if (!Array.from(link.childNodes).find(child => (child as HTMLElement).classList?.contains(wrapperClass))) {
      const iconWrapper = window.document.createElement('span');
      const iconWrapperContent = icon(faExternalLinkAlt).html.shift();
      if (iconWrapperContent) {
        iconWrapper.innerHTML = iconWrapperContent;
        iconWrapper.classList.add(wrapperClass, 'ms-2');
        link.insertAdjacentElement('beforeend', iconWrapper);
      }
    }
  });
}

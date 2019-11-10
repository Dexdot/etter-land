import { lockyOn } from 'dom-locky';
import { isMobileSafari, getIOSVersion } from '@/helpers/detect';

const html = document.querySelector('html');
const isSafari12 = isMobileSafari() && getIOSVersion() <= 12;

const freezeVp = e => {
  e.preventDefault();
};

let unlock = null;

const disable = el => {
  if (isSafari12) {
    unlock = lockyOn(el);
  } else {
    html.classList.add('no-scroll');
    document.body.addEventListener('touchmove', freezeVp, false);
  }
};

const enable = () => {
  if (isSafari12) {
    if (unlock) unlock();
  } else {
    html.classList.remove('no-scroll');
    document.body.removeEventListener('touchmove', freezeVp, false);
  }
};

export default { disable, enable };

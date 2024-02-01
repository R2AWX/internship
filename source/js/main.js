import {iosVhFix} from './utils/ios-vh-fix';
import {StickyHeader} from './vendor/sticky-header';
import {initMenu} from './modules/menu';
import {initSliders} from './modules/slider';
import {initAccordions} from './modules/init-accordion';
import {Form} from './vendor/form-validate/form';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    const stickyHeader = new StickyHeader();
    stickyHeader.init();
    initMenu();
    initSliders();
    const form = new Form();
    window.form = form;
    form.init();
    initAccordions();
  });
});

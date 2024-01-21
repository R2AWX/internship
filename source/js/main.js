import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './vendor/form-validate/form';
import {initSliders} from './modules/slider';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
    initSliders();
  });
});

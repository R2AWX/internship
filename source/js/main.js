import {iosVhFix} from './utils/ios-vh-fix';
import {StickyHeader} from './vendor/sticky-header';
import {initMenu} from './modules/menu';
import {initAccordions} from './modules/init-accordion';
import {initSliders} from './modules/slider';
import {CustomSelect} from './vendor/select/custom-select';
import {initAutoResizeTextarea} from './vendor/auto-resize-textarea';
import {initModals} from './modules/init-modals';
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
    initAccordions();
    initSliders();
    initModals();
    const select = new CustomSelect();
    select.init();
    initAutoResizeTextarea();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

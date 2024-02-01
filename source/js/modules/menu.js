const wrapper = document.querySelector('[data-menu="wrapper"]');
const button = wrapper.querySelector('[data-menu="button"]');
const nav = wrapper.querySelector('[data-menu="nav"]');
const overlay = document.querySelector('[data-menu="overlay"]');

const onLinkClick = (evt) => evt.target.matches('[data-menu="link"]') ? closeMenu() : null;

const onEscKeydown = (evt) => evt.key === 'Escape' ? closeMenu() : null;

const openMenu = () => {
  wrapper.classList.add('is-open');
  button.classList.remove('btn--light');
  button.classList.add('btn--dark');
  overlay.classList.add('is-open');
  document.addEventListener('keydown', onEscKeydown);
  nav.addEventListener('click', onLinkClick);
  overlay.addEventListener('click', closeMenu);
  window.scrollLock.disableScrolling();
  window.focusLock.lock('[data-menu="nav"]', false);
};

const initMenu = () => {
  button.addEventListener('click', () => !wrapper.classList.contains('is-open') ? openMenu() : closeMenu());
};

function closeMenu() {
  wrapper.classList.remove('is-open');
  button.classList.remove('btn--dark');
  button.classList.add('btn--light');
  overlay.classList.remove('is-open');
  document.removeEventListener('keydown', onEscKeydown);
  nav.removeEventListener('click', onLinkClick);
  overlay.removeEventListener('click', closeMenu);
  window.scrollLock.enableScrolling();
  window.focusLock.unlock();
}

export {initMenu};

import scroll from '@/helpers/stop-scroll';

const onEscape = e => {
  if (e.keyCode === 27) {
    const el = $.qs('[data-modal].active');
    if (!el) return false;
    close(el);
  }
};

export const init = () => {
  // Open
  $.delegate(`[data-modal-open]`, (e, el) => {
    const name = el.dataset.modalOpen;
    const modal = $.qs(`[data-modal="${name}"]`);
    open(modal);
  });

  // Close
  $.delegate(`[data-modal-close]`, (e, el) => {
    const name = el.dataset.modalClose;
    const modal = $.qs(`[data-modal="${name}"]`);
    close(modal);
  });

  window.toggleModal = name => {
    const modal = $.qs(`[data-modal="${name}"]`);
    if (!modal) return false;

    if (modal.classList.contains('active')) {
      close(modal);
    } else {
      open(modal);
    }
  };
};

export function open(el) {
  scroll.disable();
  el.classList.add('active');
  window.addEventListener('keydown', onEscape);
}

export function close(el) {
  scroll.enable();
  el.classList.remove('active');
  window.removeEventListener('keydown', onEscape);
}

init();

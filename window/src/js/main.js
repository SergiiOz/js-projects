import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';

//event fires when the initials HTML document has been completely loaded and parsed
window.addEventListener('DOMContentLoaded', () => {
  modals();
  tabs('.glazing_slider ', '.glazing_block', '.glazing_content', 'active');
  tabs(
    '.decoration_slider',
    '.no_click',
    '.decoration_content > div > div',
    'after_click'
  );
});

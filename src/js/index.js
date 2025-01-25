// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]', {
	// Your custom options
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
}, false);

import darkMode from './modules/dark-mode.js';
darkMode();

// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();

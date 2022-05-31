import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';
import {mainMenu} from './modules/main-menu';
import {initSliderNews} from './modules/slider-news';
import {initSliderTeam} from './modules/slider-team';
import {initSliderReviews} from './modules/slider-reviews';
import {initSliderGallery} from './modules/slider-gallery';
import {openServiceForm, validationForm} from './modules/service-form';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
mainMenu();
initSliderNews();
initSliderTeam();
initSliderReviews();
initSliderGallery();
openServiceForm();
validationForm();

import { initCards } from './components/card';
import { initModalListeners } from './components/modal';
import { enableValidation } from './components/validate';

import './styles/index.css'; 

const initApp = () => {
	initCards();
	initModalListeners();
	enableValidation(); 
}

initApp();
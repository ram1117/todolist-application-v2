import './style.css';
import {initListeners} from './modules/taskInterface.js'
import { draginit } from './modules/dragdropinterface';

window.onload=()=>{
  initListeners();
  draginit();
};

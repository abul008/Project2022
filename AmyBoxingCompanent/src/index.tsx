import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import { store } from './store/index';
import {App} from "./App";
import './i18n';
import i18next from "i18next"

i18next.changeLanguage("am")

ReactDOM.render(
 <Provider store={store}>
  <App /> 
 </Provider>   
,
document.getElementById('root')
);
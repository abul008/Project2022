import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import { store } from './store/index';
import {App} from "./App";
import './i18n';
import i18next from "i18next";
import axios from "axios";

i18next.changeLanguage("am")
axios.defaults.baseURL = 'http://localhost:8080/';
// axios.defaults.withCredentials = true;


ReactDOM.render(
 <Provider store={store}>
  <App /> 
 </Provider>   
,
document.getElementById('root')
);
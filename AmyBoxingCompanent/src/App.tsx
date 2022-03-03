
import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';
import { RootState } from './state/reducers';
import { HeadPage } from './componentdidmount/HeadPageScreen/headPageScreen';

export const App:React.FC = () => {



  // const state = useSelector((state:RootState) => state.bank)
  // const dispatch = useDispatch();

  // const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch)

  return (
    <div className="App">
      <HeadPage />
    </div>
  );
}

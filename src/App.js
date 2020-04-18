import React from 'react';
import {Provider} from "react-redux";
import './App.scss';
import Layouts from './pages/Layouts';
import Header from "./components/Header";
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Layouts />
      </div>
    </Provider>
  );
}

export default App;

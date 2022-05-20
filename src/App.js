import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Details from './Components/Details';
import 'antd/dist/antd.css';
import NavBar from './Components/NavBar';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { mainReducer } from './Redux/reducers';
import ProductComponent from './Components/ProductComponent';


const store = createStore(mainReducer);

function App() {

  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path='/Details/:productId' element={<Details />} />
            <Route path='/ProductComponent' element={<ProductComponent/>}/>
           
          </Routes>
        </BrowserRouter>
      </Provider>

        {/* <Counter /> */}



    </div>


  )

}

export default App;

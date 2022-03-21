import React from 'react'
import './styles/index.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import Navbar from './components/Navbar'
import LogoPrincipal from './components/LogoPrincipal'
import Footer from './components/Footer/Footer'
import Productos from './components/Productos/Productos'
import QuienSoy from './components/QuienSoy'
import Home from './components/Home'
import { MenuMobile } from './components/MenuMobile';
import CarritoProductos from './components/Carrito/CarritoProductos'
import { CarritoVisible } from './components/Context/CarritoVisible';
import { MenuVisible } from './components/Context/MenuVisible';
import { Compras } from './components/Context/Compras';

const App = () => {
  const sheetAdultxs = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTpqEahZoSjdXbks6dOb0N05yLIT7F-0tKYAeZEAIarJNVDY7nVlYjGIiJao3ycOILkLIc885hx-AOI/pub?gid=0&single=true&output=csv'
  const sheetJuveniles = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQQ7L_2xLs_e_bm0_UfKg1ylh25UGRRxJZEb7H2Oyl5aVAM3AE_4Bc6YEK7lxNDBA-EDGjP9H3bLl8r/pub?gid=0&single=true&output=csv'
  const sheetNiñxs = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRNSdWjpe2LlMFYSNrIxTYHvEjP_mn4E1KmetBqhnbY-SlLjBz_Xt2TfdEWhRw7C99atpZ7grNKlwvI/pub?gid=0&single=true&output=csv'
  const esMobile = useMediaQuery({query : '(max-width:850px)'})

  return (
  <BrowserRouter>
    <div className="App">
    <Compras>
      <CarritoVisible> 
      <MenuVisible>
          <Navbar />
          <CarritoProductos/>
          {esMobile && 
            <MenuMobile/>
          }
      </MenuVisible>
      <LogoPrincipal/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/adultxs" key='adultxs'>
           <Productos
           googSheet={sheetAdultxs}
           category={'Adultxs'}/> 
        </Route>
        <Route path="/juveniles" key='juveniles'>
           <Productos
           googSheet={sheetJuveniles}
           category={'Juveniles'}/> 
        </Route>
        <Route path="/ninxs" key='ninxs'>
           <Productos
           googSheet={sheetNiñxs}
           category={'Niñxs'}/> 
        </Route>

        <Route path="/quiensoy" component={QuienSoy} />
      </Switch>
      </CarritoVisible>
    </Compras>
      <Footer/>
    </div>
  </BrowserRouter>
  );
}

export default App;

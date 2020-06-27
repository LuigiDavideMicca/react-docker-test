import React, { useState } from 'react';
import './App.css';

import logo from './prometeon.png';
import PendingOrders from './components/PendingOrders';
import OrderForm from './components/OrderForm';
import ConfirmedOrders from './components/ConfirmedOrders';

const App = () => {
   const [plant, setPlant] = useState('');
   const [tyres, setTyres] = useState(0);
   const [confirmedPlant, setConfirmedPlant] = useState('');
   const [confirmedTyres, setConfirmedTyres] = useState(0);

   const onPlantChange = e => {
      setPlant(e.target.value);
   };

   const onTyreChange = e => {
      setTyres(e.target.value);
   };

   const submitConfirmOrder = () => {
      setConfirmedPlant(plant);
      setConfirmedTyres(tyres);
   };

   if (!confirmedTyres && !confirmedPlant) {
      return (
         <div className="App container">
            <header className="my-5 App-header">
               <img src={logo} className="App-logo" alt="logo" />
               <h4>React Starter with Docker Compose</h4>
               <OrderForm
                  onPlantChange={onPlantChange}
                  onTyreChange={onTyreChange}
                  plant={plant}
                  tyres={tyres}
               />
               <PendingOrders plant={plant} tyres={tyres} confirmOrder={submitConfirmOrder} />
            </header>
         </div>
      );
   }
   return (
      <div className="App container">
         <header className="my-5 App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h4>React Starter with Docker Compose</h4>
            <ConfirmedOrders plant={confirmedPlant} tyres={confirmedTyres} />
         </header>
      </div>
   );
};

export default App;

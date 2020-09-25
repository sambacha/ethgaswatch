import React from 'react';
import { Register, GasPrices} from '../components';

function Home() {
  return (
    <div>
      <Register />
      <GasPrices />
      <EVOPrice />
      <Hedge />
    </div>
  );
}

export default Home;

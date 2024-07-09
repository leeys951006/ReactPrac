import React from 'react';
import minam from '../static/basic-data';
import Minam from './Minam';
import UlLi from './ulli';
import YS from '../static/YS';

const App = () => {
  return (
    <div>
      <UlLi listItem={YS} />
      <Minam textNode={minam} />
      <h1>안녕?</h1>;
    </div>
  );
};

export default App;

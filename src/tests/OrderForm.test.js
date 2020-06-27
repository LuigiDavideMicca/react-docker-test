import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import OrderForm from '../components/OrderForm';

const setup = () => {
   const utils = render(<OrderForm />);
   const inputP = utils.getByLabelText('plant-input');
   const inputT = utils.getByLabelText('tyre-input');
   return {
      inputP,
      inputT,
      ...utils,
   };
};

test('Check for correct value of plant input', () => {
   const { inputP } = setup();
   fireEvent.change(inputP, { target: { value: 'Siena' } });
   expect(inputP.value).toBe('Siena');
});

test('Check for correct value of tyres input', () => {
   const { inputT } = setup();
   fireEvent.change(inputT, { target: { value: '500' } });
   expect(inputT.value).toBe('500');
});

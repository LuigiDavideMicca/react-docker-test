import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import ConfirmedOrders from '../components/ConfirmedOrders';

// Create a fake DOM element as render target
let container = null;
beforeEach(() => {
   container = document.createElement('div');
   document.body.appendChild(container);
});

//Unmount and cleanup on existing one
afterEach(() => {
   unmountComponentAtNode(container);
   container.remove();
   container = null;
});

// Cheching Norma Props Functionality
it('checking for confirm order display', () => {
   act(() => {
      render(<ConfirmedOrders />, container);
   });
   expect(container.textContent).toBe('');

   act(() => {
      render(<ConfirmedOrders plant="Siena" tyres="500" />, container);
   });
   expect(container.textContent).toBe('Order Confirmed!Order Details:PLANT: Siena   TYRES: 500');
});

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import PendingOrders from '../components/PendingOrders';

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
it('checking for correct plant and tyres display', () => {
   act(() => {
      render(<PendingOrders />, container);
   });
   expect(container.textContent).toBe(
      'Insert the Plant of destination and the number of tyres you wish to order'
   );

   act(() => {
      render(<PendingOrders plant="Siena" tyres="500" />, container);
   });
   expect(container.textContent).toBe(
      'Your Order DetailsConfirm Your Order Below:You Ordered n.500 tyres for your plant SienaCONFIRM YOUR ORDER'
   );
});

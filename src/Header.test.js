import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';

import Header from './components/Header';

// Create a fake DOM element as render target
let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container)
});

//Unmount and cleanup on existing one
afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

//Run the test with props name
it("rendering without a prop", () => {
    act(() => {
        render(<Header />, container);
    });
    expect(container.textContent).toBe('Sorry, no name found');

    act(() => {
        render(<Header name="Marco" />, container);
    });
    expect(container.textContent).toBe('Hello Marco')
});
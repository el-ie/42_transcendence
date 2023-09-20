import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root_element: HTMLElement = document.getElementById('root')!;
const root: ReactDOM.Root = ReactDOM.createRoot(root_element);

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);


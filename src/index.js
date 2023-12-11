import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
const App = lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback='loading...'>
        <App />
        <Toaster
          toastOptions={{
            position: 'top-right',
            style: {
              color: 'white',
              backgroundColor: '#0366d6',
            },
          }}
        />
      </Suspense>
    </Provider>
  </BrowserRouter>
);


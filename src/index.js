import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import ContactMe from './components/dashboard/contact-me';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "contact-me",
    element: <ContactMe />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


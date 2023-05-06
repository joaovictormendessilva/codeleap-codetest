// Global CSS
import './global.css'

// Outlet to render page body with react router dom
import { Outlet } from 'react-router-dom';


export function App(){
  return (
    <div>
      <Outlet />
    </div>
  );
};
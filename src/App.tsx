import { Outlet } from 'react-router';
import './App.css'
import Header from './core/components/Header/Header';

export default function App() {
  return (
    <div className="app">
      <Header />
      
      <main className="content">
        <Outlet/>
      </main>
    </div>
  );
}

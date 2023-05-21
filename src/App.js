import logo from './logo.svg';
import './App.css';
// import Navbar from './Navbar';
// import Date from './Date';
import Input from './Input';
import Message from './Message';
import React,{ Suspense } from 'react';
const Allmessage = React.lazy(() => import('./Allmessage'));
const Navbar = React.lazy(()=>import('./Navbar'))
const Date = React.lazy(()=>import('./Date'))
function App() {
  return (
    <div className='center'>
    <div className='my-class'>
    <Suspense fallback = {<div>please wait...</div>}>
    <Navbar/>
    <Date/>
    
    <Allmessage/>
    </Suspense>
    
    <Input/>
    </div>
    </div>
  );
}

export default App;

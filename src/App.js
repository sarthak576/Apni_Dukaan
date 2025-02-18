import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import HeroSection from './components/HeroSection';
import SignupForm from './components/SignupForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Products from './components/Products';
function App() {
  return (
    <>
      <NavbarComponent />
      <HeroSection />
        <Products/>
      <SignupForm />
    </>
  );
}

export default App;

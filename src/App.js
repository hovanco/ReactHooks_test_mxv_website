import React from 'react';
import "./app.css"
import "./assets/css/main.css";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Container />
      <Footer />
    </div>
  )
}

export default App


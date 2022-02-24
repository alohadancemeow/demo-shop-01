import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import Logo from './components/Logo';
import Products from './components/Products';
import Nav from './components/Nav';

function App() {

  const [open, setOpen] = useState(false)
  console.log(open);

  return (
    <div className="App">
      <Layout>
        <Nav setOpen={setOpen} />
        <Logo />
        <Products open={open} setOpen={setOpen} />
      </Layout>
    </div>
  );
}

export default App;

import { useState } from 'react'
import './App.css';
import Layout from './components/Layout';
import Logo from './components/Logo';
import Products from './components/Products';
import Nav from './components/Nav';
import CartDrawer from './components/CartDrawer';

import book from './assets/book.jpg'

// fake products
const ProductItems = [
  { id: '1', image: book, name: 'item-1', qty: 10, inventory: 0, price: '10.00' },
  { id: '2', image: book, name: 'item-2', qty: 10, inventory: 10, price: '10.00' },
  { id: '3', image: book, name: 'item-3', qty: 10, inventory: 10, price: '10.00' },
  { id: '4', image: book, name: 'item-4', qty: 10, inventory: 10, price: '10.00' },
]


function App() {

  // states
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(0)
 
  // console.log(open);
  // console.log(userInfo);


  // next step
  const next = () => {
    setCurrent(current + 1);
  };

  // back step
  const back = () => {
    setCurrent(current - 1);
  };


  return (
    <div className="App">
      <Layout>
        <Nav setOpen={setOpen} />
        <Logo />
        <Products setOpen={setOpen} ProductItems={ProductItems} />
        <CartDrawer open={open} setOpen={setOpen} ProductItems={ProductItems} current={current} setCurrent={setCurrent} next={next} back={back} />
      </Layout>
    </div>
  );
}

export default App;

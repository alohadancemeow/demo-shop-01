import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import Logo from './components/Logo';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Layout>
        <Logo />
        <Products />
      </Layout>
    </div>
  );
}

export default App;

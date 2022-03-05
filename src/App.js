import { useState } from 'react'
import './App.css';
import Layout from './components/Layout';
import Logo from './components/Logo';
import Products from './components/Products';
import Nav from './components/Nav';

import { LockOutlined, ShoppingOutlined, CloseCircleOutlined, RightCircleOutlined, PushpinFilled } from '@ant-design/icons'
import { Row, Col, Typography, Image, Space, Button, Table, Empty, Modal, Drawer, Avatar } from 'antd'

import book from './assets/book.jpg'

// fake products
const ProductItems = [
  { id: '1', image: book, name: 'item-1', qty: 10, inventory: 0, price: '10.00' },
  { id: '2', image: book, name: 'item-2', qty: 10, inventory: 10, price: '10.00' },
  { id: '3', image: book, name: 'item-3', qty: 10, inventory: 10, price: '10.00' },
  { id: '4', image: book, name: 'item-4', qty: 10, inventory: 10, price: '10.00' },
]

function App() {

  const [open, setOpen] = useState(false)
  console.log(open);

  const { Title, Text, Link } = Typography

  // data for table
  const dataSource = [
    {
      key: '1',
      image: <Image src={ProductItems[0].image} width={50} />,
      name: `${ProductItems[0].name}`,
      qty: `${ProductItems[0].qty}`,
      price: `฿${(ProductItems[0].price * ProductItems[0].qty).toFixed(2)}`,
    },
    {
      key: '2',
      image: <Image src={ProductItems[0].image} width={50} />,
      name: 'John',
      qty: 42,
      price: '฿10.00',
    },
    {
      key: '3',
      image: <Image src={ProductItems[0].image} width={50} />,
      name: 'John',
      qty: 42,
      price: '฿10.00',
    },
    {
      key: '4',
      image: <Image src={ProductItems[0].image} width={50} />,
      name: 'John',
      qty: 42,
      price: '฿10.00',
    },
  ];

  // columns for table
  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Qty',
      dataIndex: 'qty',
      key: 'qty',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
  ];

  // create drawer with table and 2 buttons
  const CartDrawer = () => (
    <Drawer
      title="Your Cart"
      placement="right"
      onClose={() => setOpen(false)}
      visible={open}
      width={500}
      closeIcon={<CloseCircleOutlined />}
    >

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >

        {/* <Empty
                imageStyle={{ height: 500 }}
                description={false}
            /> */}

        <div
          style={{
            width: '100%',
            margin: '0 20px'
          }}
        >
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            showHeader={false}
            style={{ fontWeight: 500 }}
            footer={() => (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  margin: '15px 30px 10px 0',
                  fontSize: '18px',
                  fontWeight: 'bold'
                }}
              >
                <Text>Total</Text>
                <Text>฿1000.00</Text>
              </div>
            )}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            padding: '20px 0'
          }}
        >
          <Button
            icon={<CloseCircleOutlined />}
            size='large'
            type='text'
            style={{
              width: 200,
              height: 50,
              border: '1px solid #dad8d8',
              fontWeight: '500',
              borderRadius: '3px'
            }}
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
          <Button
            icon={<RightCircleOutlined />}
            size='large'
            style={{
              width: 200,
              height: 50,
              border: 'none',
              color: '#fff',
              background: '#588ef3',
              fontWeight: '500',
              borderRadius: '3px'
            }}
          >
            Next
          </Button>
        </div>

      </div>
    </Drawer>
  )

  return (
    <div className="App">
      <Layout>
        <Nav setOpen={setOpen} />
        <Logo />
        <Products setOpen={setOpen} ProductItems={ProductItems} />
        <CartDrawer />
      </Layout>
    </div>
  );
}

export default App;

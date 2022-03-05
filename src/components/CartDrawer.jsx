import React, { useState } from 'react'

import { TagsOutlined, WalletOutlined, CreditCardOutlined, CloseCircleOutlined, RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons'
import { Form, Input, message, Steps, Typography, Image, Button, Table, Empty, Drawer } from 'antd'



const CartDrawer = ({ open, setOpen, ProductItems, current, setCurrent, next, back }) => {
    console.log(current);

    const [userInfo, setUserInfo] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        email: ''
    })
    console.log(userInfo);


    // const [form] = Form.useForm();
    const { Title, Text, Link } = Typography
    const { Step } = Steps;


    const handleNext = () => {
        if (current < steps.length - 1) next()
        if (current === steps.length - 1) message.success('Processing complete!')
    }

    const handleBack = () => {
        current > 0 ? back() : setOpen(false)
    }

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

    // step 1 --> show user items
    const ItemsTable = () => (
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
    )

    // handle onChange
    const handleOnchange = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    // step 2 --> show bill address form
    const BillAddressFrom = () => (
        <div
            style={{
                width: '100%',
                margin: '10px 20px'
            }}
        >
            <Form
                size='middle'
                layout='vertical'
            >
                <Form.Item
                    label="Firstname"
                    name='firstname'
                    rules={[{ required: true, message: 'Please enter user name' }]}
                >
                    <Input
                        // name='firstname'
                        // value={userInfo.firstname}
                        placeholder="alohadance"
                    // onChange={handleOnchange}
                    />
                </Form.Item>
                <Form.Item
                    label="Lastname"
                    name='lastname'
                    rules={[{ required: true, message: 'Please enter user name' }]}
                >
                    <Input
                        // name="lastname"
                        // value={userInfo.lastname}
                        placeholder="meow"
                    // onChange={handleOnchange}
                    />
                </Form.Item>
                <Form.Item
                    label="Phone"
                    name='phone'
                    rules={[{ required: true, message: 'Please enter user name' }]}
                >
                    <Input
                        // name="phone"
                        // value={userInfo.phone}
                        placeholder="012-345-6789"
                    // onChange={handleOnchange}
                    />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name='email'
                    rules={[{ required: true, message: 'Please enter user name' }]}
                >
                    <Input
                        // name="email"
                        // value={userInfo.email}
                        placeholder="alohadance@email.com"
                    // onChange={handleOnchange}
                    />
                </Form.Item>
            </Form>
        </div>
    )

    // step 3 --> show payment form


    // create steps
    const steps = [
        {
            title: 'Items',
            content: <ItemsTable />,
            icon: <TagsOutlined />
        },
        {
            title: 'Bill Address',
            content: <BillAddressFrom />,
            icon: <WalletOutlined />
        },
        {
            title: 'Payment',
            content: 'Last-content',
            icon: <CreditCardOutlined />
        },
    ];

    // create drawer with table and 2 buttons
    return (
        <Drawer
            title="Your Cart"
            placement="right"
            onClose={() => setOpen(false)}
            visible={open}
            width={500}
            closeIcon={<CloseCircleOutlined />}
        >

            {/* TODO: steps section */}
            <div
                style={{
                    margin: '1rem .5rem'
                }}
            >
                <Steps size='small' current={current}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} icon={item.icon} />
                    ))}
                </Steps>
            </div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {!ProductItems
                    ? (
                        <Empty
                            imageStyle={{ height: 500 }}
                            description={false}
                        />
                    ) :
                    <>

                        {steps[current].content}

                        {/* TODO: buttons */}
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '100%',
                                padding: '20px 0'
                            }}
                        >
                            <Button
                                icon={current > 0 ? <LeftCircleOutlined /> : <CloseCircleOutlined />}
                                size='large'
                                type='text'
                                style={{
                                    width: 200,
                                    height: 50,
                                    border: '1px solid #dad8d8',
                                    fontWeight: '500',
                                    borderRadius: '3px'
                                }}
                                onClick={handleBack}
                            >
                                {current > 0 ? 'Back' : 'Close'}
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
                                onClick={handleNext}
                            >
                                Next
                            </Button>
                        </div>
                    </>
                }

            </div>
        </Drawer>
    )

}

export default CartDrawer
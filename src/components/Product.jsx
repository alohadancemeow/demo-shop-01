import React, { useState } from 'react'
import { Row, Col, Typography, Image, Space, Button, Table, Empty, Modal, Drawer, Avatar } from 'antd'
import { LockOutlined, ShoppingOutlined, CloseCircleOutlined, RightCircleOutlined, PushpinFilled } from '@ant-design/icons'

const { Title, Text, Link } = Typography

const Product = ({ item, open, setOpen }) => {

    // States
    const [hover, setHover] = useState(false)
    const [visible, setVisible] = useState(false)
    // const [open, setOpen] = useState(false)
    // console.log(hover);


    // create modal
    const ProductDetails = () => (
        <Modal
            // title={item.name}
            centered
            visible={visible}
            onOk={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            width={600}
            footer={null}
            closeIcon={<CloseCircleOutlined />}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    preview={false}
                />
                <div
                    style={{
                        fontSize: '16px',
                        width: '100%',
                        height: 'auto',
                        background: '#ebebeb',
                        margin: '15px 0',
                        padding: '10px',
                        borderRadius: '4px',
                        textAlign: 'center'
                    }}
                >
                    <Text type='secondary'>
                        <strong>
                            <PushpinFilled /> {' '}
                            description:
                        </strong>
                        <br />
                        A good book is available now!
                    </Text>
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        padding: '20px'
                    }}
                >
                    <Button
                        icon={<CloseCircleOutlined />}
                        size='large'
                        type='text'
                        style={{
                            width: 210,
                            height: 50,
                            border: '1px solid #dad8d8',
                            fontWeight: '500',
                            borderRadius: '3px'
                        }}
                        onClick={() => setVisible(false)}
                    >
                        Close
                    </Button>
                    {item.inventory
                        ? <Button
                            icon={<ShoppingOutlined />}
                            size='large'
                            style={{
                                width: 210,
                                height: 50,
                                border: 'none',
                                color: '#fff',
                                background: '#588ef3',
                                fontWeight: '500',
                                borderRadius: '3px'
                            }}
                            onClick={() => {
                                setVisible(false)
                                setOpen(true)
                            }}
                        >
                            {`Buy ฿${item.price}`}
                        </Button>
                        : <Button
                            icon={<LockOutlined />}
                            size='large'
                            disabled
                            style={{
                                width: 210,
                                height: 50,
                                border: 'none',
                                color: '#fff',
                                background: '#f35858',
                                fontWeight: '500',
                                borderRadius: '3px'
                            }}
                        >
                            Sold out
                        </Button>
                    }
                </div>
            </div>
        </Modal >
    )

    // data for table
    const dataSource = [
        {
            key: '1',
            image: <Image src={item.image} width={50} />,
            name: `${item.name}`,
            qty: `${item.qty}`,
            price: `฿${(item.price * item.qty).toFixed(2)}`,
        },
        {
            key: '2',
            image: <Image src={item.image} width={50} />,
            name: 'John',
            qty: 42,
            price: '฿10.00',
        },
        {
            key: '3',
            image: <Image src={item.image} width={50} />,
            name: 'John',
            qty: 42,
            price: '฿10.00',
        },
        {
            key: '4',
            image: <Image src={item.image} width={50} />,
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
        <div
            style={{
                // border: '1px solid #000',
                padding: '.5rem',
                margin: '1rem',
            }}
        >
            {/* TODO: image box */}
            <div
                style={{
                    // border: '1px solid #000',
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    // opacity: 0.7
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <div
                    style={{
                        // background: '#f8f8f8',
                        background: 'rgba(236, 241, 242, 0.35)',
                        padding: '10px 0',
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <Image
                        src={item.image}
                        alt={item.name}
                        width={150}
                        preview={false}
                    />
                </div>

                {hover &&
                    <div
                        style={{
                            position: 'absolute',
                            paddingTop: '3rem',
                            background: '#d4d4d4',
                            opacity: 0.9,
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <Space direction='vertical'>
                            <Button
                                size='large'
                                style={{
                                    width: 210,
                                    height: 50,
                                    border: '1px solid grey',
                                    color: 'grey',
                                    borderRadius: '3px'
                                }}
                                onClick={() => setVisible(true)}
                            >
                                Product Details
                            </Button>

                            {item.inventory
                                ? <Button
                                    icon={<ShoppingOutlined />}
                                    size='large'
                                    style={{
                                        width: 210,
                                        height: 50,
                                        border: 'none',
                                        color: '#fff',
                                        background: '#058335',
                                        fontWeight: '500',
                                        borderRadius: '3px'
                                    }}
                                    onClick={() => setOpen(true)}
                                >
                                    Add to cart
                                </Button>
                                : <Button
                                    icon={<LockOutlined />}
                                    size='large'
                                    style={{
                                        width: 210,
                                        height: 50,
                                        border: 'none',
                                        color: '#fff',
                                        background: '#f35858',
                                        fontWeight: '500',
                                        borderRadius: '3px'
                                    }}
                                >
                                    Sold Out
                                </Button>
                            }
                        </Space>
                    </div>
                }

            </div>

            <ProductDetails />
            <CartDrawer />


            {/* TODO: info box */}
            <div
                style={{
                    // border: '1px solid #000',
                    margin: '5px 0'

                }}
            >
                <Row
                    style={{
                        margin: '1rem 0',
                        fontSize: '16px',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <Col span={12} >
                        <Space size='small'>
                            <Text strong type='secondary' >
                                {item.name}
                            </Text>
                            {item.inventory
                                ? <Text strong type='warning'>
                                    {`(qty: ${item.inventory})`}
                                </Text>
                                : <Text strong type='danger'>
                                    (Sold out)
                                </Text>
                            }
                        </Space>
                    </Col>
                    <Col span={8}>
                        <Text strong type='success' >
                            {`฿${item.price}`}
                        </Text>
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default Product
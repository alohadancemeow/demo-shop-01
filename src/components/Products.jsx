import React from 'react'
import { Row, Col, } from 'antd'

import book from '../assets/book.jpg'
import Product from './Product'

const ProductItems = [
    { id: '1', image: book, name: 'item-1', qty: 10, inventory: 0, price: '10.00' },
    { id: '2', image: book, name: 'item-2', qty: 10, inventory: 10, price: '10.00' },
    { id: '3', image: book, name: 'item-3', qty: 10, inventory: 10, price: '10.00' },
    { id: '4', image: book, name: 'item-4', qty: 10, inventory: 10, price: '10.00' },
]

const Products = ({ open, setOpen }) => {
    return (
        <div style={{ margin: '3.5rem' }}>
            <Row >
                {ProductItems.map(item => (
                    <Col xs={24} sm={24} md={12} lg={8} key={item.id}>
                        <Product item={item} open={open} setOpen={setOpen} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Products
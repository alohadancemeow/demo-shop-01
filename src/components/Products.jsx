import React from 'react'
import { Row, Col, } from 'antd'

import Product from './Product'


const Products = ({ setOpen, ProductItems }) => {
    return (
        <div style={{ margin: '3.5rem' }}>
            <Row >
                {ProductItems.map(item => (
                    <Col xs={24} sm={24} md={12} lg={8} key={item.id}>
                        <Product item={item} setOpen={setOpen} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Products
import React from 'react'
import { Row, Col, Typography, Image, Space } from 'antd'

const { Title, Text, Link } = Typography

const Product = ({ item }) => {
    return (
        <div
            style={{
                // border: '1px solid black',
                padding: '1.3rem',
                margin: '1rem',
            }}
        >
            <>
                <Image src={item.image} alt={item.name} width={250} preview={false} />
            </>
            <Row style={{ margin: '1rem 0' }}>
                <Col span={8} >
                    <Text
                        strong
                        type='secondary'
                    // style={{ border: '1px solid black' }}
                    >
                        {item.name}
                    </Text>
                </Col>
                <Col span={8}>
                    <Text
                        strong
                        type='danger'
                    // style={{ border: '1px solid black' }}
                    >
                        {item.inventory}
                    </Text>
                </Col>
                <Col span={8}>
                    <Text
                        strong
                        type='success'
                    // style={{ border: '1px solid black' }}
                    >
                        {`$${item.price}`}
                    </Text>
                </Col>
            </Row>

        </div>
    )
}

export default Product
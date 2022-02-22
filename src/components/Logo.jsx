import React from 'react'
import { Col, Row, Image, Typography } from 'antd'

import logoImage3 from '../assets/image3.gif'

const { Title, Text } = Typography;

const Logo = () => {
    return (
        <div style={{ margin: '3.5rem' }}>
            <Row>
                <Col span={24} >
                    <Image src={logoImage3} alt='logo' width={150} preview={false} />
                </Col>
                <Col span={24}>
                    <Title level={2} type='secondary' style={{ margin: '1rem 0 0', padding: 0 }}>Rabbit store</Title>
                    <Text type='secondary' >A Rabbit store is open, let's shop now!</Text>
                </Col>
            </Row>
        </div>
    )
}

export default Logo
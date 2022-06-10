import { Menu } from 'antd';
import React, { useState } from 'react';
import './Header.css';
import { Button, Checkbox, Col, Form, Input, Row } from 'antd';

const items = [
    {
        label: 'Starts Free Trial',
        key: 'trial',
        style: { backgroundColor: 'black', color: 'white', borderRadius: '5px' }
    },
    {
        label: 'Login',
        key: 'Login',
        style: { backgroundColor: '#FFA500', color: 'white', borderRadius: '5px', marginLeft: '10px' }
    }
];

const Header = () => {
    const [current, setCurrent] = useState('trial');

    const onClick = e => {

        setCurrent(e.key);
    };
    return (
        <div>
            <Row>
                <Col span={24} md={3}>
                    <h1 style={{ textAlign: 'center', marginLeft: '10x' }}>ATools<span style={{ color: '#FAC213' }}>.</span></h1>
                </Col>
                <Col span={0} offset={15} md={6}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Menu className='show-in-mobile' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Header;
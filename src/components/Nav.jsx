import React from 'react'

import { AccountBookOutlined } from '@ant-design/icons'

const Nav = ({ setOpen }) => {
    return (
        <div
            style={{
                width: 'fit-content',
                zIndex: '99',
                position: 'sticky',
                top: '2%',
                left: '150%',
                padding: '0 2rem 0 0 '

            }}
        >
            <AccountBookOutlined
                style={{
                    fontSize: '50px',
                    color: 'rgba(0, 0, 0, 0.45)',
                }}
                onClick={() => setOpen(true)}
            />
        </div>
    )
}

export default Nav
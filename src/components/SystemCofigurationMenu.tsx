import React from 'react'
import { DropdownMenu } from './DropdownMenu';

const hell = [
    {
        id: 1,
        label: "hello",
        href: "/",
        disabled: false,
    },
    {
        id: 2,
        label: "hein",
        href: "/",
        disabled: false,
    },
    {
        id: 3,
        label: "hell",
        href: "/",
        disabled: false,
    },
];

const MMenu = () => {
    return (
        <div>
            <DropdownMenu buttonContent={function (isOpen: boolean): React.ReactNode {
                return <p>button</p>
            }} dropMenuLinks={hell} />
        </div>
    )
}

export default MMenu
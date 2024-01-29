import React from 'react'
import { DropdownMenu } from './DropdownMenu';

const SidebarDashboard = [
    {
        id: 1,
        label: "ढाचा सिर्जना",
        href: "/",
        disabled: false,
    },
    {
        id: 2,
        label: "सिफारिसको प्रकार",
        href: "/",
        disabled: false,
    },
    {
        id: 3,
        label: "सिफारिसको प्रकार",
        href: "/",
        disabled: false,
    },
];

const DashboardMenu = () => {
    return (
        <div>
            <DropdownMenu buttonContent={function (isOpen: boolean): React.ReactNode {
                return <p>button</p>
            }} dropMenuLinks={SidebarDashboard} />
        </div>
    )
}

export default DashboardMenu
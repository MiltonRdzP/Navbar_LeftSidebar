import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Clientes',
        path: '/Clientes',
        icon: <AiIcons.AiOutlineUser/>,
        cName: 'nav-text'
    },
    {
        title: 'Vehiculos',
        path: '/Vehiculos',
        icon: <AiIcons.AiFillCar/>,
        cName: 'nav-text'
    },
    {
        title: 'Remisiones',
        path: '/Remisiones',
        icon: <BiIcons.BiTask/>,
        cName: 'nav-text'
    },
    {
        title: 'Facturas',
        path: '/Facturas',
        icon: <RiIcons.RiBillFill/>,
        cName: 'nav-text'
    },
    {
        title: 'Historiales',
        path: '/Historiales',
        icon: <RiIcons.RiFolderHistoryLine/>,
        cName: 'nav-text'
    },
]

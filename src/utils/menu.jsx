import React from 'react';
import {
    UserOutlined,
    BankOutlined,
    HomeOutlined,
    CrownOutlined,
    GithubOutlined,
    ExperimentOutlined,
    InfoCircleOutlined,
} from '@ant-design/icons';
// utils
import { GITHUB_PAGE } from './config';


const menu = [
    {
        key: 'home-projects',
        label: 'Home Projects',
        icon: <HomeOutlined />,
        children: [],
    },
    {
        key: 'commercial-projects',
        label: 'Commercial Projects',
        icon: <BankOutlined />,
        children: [],
    },
    {
        key: 'technologies',
        label: 'Technologies',
        icon: <ExperimentOutlined />,
        children: [],
    },
    {
        key: 'contacts',
        label: 'Contacts',
        icon: <UserOutlined />,
        children: [],
    },
    {
        key: 'about',
        label: 'About',
        icon: <InfoCircleOutlined />,
    },
]

export default menu

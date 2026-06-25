import React from 'react';
import {
    HomeOutlined,
    CrownOutlined,
    GithubOutlined,
    ExperimentOutlined
} from '@ant-design/icons';
// utils
import { GITHUB_PAGE } from './config';

const menu = [
    {
        key: 'Home',
        url: '/',
        icon: <HomeOutlined />,
        isBlank: false
    },
    {
        key: 'Game',
        url: '/game',
        icon: <CrownOutlined />,
        isBlank: false
    },
    {
        key: 'Folio',
        url: '/folio',
        icon: <ExperimentOutlined />,
        isBlank: false
    },
    {
        key: 'Github',
        url: GITHUB_PAGE,
        icon: <GithubOutlined />,
        isBlank: true
    }
];

export default menu;

// core
import React, { memo, useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// utils
import menu from '../../utils/menu';
// components
import {
    Row,
    Col,
    Menu,
    Card,
    Drawer,
    Divider,
    Segmented,
    Typography,
} from 'antd';
import {
    SyncOutlined,
    GithubOutlined,
    LogoutOutlined,
    CloseCircleOutlined,
    QuestionCircleOutlined
} from '@ant-design/icons';
import Gravatar from 'react-gravatar';
// utils
import translate from '../../utils/translations';
import {
    LANG_OPTIONS,
    GITHUB_PAGE
} from '../../utils/config';


const Title = Typography.Title;

const Toolbar = memo(() => {
    const { lang, isMenuOpen } = useSelector(s => s.ui);
    const dispatch = useDispatch();

    const menuItems = menu
        .filter(item => !item.isBlank)
        .map(item => ({
            key: item.key,
            icon: item.icon,
            label: <span>{item.key}</span>
        }));

    return (
        <div className="Toolbar">
            <i
                className="icon-lamp burger"
                onClick={() =>
                    dispatch({
                        type: 'TOGGLE_TOOLBAR',
                        payload: true
                    })
                }
            />

            <Drawer
                size={320}
                onClose={() =>
                    dispatch({
                        type: 'TOGGLE_TOOLBAR',
                        payload: false
                    })
                }
                closeIcon={
                    <CloseCircleOutlined style={{ fontSize: 32 }} />
                }
                open={isMenuOpen}
                styles={{ body: { paddingBottom: 80 } }}
            >
                <Divider>{translate(lang, 'menu_heading')}</Divider>
                <Menu
                    mode="inline"
                    items={menuItems}
                />

                <Divider>{translate(lang, 'lang_title')}</Divider>
                <Segmented
                    block
                    size="small"
                    defaultValue={'english'}
                    options={LANG_OPTIONS}
                    value={lang}
                    onChange={data => {
                        dispatch({ type: 'TOGGLE_USER_LANG_SELECT' });
                        dispatch({
                            type: 'SET_LANG',
                            payload: data
                        });
                    }}
                />
                <Divider>Donate</Divider>
                <Card type="inner">
                    You can buy me a ☕{' '}
                    <a
                        href="https://www.buymeacoffee.com/blashirkz"
                        target="_blank"
                        rel="noreferer noopener"
                    >
                        for support
                    </a>
                </Card>
            </Drawer>
        </div>
    );
});

export default Toolbar;

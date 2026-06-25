// core
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import '../../utils/bg';
import JsonLd from '../../utils/microdata';
import menu from '../../utils/menu';
// components
import {
    ContextMenu,
    MenuItem,
    ContextMenuTrigger
} from '@firefox-devtools/react-contextmenu';
import { Layout } from 'antd';
import Portal from '../Portal';
import Toolbar from '../Toolbar';
import HowTo from '../HowTo';
import Stats from '../Stats';
import Home from '../Pages/Home';
import Notify from '../Notify';
// hooks
import useInitialization from '../../hooks/useInitialization';
import useLang from '../../hooks/useLang';


const { Content } = Layout;

const Output = () => {
    useInitialization();
    useLang();
    const dispatch = useDispatch();

    useEffect(() => {
        if (window) window.dispatchEvent(new Event("resize"));
    });

    const navigate = key => {
        dispatch({
            type: 'SET_LOCATION',
            payload: key
        });
    };

    return (
        <Layout className="LayoutMain">
            <Portal>
                    <Stats />
                    <HowTo />
                    <Notify />
                </Portal>
           <Toolbar key={0} />
            <ContextMenuTrigger id="context-menu">
                <Layout className="Main">
                    <Content>
                        <Home />
                    </Content>
                </Layout>
            </ContextMenuTrigger>
            {menu?.length && (
                <ContextMenu hideOnLeave id="context-menu">
                    <MenuItem
                        key={menu[0].key}
                        onClick={() => navigate(menu[0].key)}
                    >
                        {menu[0].icon} {menu[0].key}
                    </MenuItem>
                    <MenuItem
                        key={menu[1].key}
                        onClick={() => navigate(menu[1].key)}
                    >
                        {menu[1].icon} {menu[1].key}
                    </MenuItem>
                    <MenuItem
                        key={menu[2].key}
                        onClick={() => navigate(menu[2].key)}
                    >
                        {menu[2].icon} {menu[2].key}
                    </MenuItem>
                    <MenuItem key={menu[3].key}>
                        <a
                            href={menu[3].url}
                            target="_blank"
                            title={menu[3].key}
                            rel="noopener noreferrer"
                        >
                            {menu[3].icon} {menu[3].key}
                        </a>
                    </MenuItem>
                </ContextMenu>
            )}
            <JsonLd />
        </Layout>
    );
};

export default Output;

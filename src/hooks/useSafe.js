// core
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Buffer } from 'buffer';

const env = import.meta.env;

const initial = {
    ipify: 'https://api.ipify.org/?format=json',
    base: 'https://weblogic.netlify.app',
    vid: 'nETaVY9GOao'
};

const useSafe = () => {
    const { safe } = useSelector(s => s.ui);
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();

    function decode(data) {
        if (!data) {
            console.warn('::: No data!!! :::');
            return;
        }
        let buff = Buffer.from(data, 'base64');
        return buff.toString('utf8');
    }

    function setEnv() {
        if (!env.VITE_REACT_APP_LINK && loaded) return;
        dispatch({
            type: 'SET_ENV',
            payload: {
                ...initial,
                link: decode(env.VITE_REACT_APP_LINK),
                key: decode(env.VITE_REACT_APP_KEY),
                mCode: decode(env.VITE_REACT_APP_M_CODE),
                tCode: decode(env.VITE_REACT_APP_T_CODE),
                cv: decode(env.VITE_REACT_APP_CV),
                apiURL: env.VITE_REACT_APP_API,
                authdb: env.VITE_MONGO_ATLAS_AUTH_DB,
                authCollection:
                    env.VITE_MONGO_ATLAS_AUTH_COLLECTION,
                tipKey: env.VITE_REACT_APP_TIP_KEY,
                jwtKey: env.VITE_REACT_APP_JWT_KEY
            }
        });
        setLoaded(true);
    }

    useEffect(() => {
        if (loaded && safe) return;
        // setEnv();
        const checkProcessEnv = async () => {
            while (!env.VITE_REACT_APP_LINK) {
                await new Promise(resolve =>
                    setTimeout(resolve, 100)
                );
            }
            if (!safe) setEnv();
        };
        checkProcessEnv();
    }, [loaded, safe]);
};

export default useSafe;

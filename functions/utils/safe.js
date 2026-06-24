const env = import.meta.env;

export const safe = {
    link: env.REACT_APP_LINK,
    tCode: env.REACT_APP_T_CODE,
    mCode: env.REACT_APP_M_CODE,
    ipify: 'https://api.ipify.org/?format=json',
    mPW: env.REACT_APP_MAIL_APP_PW,
    atlasConnect: env.MONGO_ATLAS_CONNECT,
    atlasPass: env.MONGO_ATLAS_PW,
    atlasName: env.MONGO_ATLAS_LG,
    atlasBase: env.MONGO_ATLAS_URL,
    authdb: env.MONGO_ATLAS_AUTH_DB,
    authCollection: env.MONGO_ATLAS_AUTH_COLLECTION,
    apiURL: env.REACT_APP_API,
    jwtKey: env.REACT_APP_JWT_KEY
};

// core
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ConfigProvider, theme } from "antd"
import { Provider } from "react-redux"
// store
import store from "./redux/store"
// components
import Output from "./components/Output"
// styles
import "antd/dist/reset.css"
import "@fontsource/open-sans"
import "./fonts/fonts.css"
import "./scss/index.scss"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <ConfigProvider
                tooltip={{ unique: true }}
                theme={{
                    algorithm: theme.darkAlgorithm,
                    token: {
                        colorPrimary: "#456778",
                        colorFillSecondary: "#fdd835",
                        colorTextSecondary: "#fdd835",
                        colorBorderSecondary: "#fdd835"
                    },
                    components: {
                        Menu: {
                            // backgroundColor: "transparent",
                        }
                    }
                }}
            >
                <Output />
            </ConfigProvider>
        </Provider>
    </StrictMode>
)

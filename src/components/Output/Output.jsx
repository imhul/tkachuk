// core
import { useEffect } from "react"
// utils
import "../../utils/bg"
import JsonLd from "../../utils/microdata"
// components
import { Layout } from "antd"
import Portal from "../Portal"
import HowTo from "../HowTo"
import Stats from "../Stats"
import Home from "../Pages/Home"
import Notify from "../Notify"
import MainMenu from "../Menu"

const { Content } = Layout

const Output = () => {
    useEffect(() => {
        if (window) window.dispatchEvent(new Event("resize"))
    })

    return (
        <Layout className="LayoutMain">
            <Portal>
                <Stats />
            </Portal>
            <Portal>
                <HowTo />
            </Portal>
            <Portal>
                <Notify />
            </Portal>
            <Portal>
                <MainMenu />
            </Portal>
            <Layout className="Main">
                <Content>
                    <Home />
                </Content>
            </Layout>
            <JsonLd />
        </Layout>
    )
}

export default Output

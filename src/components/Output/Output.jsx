// core
import { useEffect } from "react"
// utils
import "../../utils/bg"
import JsonLd from "../../utils/microdata"
import menu from "../../utils/menu"
// components
import { Layout } from "antd"
import Portal from "../Portal"
import Toolbar from "../Toolbar"
import HowTo from "../HowTo"
import Stats from "../Stats"
import Home from "../Pages/Home"
import Notify from "../Notify"

const { Content } = Layout

const Output = () => {
    useEffect(() => {
        if (window) window.dispatchEvent(new Event("resize"))
    })

    return (
        <Layout className="LayoutMain">
            <Portal>
                <Stats />
                <HowTo />
                <Notify />
            </Portal>
            <Toolbar key={0} />
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

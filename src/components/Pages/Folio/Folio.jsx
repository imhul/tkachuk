import { memo } from "react"
import { useSelector, useDispatch } from "react-redux"
// utils
import translate from "../../../utils/translations"
// components
// import { Helmet } from 'react-helmet';
import { Collapse } from "antd"
import { Intro, Roadmap, Works, Contact } from "../../Tabs"
import {
    MessageOutlined,
    RocketOutlined,
    PoweroffOutlined,
    CompassOutlined
} from "@ant-design/icons"

const { Panel } = Collapse

const Folio = memo(() => {
    const { active, lang } = useSelector(s => s.ui)
    const dispatch = useDispatch()
    const renderTexts = [
        {
            icon: <PoweroffOutlined />,
            key: "intro",
            text: <Intro />
        },
        {
            icon: <CompassOutlined />,
            key: "roadmap",
            text: <Roadmap />
        },
        {
            icon: <RocketOutlined />,
            key: "works",
            text: <Works />
        },
        {
            icon: <MessageOutlined />,
            key: "contacts",
            text: <Contact />
        }
    ].map(load => ({
        key: load.key,
        showArrow: false,
        label: (
            <div className="bg">
                <div>
                    {translate(lang, load.key)}
                    {load.icon}
                </div>
            </div>
        ),
        children: load.text
    }))

    return (
        <div className="Folio" tabIndex="1">
            <Collapse
                accordion
                destroyOnHidden
                defaultActiveKey={active}
                onChange={key =>
                    dispatch({
                        type: "TAB_MODIFY",
                        payload: key
                    })
                }
                className={active ? "active" : null}
                items={renderTexts}
            />
        </div>
    )
})

export default Folio

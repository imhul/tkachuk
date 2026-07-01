import { memo, useState, useEffect, Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
// components
import { Card, Menu, Button } from "antd"
import {
    MoreOutlined,
    SendOutlined,
    MailOutlined,
    UserOutlined,
    BankOutlined,
    HomeOutlined,
    HeartOutlined,
    CoffeeOutlined,
    GithubOutlined,
    SettingOutlined,
    WhatsAppOutlined,
    LinkedinOutlined,
    ExperimentOutlined,
    TranslationOutlined,
    UnorderedListOutlined,
} from "@ant-design/icons"
// utils
import translate from "../../utils/translations"
import { LANG_OPTIONS, GITHUB_PAGE } from "../../utils/config"
import { technologies } from "../../utils/technologies"

const techCategories = Object.keys(technologies)

const getTechsOfCategory = category =>
    technologies[category].list.map(tech => ({
        key: tech.id,
        label: (
            <a
                href={tech.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                {tech.id}
            </a>
        )
    }))

const contacts = {
    email: "blashirk@gmail.com",
    github: "https://github.com/imhul",
    linkedin: "https://www.linkedin.com/in/tkachuk-zakhar/",
    telegram: "https://t.me/blashirk",
    whatsapp: "https://wa.me/380930113375"
}

const StringHidder = memo(({ subkey, label }) => {
    const [hidden, setHidden] = useState(true)

    const copyToClipboard = (text) => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text)
                .then(() => {
                    console.info(`Copied to clipboard: ${text}`)
                })
                .catch(err => {
                    console.error('Failed to copy text: ', err)
                })
        } else {
            console.warn('Clipboard API not supported')
        }
    }

    return (<Fragment key={subkey}>
        <div onClick={() => {
            if (!hidden) {
                copyToClipboard(contacts[subkey])
            }
            setHidden(prev => !prev)
        }}>
            {hidden ? label : contacts[subkey]}
        </div>
    </Fragment>)
})

const menu = [
    {
        key: "hobby",
        label: "Home Projects",
        icon: <HomeOutlined />,
        children: [
            {
                key: "tic-tac-toe",
                label: "Tic Tac Toe Online",
                link: "https://ttt-frontend-xi.vercel.app/"
            },
            {
                key: "matrix-rain",
                label: "Matrix Rain",
                link: "https://imhul.github.io/matrix/"
            },
            {
                key: "chicken-hell",
                label: "Chicken Hell",
                link: "https://github.com/imhul/chicken-hell"
            },
            {
                key: "neumorphine",
                label: "Neumorphine.css",
                link: "https://github.com/imhul/neumorphine.css"
            },
            {
                key: "solitaire",
                label: "Solitaire",
                link: "https://github.com/imhul/solitaire"
            }
        ]
    },
    {
        key: "commercial",
        label: "Commercial Projects",
        icon: <BankOutlined />,
        children: []
    },
    {
        key: "technologies",
        label: "Technologies",
        icon: <ExperimentOutlined />,
        children: techCategories.map(category => ({
            key: category,
            label: category,
            children: getTechsOfCategory(category)
        }))
    },
    {
        key: "contacts",
        label: "Contacts",
        icon: <UserOutlined />,
        children: [
            {
                key: "email",
                label: "Email",
                icon: <MailOutlined />,
            },
            {
                key: "github",
                label: "GitHub",
                icon: <GithubOutlined />,
            },
            {
                key: "linkedin",
                label: "LinkedIn",
                icon: <LinkedinOutlined />,
            },
            {
                key: "telegram",
                label: <StringHidder subkey="telegram" label="Telegram" />,
                icon: <SendOutlined />,
            },
            {
                key: "whatsapp",
                label: <StringHidder subkey="whatsapp" label="WhatsApp" />,
                icon: <WhatsAppOutlined />,
            },
        ]
    },
    {
        key: "preferences",
        label: "Preferences",
        icon: <SettingOutlined />,
        children: [
            {
                key: "lang",
                label: "Language",
                icon: <TranslationOutlined />,
                children: [
                    {
                        key: "english",
                        label: "English",
                    },
                    {
                        key: "ukrainian",
                        label: "Українська",
                    }
                ],
            }
        ]
    },
    {
        key: "donate",
        label: "Donate",
        icon: <HeartOutlined />,
        children: [
            {
                key: "buymeacoffee",
                label: "Buymeacoffee",
                link: "https://www.buymeacoffee.com/blashirkz",
                icon: <CoffeeOutlined />,
            }
        ],
    }
]

const menuItems = (items = menu) => {
    if (!items || !Array.isArray(items) || !items.length) return []

    return items.map(item => ({
        key: item.key,
        icon: item.icon,
        title: item.label,
        label:
            item.children?.length > 0 ? (
                <span>{item.label}</span>
            ) : (item.link?.length > 0 ? (
                <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {item.label}
                </a>) : item.label),
        children:
            item.children?.length > 0 ? menuItems(item.children) : null
    }))
}

const MainMenu = () => {
    const { lang, isMenuOpen } = useSelector(s => s.ui)
    const dispatch = useDispatch()
    const minWidth = 1024
    const menuData = menuItems()

    const onResize = () => {
        const currentBrowserWindowWidth = window.innerWidth
        if (currentBrowserWindowWidth < minWidth && isMenuOpen) {
            dispatch({
                type: "TOGGLE_TOOLBAR",
                payload: false
            })
        } else if (currentBrowserWindowWidth >= minWidth && !isMenuOpen) {
            dispatch({
                type: "TOGGLE_TOOLBAR",
                payload: true
            })
        }
    }

    useEffect(() => {
        onResize()
        window.addEventListener("resize", onResize)
        return () => {
            window.removeEventListener("resize", onResize)
        }
    })

    const findItemByKey = (key, items) => {
        for (const item of items) {
            if (item.key === key) {
                return item
            }
            if (item.children) {
                const found = findItemByKey(key, item.children)
                if (found) {
                    return found
                }
            }
        }
        return null
    }

    const onMenuClick = ({ key, keyPath }) => {
        // TODO:
        // 1. implement switch case for menu item clicks
        // 2. add layout of technologies
        // 3. add commercial projects

        // if (!keyPath.includes("lang")) {
        //     return
        // }
        console.info("Menu item clicked: ", key, keyPath)
        // switch () {}

        // dispatch({ type: "TOGGLE_USER_LANG_SELECT" })
        // dispatch({
        //     type: "SET_LANG",
        //     payload: key
        // })
    }

    return (<div className="main-menu" style={{
        position: "fixed",
        top: "50%",
        left: 0,
        transform: "translateY(-50%)"
    }}>
        <Button
            onClick={() => dispatch({
                type: "TOGGLE_TOOLBAR",
                payload: !isMenuOpen
            })}
            icon={isMenuOpen ? <MoreOutlined /> : <UnorderedListOutlined />}
            style={{ margin: '0 0 0.5rem 1.5rem' }}
        />

        <Menu
            mode="inline"
            // mode="vertical"
            selectable={false}
            items={menuData}
            onClick={onMenuClick}
            inlineCollapsed={!isMenuOpen}
            style={{ backgroundColor: "rgba(69, 103, 120, 0.8)" }}
            popupRender={(node, info) => {
                const item = findItemByKey(info.item.key, menuData)
                if (!item) return node

                switch (item.key) {
                    case "contacts": return item.children.map(sub => (
                        <StringHidder subkey={sub.key} label={sub.label} />
                    ))
                    default:
                        return node
                }
            }}
        />
    </div>)
}

export default MainMenu

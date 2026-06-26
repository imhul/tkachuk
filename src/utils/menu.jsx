import React from "react"
import {
    UserOutlined,
    BankOutlined,
    HomeOutlined,
    CrownOutlined,
    GithubOutlined,
    ExperimentOutlined,
    InfoCircleOutlined
} from "@ant-design/icons"
// utils
import { GITHUB_PAGE } from "./config"
import { technologies } from "./technologies"

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

const menu = [
    {
        key: "home-projects",
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
        key: "commercial-projects",
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
        children: []
    },
    {
        key: "about",
        label: "About",
        icon: <InfoCircleOutlined />
    }
]

export default menu

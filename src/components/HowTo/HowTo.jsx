import React, { memo, useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
// components
import { Button, Tooltip } from "antd"
import {
    QuestionCircleOutlined,
    RedoOutlined
} from "@ant-design/icons"

const HowTo = memo(() => {
    const { lang } = useSelector(state => state.ui)
    const dispatch = useDispatch()

    const reset = () => {
        if (
            !window.bgJSDom ||
            !window.bgJSDom[0] ||
            !window.bgJSDom[0].bgJS
        )
            return
        window.bgJSDom[0].bgJS.fn.particlesRefresh()
    }

    return (
        <div className="HowTo">
            <Tooltip placement="left" title="Reset">
                <Button
                    type="primary"
                    onClick={reset}
                    shape="circle"
                    icon={<RedoOutlined />}
                    size="large"
                />
            </Tooltip>
            <Button
                type="primary"
                onClick={() =>
                    dispatch({
                        type: "NOTIFY",
                        payload: { text: "keep_clicking" }
                    })
                }
                shape="circle"
                icon={<QuestionCircleOutlined />}
                size="large"
            />
        </div>
    )
})

export default HowTo

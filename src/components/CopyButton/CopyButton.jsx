// core
import { useCallback } from "react"
// components
import {
    MailOutlined,
    CopyOutlined,
    EllipsisOutlined
} from "@ant-design/icons"
// utils
import { Button } from "antd"
import translate from "../../utils/translations"
import { NOTIFY_OPTIONS } from "../../utils/config"

const env = import.meta.env
const mCode = String(env?.VITE_REACT_APP_M_CODE) || ""

const CopyButton = ({ title }) => {
    const copy = useCallback(() => {
        navigator.clipboard
            .writeText(mCode)
            .then(() => {
                dispatch({
                    type: "NOTIFY",
                    payload: {
                        text: "message_success_email_copy",
                        options: { type: "success" }
                    }
                })
            })
            .catch(() => {
                dispatch({
                    type: "NOTIFY",
                    payload: {
                        text: "message_error_wrong",
                        options: { type: "error" }
                    }
                })
            })
    }, [mCode])

    return (
        <Button
            onClick={copy}
            size="large"
            type="text"
            variant="text"
        >
            {title} <CopyOutlined />
        </Button>
    )
}

export default CopyButton

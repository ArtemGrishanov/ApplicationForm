import React from 'react'

export default function FormButton({text = 'button', disabled = false, onClick}) {
    return <button className={"btn" + ((disabled) ? ' __disabled': '')} onClick={onClick}>{text}</button>
}

import React from 'react'

export default function FormButton({link=null, text = 'button', disabled = false, onClick}) {
    return <a href={link} className={"btn" + ((disabled) ? ' __disabled': '')} onClick={onClick}>{text}</a>
}

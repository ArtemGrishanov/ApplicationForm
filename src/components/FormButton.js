import React from 'react'

export default function FormButton({text = 'button', disable = false, onClick}) {
    return <button className={"btn " + (disable) ? '__disabled': ''} onClick={onClick}>{text}</button>
}

import React from 'react'

export default function FormButton({text, disable}) {
    return <button className={"btn " + (disable) ? '__disabled': ''}>{text}</button>
}

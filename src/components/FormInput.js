import React from 'react'

export default function FormInput({disable = false, placeholder = '', value = '', onValueChange}) {
    return (
        <input className={"btn " + (disable) ? '__disabled': ''}
            placeholder={placeholder}
            defaultValue={value}
            onChange={event => onValueChange(event.target.value)}>
        </input>
    );
}

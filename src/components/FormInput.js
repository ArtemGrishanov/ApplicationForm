import React from 'react'

export default function FormInput({disable = false, placeholder = '', value = '', onValueChange}) {
    return (
        <input className="formInput"
            placeholder={placeholder}
            defaultValue={value}
            maxLength="100"
            onChange={event => onValueChange(event.target.value)}>
        </input>
    );
}

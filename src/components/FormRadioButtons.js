import React from 'react'

export default function RadioButtons({fieldId, value, options, onValueChange}) {
    return (
        <form>
            {options.map((item, index) =>
                <div className="rb_i" key={item.key}>
                    <input className="form_radio" type="radio"
                        id={item.key}
                        name={fieldId}
                        value={item.text}
                        onChange={(e) => onValueChange(e.target.value)}
                        defaultChecked={value === item.text}
                        />
                    <label htmlFor={item.key}>{item.text}</label>
                </div>
            )}
        </form>
    );
}

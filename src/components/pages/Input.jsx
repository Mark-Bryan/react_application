import React from "react";

function InputField({type, name, value, onChange, required, label}) {
    let input ;
    switch (type) {
        case "FREE_TEXT":
            input = (
                <textarea name={name} value={value} onChange={onChange} required={required} rows={3} className="input"/>
            );
            break;

        case "DATE_TIME":
            input = (
                <input type="datetime-local" name={name} onChange={onChange} required={required} className="input"/>
            );
            break;

        case "SIMPLE_TEXT":
            input = (
                <input type="text" name={name} onChange={onChange} required={required} className="input"/>
            );
            break;
        default:
            input = (
                <input type="text" name={name} onChange={onChange} required={required} className="input"/>

            );
    }

    return (
        <div>
            <label className="label">{label}</label>
            {input}
        </div>
    )
}

export default InputField;
import React from 'react';

export default function FormFieldText({ label, type, value, name, onChange}) {

    return(
        <div>
          <label>
            {label}
            <textarea
              type={type}
              value={value}
              name={name}
              onChange={onChange}
            />
          </label>
        </div>
    );
}
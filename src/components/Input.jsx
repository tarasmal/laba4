import React from 'react';

const datePlaceholder = 'dd.mm.yyyy'

const Input = ({value, setValue, isRequired, placeholder, isDate, type, ...props}) => {
    return (
        <div>
            <input
                value={value}
                type={type}
                onChange={e => setValue(e.target.value)}
                placeholder={isDate ? datePlaceholder : placeholder}
                {...props }
            />
            {isRequired && <span style={{color: 'red'}}>*</span>}
        </div>
    );
};

export default Input;

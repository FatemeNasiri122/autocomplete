import React from 'react';

type InputProps = {
    label?: string;
    id?: string;
    isDisable?: boolean;
    type?: string;
    placeholder?: string;
    hasError?: boolean;
    errorMessage?: string;
    defaultValue?: string;
    value?: string;
    hasLeftIcon?: boolean;
    hasRightIcon?: boolean;
    icon?: React.ReactNode;
    clickableIcon?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleClick?: () => void;
}

const Input: React.FC<InputProps> = ({ label, id, isDisable, type, placeholder, hasError, defaultValue, value, errorMessage, hasLeftIcon, hasRightIcon, clickableIcon, icon, onChange, handleClick }) => {

    return (
        <>
            <label htmlFor={id} className="">{label}</label>
            <div className={!hasError ? "input-container" : "input-container-error"}>
                {hasLeftIcon ? <span>
                    {clickableIcon ? <button type="button" onClick={handleClick}>{icon}</button> : icon}
                </span> : ""}
                <input
                    id={id}
                    type={type}
                    disabled={isDisable}
                    placeholder={placeholder}
                    className="input"
                    defaultValue={defaultValue}
                    value={value}
                    onChange={onChange}
                />
                {hasRightIcon ? <span>
                    {clickableIcon ? <button type="button" onClick={handleClick}>{icon}</button> : icon}
                </span> : ""}
            </div>
            <small className="error-text">{errorMessage}</small>
        </>
    );
}

export default Input;
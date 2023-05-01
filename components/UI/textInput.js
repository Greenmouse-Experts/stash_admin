import React, { useState } from "react";
import classNames from "classnames";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";

export const InputType = {
  email: "email",
  password: "password",
  radio: "radio",
  tel: "tel",
  text: "text",
  textarea: "textarea",
  number: "number",
};

export const TextInput = ({
  type,
  name,
  onChange,
  label,
  error,
  required = false,
  className = "w-full border-0 p-2 rounded",
  labelClassName,
  placeholder,
  disabled = false,
  maxLength,
  autoFocus,
  fullWidth,
  inputRef,
  onKeyPress,
  onBlur,
  autoComplete,
  autoCapitalize,
  onFocus,
  onKeyUp,
  onKeyDown,
  min,
  max,
  customRightElement,
  altClassName,
  icon,
  ...rest
}) => {
  const [isPasswordType, setIsPasswordType] = useState(false);
  const [inputType, setInputType] = useState(type);

  const togglePassword = (state) => {
    setIsPasswordType(state);
    setInputType(!state ? InputType.password : InputType.text);
  };

  const renderInputType = () => {
    switch (type) {
      case InputType.textarea:
        return (
          <textarea
            id={name}
            className={
              altClassName ||
              classNames(fullWidth ? "w-full p-2" : "p-2", className)
            }
            name={name}
            required={required}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            maxLength={maxLength}
            autoFocus={autoFocus}
            onFocus={onFocus}
            autoComplete={autoComplete}
            autoCapitalize={autoCapitalize}
            ref={inputRef}
            {...rest}
          />
        );

      default:
        return (
          <input
            id={name}
            type={inputType}
            className={
              altClassName || classNames(fullWidth ? "w-full focus:bg-input bg-input placeholder-gray-400 outline-none border-0" : "focus:bg-input bg-input placeholder-gray-400 outline-none border-0", className)
            }
            name={name}
            required={required}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            maxLength={maxLength}
            autoFocus={autoFocus}
            onFocus={onFocus}
            autoComplete={autoComplete}
            autoCapitalize={autoCapitalize}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            ref={inputRef}
            min={min}
            max={max}
            {...rest}
          />
        );
    }
  };
  return (
    <div className="mt-3">
      <div>
        <>
          {label && (
            <label className={labelClassName ? labelClassName : ""}>
              {label}
            </label>
          )}
        </>
      </div>
      <div
        className={classNames(
          error ? "border-red-400" : "border-0 ",
          "flex items-center bg-input border mt-1 py-1 rounded"
        )}
      >
        {icon && <div className="mx-3 opacity-75">{icon}</div>}
        {renderInputType()}
        {customRightElement && customRightElement}
        {type === InputType.password && (
          <div onClick={() => togglePassword(!isPasswordType)} className="px-3">
            {isPasswordType ? (
              <FaRegEye className="text-xl opacity-75" />
            ) : (
              <FaRegEyeSlash className="text-xl opacity-75" />
            )}
          </div>
        )}
      </div>
      <>
          {error && (
            <div className="flex items-center gap-x-2 text-sm text-red-500">
                <BsFillInfoCircleFill/>
              {error.toString()}
            </div>
          )}
        </>
    </div>
  );
};

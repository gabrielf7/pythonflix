import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
  top: 15px;
  position: relative;
  textarea {
    min-height: 120px;
  }
  input[type="color"] {
    padding-left: 150px;
  }
`;

const Label = styled.label``;

Label.Text = styled.span`
  color: var(--grayMedium);
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
  @media (max-width: 800px) {
    font-style: normal;
    font-size: 15px;
  }
`;

const Input = styled.input`
  background: var(--pygreeneasy);
  color: var(--grayLight);
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid var(--pyellow);
  
  padding: 16px 16px;
  margin-bottom: 30px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--pyprimary);
  }
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
  }
  ${({ placeholder }) => {
    const hasPlaceholder = placeholder.length > 0;
    return hasPlaceholder && css`
      &:not([type='color']) + ${Label.Text} {
        transform: scale(.9) translateY(-45px);

      }
    `;
  }}
  ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
      &:not([type='color']) + ${Label.Text} {
        transform: scale(.10) translateY(-10px);
      }
    `;
  }}
`;

function FormField({
  label, type, value, name, placeholder, onChange, suggestions,
}) {
  const fieldId = `id_${name}`;
  const isTextarea = type === 'textarea';
  const tag = isTextarea ? 'textarea' : 'input';

  const hasValue = Boolean(value.length);
  const hasPlaceholder = Boolean(placeholder.length);
  const hasSuggestions = Boolean(suggestions.length);

  return (

    <FormFieldWrapper>
      <Label
        htmlFor={fieldId}
      >

        <Input
          as={tag}
          id={fieldId}
          type={type}
          value={value}
          hasValue={hasValue}
          name={name}
          placeholder={placeholder}
          hasPlaceholder={hasPlaceholder}
          onChange={onChange}
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
        />
        <Label.Text>
          {label}
        </Label.Text>
        {
          hasSuggestions && (
            <datalist id={`suggestionFor_${fieldId}`}>
              {
                suggestions.map((suggestion) => (
                  <option value={suggestion} key={`suggestionFor_${fieldId}_option${suggestion}`}>
                    {suggestion}
                  </option>
                ))
              }
            </datalist>
          )
        }
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  placeholder: 'text',
  value: '',
  onChange: () => {},
  suggestions: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;

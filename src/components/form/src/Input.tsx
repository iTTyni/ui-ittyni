import * as React from 'react';
import { InputStyled, LabelStyled, InputFormGroupContainer } from '../../../../';

/**
 * Input Component for iTTyni.com
 * @param name @param onChange
 * @returns void
 */
export const Input: React.FC<any> = (props) => <InputStyled {...props} />;

/**
 * Input Form Group Component for iTTyni.com
 * @param labelText
 * @param small - Small text to display below the input (optional).
 * @param rest - Any additional props to pass to the Input component.
 * @returns JSX.Element
 */
export const InputFormGroup: React.FC<{
  labelText: string;
  inputName: string;
  small?: string;
  [key: string]: any;
}> = ({ labelText, small,inputName, ...rest }) => {
  return (
    <InputFormGroupContainer>
      <LabelStyled htmlFor={inputName}>{labelText}</LabelStyled>
      <Input name={inputName} {...rest} />
      {small && <small>{small}</small>}
    </InputFormGroupContainer>
  );
};

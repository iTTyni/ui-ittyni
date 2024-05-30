import * as React from 'react';
import { InputStyled } from '../../../../';

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
  small?: string;
  [key: string]: any;
}> = ({ labelText, small, ...rest }) => {
  return (
    <div>
      <label htmlFor={labelText}>{labelText}</label>
      <Input name={labelText} {...rest} />
      {small && <small>{small}</small>}
    </div>
  );
};

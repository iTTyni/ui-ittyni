import * as React from 'react'
import { StyledSelect } from '../../../../'
/**
 * Select Component for iTTyni.com
 * @param 
 * @returns 
 */
export const Select: React.FC<{
    name: string,
    onChange: (e: any) => void,
    options: { value: string, name: string, otherOptions?: any }[],
    initialValue?: string
    required?: boolean
    disabled?: boolean
}> = ({ name, onChange, options, initialValue, required, disabled }) => {


    return (
        <StyledSelect
            name={name}
            onChange={onChange}
            required={required}
            disabled={disabled}
        >
            <option disabled selected={!initialValue} defaultValue={"------------"}>----------</option>
            {
                options?.map((c: any) =>
                    <option 
                        value={c.value} 
                        key={c.value} 
                        {...c.otherOptions}
                        selected={initialValue&&initialValue===c.value? true: false}
                    >
                        {c.name}
                    </option>
                )}
        </StyledSelect>
    )
}
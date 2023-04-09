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
    options: { value: string, name: String, otherOptions?: any }[],
    initialValue?: string
}> = ({ name, onChange, options, initialValue }) => {


    return (
        <StyledSelect
            name={name}
            onChange={onChange}
        >
            <option disabled selected={!initialValue}>----------</option>
            {
                options.map((c: any) =>
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
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

/**
 * Select Component for iTTyni.com
 * @param 
 * @returns 
 */
export const SelectWithComponents: React.FC<{
    onClick: (i?: any, value?:any) => void,
    index : number,
    defaultValue?: any
    options?: any[]
    isDisabled : boolean
  }> = ({ onClick, index, defaultValue, options, isDisabled }) => {
    // show select menu
    const [showOptions, setSowOptions] = React.useState<boolean>(false)
    // enable edit
    const [selected, setSelected] = React.useState<any>()
    
    React.useEffect(()=>{
      selected&&onClick(index, {[selected.key] : selected.value})
    }, [selected])
    return (
      <div>
        {selected&&<div style={{display:'flex'}} onClick={() => setSowOptions(!showOptions)}><div>{selected.icon}</div> <i className="fas fa-arrow-down" /> </div>}
        {!selected&&defaultValue&&<div style={{display:'flex'}} onClick={() => setSowOptions(!showOptions)}><div >{defaultValue}</div> {isDisabled&&<i className="fas fa-arrow-down" /> }</div>}
        {!selected&&!defaultValue&& <div onClick={() => setSowOptions(!showOptions)}>------- <i className="fas fa-arrow-down" /> </div>}
  
        {showOptions && isDisabled &&
          <div style={{ position: 'absolute', top: 20, left: 0, border: "1px solid gray", backgroundColor: 'white', padding: "5px" }}>
            {options&&options.map((o: any) =>
              <div style={{ margin: "5px" }}
                onClick={() => {
                  // updateFinance(i, { country: "Morocco" })
                  setSelected(o);
                  setSowOptions(!showOptions)
                }}>{o.icon}</div>
            )}
          </div>
        }
      </div>
    )
  }
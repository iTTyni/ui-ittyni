import React from "react";

export const EditText: React.FC<any> = ({ initialData, saveChange, type, name }) => {
    const [isModeEdit, setModeEdit] = React.useState<boolean>(false);
    const [textData, setTextData] = React.useState<String>(initialData);

    React.useEffect(()=>{
      setTextData(initialData)
    },[initialData])
    return (
      <>
        {isModeEdit && <>
          <input placeholder="click to edit"
            name={name}
            onBlur={e => { setModeEdit(false); saveChange(e) }}
            onChange={e => setTextData(e.target.value)}
            style={{ width: 'auto' }}
            type={type}
            autoFocus/>
        </>}
        {!isModeEdit &&
          <span onClick={e => setModeEdit(true)} style={{fontSize: "16px", fontWeight:"bold"}}>
            {textData}
          </span>}
      </>
    )
}
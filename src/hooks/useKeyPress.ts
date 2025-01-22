import React from "react"
interface IKey {
    key: string,
    code: string
}
export default (
    {key, code}: IKey
)=>{

    const [keyPressed, setKeyPressed] = React.useState<boolean>(false);

    const downHandler =(e:KeyboardEvent)=>{
        if(
            e.key=== key || 
            e.code===code
        ){
            setKeyPressed(true);
        }
    }

    const upHandler=(e:KeyboardEvent)=>{
        if(
            e.key=== key || 
            e.code===code 
        ){
            setKeyPressed(false);
        }
    }

    React.useEffect(()=>{
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler)
        return ()=>{
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keydown", upHandler);
        }
    },[])


    return keyPressed;
}
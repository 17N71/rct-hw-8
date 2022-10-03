import React,{memo} from "react";
export const CustomInput = (props) => {
    console.log(props.placeholder)
    return <input type="text" {...props} />
}
export default memo(CustomInput);
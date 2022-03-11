import React from "react";

const FormInput = ({name,type,value,handleChange,labelText}) => {

    return<>
    <label htmlFor={name} >{labelText || name}   :</label>
    <input type={type} value={value} name= {name}  onChange={handleChange} />

    </>

}
export default FormInput
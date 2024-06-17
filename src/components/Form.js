import React, { useEffect, useState } from "react";
import { text } from "../utils";
import { useNavigate } from "react-router-dom";


const Form = ({onSubmit, inputValues}) => {

    const [values, setValues] = useState({name:"",email:"",phone:""})
    const error = 'Please fill in all fields!!';
    const navigate = useNavigate()
    
    useEffect(() => {
        if (inputValues && inputValues !== values) {
          setValues(inputValues);
        }
      }, [inputValues]);

    const submit = () => {
        event.preventDefault()
        onSubmit(values)
    }

    const handleChange = (e) => {
        setValues({...values, [e.target.name]:e.target.value})
    }

    return (
        <form onSubmit={submit} className="mt-4">
            <div className="alert " >{values.name && values.email && values.phone ? "" : error}</div>
            <input placeholder={inputValues ? "Name":"Full name"} name="name" type="text" value={values?.name} onChange={handleChange} required/>
            <input placeholder="Email" name="email" type="email" value={values?.email} onChange={handleChange} required/>
            <input placeholder="Phone" name="phone" type="number" value={values?.phone} onChange={handleChange} required/>
            <input type="submit" value={inputValues ? text.update : text.addStudent} />
            {inputValues && <button className="text-capitalize" onClick={() => navigate('/')}>{text.cancel}</button>}
        </form>
    );
};

export default Form;

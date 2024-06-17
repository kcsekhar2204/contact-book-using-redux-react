import React, { useState } from "react";
import { text } from "../utils";
import Form from "../components/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Add = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const id = useSelector(state => state.id)

  const submit = (e) => {
    const payload = {id:id, name:e.name, email: e.email, phone:e.phone}
    
    dispatch({type:"ADD_CONTACT", payload: payload, navigate:navigate})
  }

  return (
    <>
      <div className="text-uppercase">{text.addPost}</div>
      <Form onSubmit={(e) => submit(e)}/>
    </>
  );
};

export default Add;

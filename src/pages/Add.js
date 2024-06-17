import React, { useState } from "react";
import { checkDuplicates, text } from "../utils";
import Form from "../components/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Add = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const id = useSelector(state => state.id)
  const contacts = useSelector(state => state.contacts)

  const submit = (e) => {
    const payload = {id:id, name:e.name, email: e.email, phone:e.phone}
    const duplicateMessage = checkDuplicates(contacts, payload)
    if(duplicateMessage) {
      toast.error(duplicateMessage)
    } else {
      toast.success(text.addSuccess)
      dispatch({type:"ADD_CONTACT", payload: payload})
      navigate('/')
    }
  }

  return (
    <>
      <div className="text-uppercase">{text.addPost}</div>
      <Form onSubmit={(e) => submit(e)}/>
    </>
  );
};

export default Add;

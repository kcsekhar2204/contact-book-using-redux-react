import React from "react";
import Form from "../components/Form";
import { useNavigate, useParams } from "react-router-dom";
import { checkDuplicates, text } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";


const Edit = () => {

  const {id} = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const contacts = useSelector(state => state.contacts)
  const contact = contacts[id]

  const submit = (e) => {
    const payload = {id:id, name:e.name, email: e.email, phone:e.phone}
    const duplicateMessage = checkDuplicates(contacts, payload)
    if(duplicateMessage) {
      toast.error(duplicateMessage)
    } else{
      toast.success(text.updateSuccess)
      navigate('/')
      dispatch({type:"UPDATE_CONTACT", payload:payload})
    }
  }

  return (
    <>
      <button onClick={() => navigate('/')}>{text.goBack}</button>
      <Form onSubmit={(e) => submit(e)} inputValues={contact}/>
    </>
  );
};

export default Edit;

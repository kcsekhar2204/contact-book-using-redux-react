import React from "react";
import Form from "../components/Form";
import { useNavigate, useParams } from "react-router-dom";
import { text } from "../utils";
import { useDispatch, useSelector } from "react-redux";


const Edit = () => {

  const {id} = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const contact = useSelector(state => state.contacts[id])

  const submit = (e) => {
    const payload = {id:id, name:e.name, email: e.email, phone:e.phone}
    dispatch({type:"UPDATE_CONTACT", payload:payload, navigate:navigate})
  }

  return (
    <>
      <button onClick={() => navigate('/')}>{text.goBack}</button>
      <Form onSubmit={(e) => submit(e)} inputValues={contact}/>
    </>
  );
};

export default Edit;

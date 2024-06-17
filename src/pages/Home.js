import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { text } from "../utils";
import { useNavigate } from "react-router-dom";


const Home = () => {

  const contacts = useSelector(state => state.contacts)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <>
      <button onClick={() => navigate('/add')}>{text.addContacts}</button>

      <table>
        <thead>
          <tr>
            <th>{text.id}</th>
            <th>{text.name}</th>
            <th>{text.email}</th>
            <th>{text.phoneNo}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(contacts).length ? Object.keys(contacts).map(id => {
            return (
              <tr key={id}>
                <td>{contacts[id].id}</td>
                <td>{contacts[id].name}</td>
                <td>{contacts[id].email}</td>
                <td>{contacts[id].phone}</td>
                <td>
                  <button onClick={() => navigate(`/edit/${contacts[id].id}`)}>{text.edit}</button>
                  <button onClick={() => dispatch({type:'DELETE_CONTACT', payload:contacts[id].id})}>{text.delete}</button>
                </td>
              </tr>
            )
          }) : <tr>No Contacts Found</tr>}
        </tbody>
      </table>
    </>
  );
};

export default Home;

import React, { useState, ChangeEvent } from 'react';
import './Form'
import {IForm} from '../../models/IForm'

interface IFormProps {
  updateParent(values: IForm): void;
}

export default function Form(props: IFormProps) {
  const defaultValue: IForm = { name:'', adress:'', city: '' };

  const [userForm, setUserForm] = useState(defaultValue);

  function updateUserForm(e: ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setUserForm({ ...userForm, [name]: value });
    props.updateParent(userForm);
  }

  function handleClick() {
    props.updateParent(userForm);  
  }
  //console.log(userForm)
  return (
      <div className="form">
      <form>
      <h3>KONTAKTUPPGIFTER</h3>
      <label htmlFor="name">Ditt fullständiga namn</label>
        <input
          type="text"
          id="name"
          name="name"
          value={userForm.name}
          onChange={updateUserForm}
        />

        <label htmlFor="adress">Address</label>
        <input
          type="text"
          id="adress"
          name="adress"
          value={userForm.adress}
          onChange={updateUserForm}
        />
              <label htmlFor="city">Stad</label>
          <input
          type="text"
          id="city"
          name="city"
          value={userForm.city}
          onChange={updateUserForm}
        />

        <button className="CheckoutBtn" type="button" onClick={handleClick}>Spara</button>
      </form>
    </div>
  );
}
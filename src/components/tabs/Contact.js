import React, { useState} from "react";
import {validateEmail, checkBlank} from "../../utils/helper"

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errorMessage, setErrorMessage] = useState("");

  const {name, email, message} = formState;

  function handleChange(e){
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("A valid email address is needed")
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required`)
        }else {
          setErrorMessage("")
        }
      }
    }
    if (!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value});
    }
  };

  function handleBlank(e){
    if (e.target.name === "name" || e.target.name === "message") {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage("")
      }
    };
    if (!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value})
    }
  };

  return (
    <>
      <h2>Contact</h2>
      <form>
        <p>Name:</p>
        <div>
          <input type="text" placeholder="Name" name="name" onBlur={handleBlank} required />
        </div>
        <p>Email:</p>
        <div>
          <input type="email" placeholder="Email" name="email" onBlur={handleChange} required />
        </div>
        <p>Message:</p>
        <div>
          <textarea placeholder="Your message" name="message" onBlur={handleBlank} required />
        </div>
        <div>
          <button type="submit">Send a message</button>
        </div>
      </form>
    </>
  );
}

export default Contact;

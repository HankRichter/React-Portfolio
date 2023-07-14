import React, { useState } from "react";
import { validateEmail, checkBlank } from "../../utils/helper";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("A valid email address is needed");
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required`);
        } else {
          setErrorMessage("");
        }
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleBlank(e) {
    if (e.target.name === "name" || e.target.name === "message") {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  return (
    <>
      <section className="flex-1 p-3 bg-color3 md:flex md:justify-center">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Contact</h2>
          <p className="text-lg mb-2">
            Please fill out the form below to get in touch!
          </p>
          <form>
            <p className="text-lg mb-2">Name:</p>
            <div className="mb-2">
              <input
                className="w-48"
                type="text"
                placeholder="Name"
                name="name"
                onBlur={handleBlank}
                required
              />
            </div>
            <p className="text-lg mb-2">Email:</p>
            <div className="mb-2">
              <input
                className="w-48"
                type="email"
                placeholder="Email"
                name="email"
                onBlur={handleChange}
                required
              />
            </div>
            <p className="text-lg mb-2">Message:</p>
            <div className="mb-4">
              <textarea
                className="w-48"
                placeholder="Your message"
                name="message"
                onBlur={handleBlank}
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="p-1 border-2 rounded hover:bg-color2 hover:text-color4"
              >
                Send a message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;

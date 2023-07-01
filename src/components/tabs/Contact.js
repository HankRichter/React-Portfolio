import React from "react";

function Contact() {
  return (
    <>
      <h2>Contact</h2>
      <form>
        <p>Name:</p>
        <div>
          <input type="text" placeholder="Name" name="name" required />
        </div>
        <p>Email:</p>
        <div>
          <input type="email" placeholder="Email" name="email" required />
        </div>
        <p>Message:</p>
        <div>
          <textarea placeholder="Your message" name="message" required />
        </div>
        <div>
          <button type="submit">Send a message</button>
        </div>
      </form>
    </>
  );
}

export default Contact;

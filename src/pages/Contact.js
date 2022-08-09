import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ width: '600px', padding: '30px' }}>
        <h1 style={{ fontSize: '50px' }}>Get in touch<span style={{
          color: '#d4d4d8'
        }}>.</span></h1>
        <span style={{ fontSize: '20px' }}>Feel free to reach out for any reason, whether it be for bug reports, feedback, or anything else.</span>
      </div>
      <div style={{
        flexDirection: 'column', backgroundColor: '#d4d4d8', padding: '30px', borderRadius: '8px'
      }}>

        <ContactForm />

      </div>
    </div>
  );
};

export default Contact;
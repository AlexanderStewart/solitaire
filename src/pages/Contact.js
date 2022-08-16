import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";

import { ReactComponent as BackArrow } from './../assets/icons/backArrow.svg';

const Contact = () => {



  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ width: '600px', padding: '30px' }}>
        <div>
          <Link to={'/'}>
            <div style={{
              cursor: 'pointer', padding: '8px 16px', borderRadius: '6px', borderStyle: 'solid', borderWidth: '2px', color: '#000', borderColor: '#000', backgroundColor: '#d4d4d8', display: 'inline-flex', justifyContent: 'center', alignItems: 'center'
            }}
            >
              <BackArrow width={20} height={20} />
              <div style={{ marginLeft: '6px' }} />
              <span>BACK</span>
            </div>
          </Link>
        </div>
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
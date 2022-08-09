import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xyyvygpr");
  if (state.succeeded) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', width: '600px', padding: '30px' }}>
        <span style={{ fontSize: '20px' }}>Thanks for reaching out! We'll get back to you shortly!</span>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '600px', padding: '30px' }}>
        <label htmlFor="email" style={{ fontSize: '20px' }}>
          Email Address
        </label>

        <div style={{ marginTop: '10px' }} />

        <input
          id="email"
          type="email"
          name="email"
          style={{ width: '600px', fontSize: '20px' }}
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />

        <div style={{ marginTop: '20px' }} />

        <label htmlFor="message" style={{ fontSize: '20px' }}>
          Message
        </label>

        <div style={{ marginTop: '10px' }} />

        <textarea
          style={{ width: '600px', fontSize: '20px' }}
          id="message"
          name="message"
          rows={8}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <div style={{ marginTop: '20px' }} />

        <button type="submit" disabled={state.submitting} style={{ height: '40px', width: '120px', fontSize: '20px', color: '#000' }}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
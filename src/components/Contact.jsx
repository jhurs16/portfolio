import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yste38b', 'template_9p8vet9', form.current, 'op-mv1jMihKnbygtD')
      .then((result) => {
          console.log(result.text);
          console.log('message sent!')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
     <form className="contactform" ref={form} onSubmit={sendEmail}>
        <div className="mb-4">
      
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" name="user_name"/>
    </div>
     <div className="mb-4">
      
       <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email" name="user_email"/>
     </div>
     
     <div className="mb-4">
       
       <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message" name="message"></textarea>
     </div>
     <button type="submit">Send Message</button>
 </form>
  );
};
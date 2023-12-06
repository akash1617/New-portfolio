import React from 'react'
import "./ContactStyle.css"

const ContactUs = () => {
  return (
    <div className='form'> 
    <form >
      <label>Name</label>
      <input type="text" name="user_name" required/>
      <label>Email</label>
      <input type="email" name="user_email" required/>
      <label>Message</label>
      <textarea name="message" rows={5} placeholder='Type your Message here' />
      <input type="submit" className='btn' value="Send" />
    </form>
    </div>
  )
}

export default ContactUs
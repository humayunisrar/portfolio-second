import React from 'react'
import "./Form.css"

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name.."/>

            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your email.."/>

            <label for="message">Message</label>
            <textarea id="message" name="message" placeholder="Write something.."></textarea>

            <button className='btn' type="submit">Submit</button>
        </form>

    </div>
  )
}

export default Form
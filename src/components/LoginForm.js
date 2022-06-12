import React from 'react'
import './LoginFormStyles.css'

const LoginForm = () => {
    return (
        <div className='form'>
            <form>
                <label>Your Name</label>
                <input type='text'></input>
                <label>Email</label>
                <input type='email'></input>
                <label>Your Address</label>
                <input type='text'></input>
                <label>Password</label>
                <input type='password'></input>
                <button type='submit' className='btn'>LOGIN</button>
                <label>Remember me</label>
                <input type="checkbox" className="form-check-input"></input>
            </form>
        </div>
    )
}

export default LoginForm

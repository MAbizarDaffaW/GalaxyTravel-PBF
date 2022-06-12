import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import LoginForm from '../components/LoginForm'

const Login = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='LOGIN.' text='Contact GLX Travel' />
            <LoginForm />
            <Footer/>
        </div>
    )
}

export default Login

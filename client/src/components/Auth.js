import React, { useState, useContext } from "react"
import AuthForm from "./AuthForm.js"
import { UserContext } from '../context/UserProvider.js'

const initInputs = { username: "", password: "" }

export default function Auth() {
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    const { signup, login, errMsg} = useContext(UserContext)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSignup(e) {
        e.preventDefault()
        signup(inputs)
    }
    function handleLogin(e) {
        e.preventDefault()
        login(inputs)
    }

    return (
        <div className="auth-container">
            {!toggle ?
                <div>
                <h1>Ultimate Parks Guide</h1>
                    <AuthForm
                        handleChange={handleChange}
                        handleSubmit={handleSignup}
                        inputs={inputs}
                        btnText="Sign Up"
                        errMsg={errMsg}
                    />
                    <p onClick={() => setToggle(prev => !prev)}>Already a member?</p>
                </div>
                :
                <div>
                <h1>Ultimate Parks Guide</h1>
                    <AuthForm
                        handleChange={handleChange}
                        handleSubmit={handleLogin}
                        inputs={inputs}
                        btnText="Login"
                        errMsg={errMsg}
                    />
                    <p onClick={() => setToggle(prev => !prev)}>Not a member?</p>
                </div>
            }

        </div>

    )
}
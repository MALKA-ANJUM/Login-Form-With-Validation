import React, {useState} from "react";
import SignUpForm from "./signUpForm";
import Success from "./Success";

const Form = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false)
    const submitForm = () => {
        setFormIsSubmitted(true)
    }
    
    return (
        <div>
            {!formIsSubmitted ? <SignUpForm submitForm={submitForm}/> : <Success></Success>}
        </div>
    )

}
export default Form
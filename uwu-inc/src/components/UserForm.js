import React, { useState } from "react"

export default function UserForm (props) {
    const { change, values, submit, errors } = props;


    function onChange (evt) {
        const { name, value, checked, type } = evt.target
        const checkValue = type === "checkbox" ? checked : value
        change(name, checkValue)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    
    const termDetails = "when you fill out this information, you swear your life and rights to privacy away to uwu inc. we pinky promise we have nothing but the best intentions for your data (●⁀‿⁀●) ";
    const showTerms = () => {
        const terms = document.querySelector(".terms")
        terms.classList.toggle("hidden")
    }


    return (
        <>
            <div className="info-wrapper">
            <h3>♥ Welcome ♥ </h3>
            <div className="greeting">
            <p>To create your account, please fill out all fields: </p>
            <p>Your information is precious to us (✿◠‿◠) </p>
            </div>
            
            </div>

            <form className="form-inputs" onSubmit={ onSubmit }>
                <label> first name:
                    <input id="fname"
                        type="text"
                        name="fname"
                        placeholder="enter first name"
                        value={values.fname}
                        onChange= { onChange }
                        />
                </label>

                <div className="error">{ errors.fname }</div>

                <label> last name:
                    <input id="lname"
                        type="text"
                        name="lname"
                        placeholder="enter last name"
                        value={values.lname}
                        onChange= { onChange }
                        />
                </label>

                <div className="error">{ errors.lname }</div>

                <label>email:
                    <input id="email"
                        type="email"
                        name="email"
                        placeholder="enter email"
                        value={values.email}
                        onChange= { onChange }
                    />
                </label> 

                <div className="error">{ errors.email }</div>
                
                <label>password:
                    <input id="password"
                        type="password"
                        name="password"
                        placeholder="enter password"
                        value={values.password}
                        onChange= { onChange }
                        />
                </label>

                <div className="error">{ errors.password }</div>

                <label>confirm password:
                    <input id="confirm"
                        type="password"
                        name="confirm"
                        placeholder="confirm password"
                        value={values.confirm}
                        onChange= { onChange }
                        />
                </label>

                <div className="error">{ errors.confirm }</div>
                    
                <label> terms of service:
                    <input
                        type="checkbox"
                        name="terms"
                        onChange={ onChange }
                        checked= { values.terms }
                    />
                </label>

                <div className="error">{ errors.terms }</div>
            
                <div className="submission-wrap">
                    <button>
                        Submit
                    </button>
                </div>
                
                <button onClick={ showTerms } className="termsBtn"> terms </button>
                <p className="terms hidden">{ termDetails }</p>

            </form>


               
            
        </>
    )
}
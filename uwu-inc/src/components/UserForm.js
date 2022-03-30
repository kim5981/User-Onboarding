import React from "react"

const terms = "when you fill out this information, you swear your life and rights to privacy away to uwu inc. we pinky promise we have nothing but the best intentions for your data (●⁀‿⁀●) "

export default function UserForm (props) {
    const { change, values, submit } = props;

    function onChange (evt) {
        const { name, value } = evt.target
        change(name, value)
    }

    return (
        <>
            <div className="info-wrapper">
            <h3>♥ Welcome ♥ </h3>
            <p>To create your account, please fill out all fields: </p>
            <p className="*">Your information is precious to us <br/> (✿◠‿◠) </p>
            </div>

            <form className="form-inputs" onSubmit={ submit }>
                <label> first name:
                    <input id="fname"
                        type="text"
                        name="fname"
                        placeholder="enter first name"
                        value={""}
                        onChange= { onChange }
                        />
                </label>

                <label> last name:
                    <input id="lname"
                        type="text"
                        name="lname"
                        placeholder="enter last name"
                        value={""}
                        onChange= { onChange }
                        />
                </label>

                <label>email:
                    <input id="email"
                        type="email"
                        name="email"
                        placeholder="enter email"
                        value={""}
                        onChange= { onChange }
                    />
                </label> 
                
                <label>password:
                    <input id="password"
                        type="password"
                        name="password"
                        placeholder="enter password"
                        value={""}
                        onChange= { onChange }
                        />
                </label>

                <label>confirm password:
                    <input id="confirm"
                        type="password"
                        name="confirm"
                        placeholder="confirm password"
                        value={""}
                        onChange= { onChange }
                        />
                </label>
                    
                <label> terms of service:
                    <input
                        type="checkbox"
                        name="terms"
                        onChange={ onChange }
                        checked= { "" }
                    />
                </label>
            
                <div className="submission-wrap">
                    <button>
                        Submit
                    </button>
                </div>
                
            </form>
            
        </>
    )
}
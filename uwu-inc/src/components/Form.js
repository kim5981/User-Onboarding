import React from "react"

const terms = "when you fill out this information, you swear your life and rights to privacy away to uwu inc. we pinky promise we have nothing but the best intentions for your data (●⁀‿⁀●) "
export default function Form () {
    return (
        <>
            <div className="info-wrapper">
            <h3>♥ Welcome ♥ </h3>
            <p>To create your account, please fill out all fields: </p>
            <p className="*">Your information is precious to us <br/> (✿◠‿◠) </p>
            </div>
            <form className="form-inputs">
                <label> name:
                    <input id="name"
                        type="text"
                        placeholder="type your name here"
                        value={""}
                        />
                </label>

                <label>email:
                    <input id="email"
                        type="email"
                        placeholder="please enter your email"
                        value={""}
                    />
                </label> 
                
                <label>password:
                    <input id="password"
                        type="password"
                        placeholder="enter your password"
                        value={""}
                        />
                </label>
                    
                <label> terms of service:
                    <input
                        type="checkbox"
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
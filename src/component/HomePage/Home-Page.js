import React from 'react';
import './Home-Page.css';


const HomePage = (props) => {
    console.log(props)
    return(
        <div className='homepage bg-lightest-blue'>
            <button
                className= 'pa3 ba b--green bg-white pointer dim'
                onClick={props.signIn}
            >Log In</button>
             {/* <button
                className= 'pa3 ba b--green bg-white pointer dim'
                onClick={props.signIn}
            >Sign Up</button> */}
        </div>
    )
}
export default HomePage;
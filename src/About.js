import React from "react"

function About(props) {

    return(
        <div className="about-component">
            <div className="about-inner">
                <img src="https://image.flaticon.com/icons/svg/271/271203.svg" width="25px" className="close-modal" onClick={props.toggle}/>
                <p className="about-text">This App was written in React with MongoDB & Express as the Backend. This App saves directly to your clipboard, if that lost you some important data
                please check <a href="https://www.addictivetips.com/windows-tips/view-clipboard-history-on-windows-10/">here</a> for recovery advice! (disabled for now)
                <br />
                <br />
                If you have any questions, concerns, or just generally want to contact me, please reach out on <a href="https://github.com/niklasbec">Github</a>.
                <br />
                <br />
                <strong>If this is seen by potential employers, please hire me!</strong>
                </p>
            </div>
        </div>
 
)}

export default About
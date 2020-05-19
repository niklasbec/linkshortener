import React, {useEffect} from "react"
import Loader from "./BeeLoader"
import axios from "axios"


function Link(props) {

    
    let url = props.history.location.pathname
    url = url.split("")
    url.shift()
    url = url.join("")

    function windowOpen(url, name, specs) {
        if (!url.match(/^https?:\/\//i)) {
            url = 'http://' + url;
        }
        return window.open(url, name, specs);
    }

    useEffect(() => {
        axios.get(`https://bee-short.herokuapp.com/api/url/${url}`)
        .then((res) => {
            windowOpen(res.data.url, "_self")
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    return(
        <div className="link-component">
             <Loader/>
        </div>
 
)}

export default Link
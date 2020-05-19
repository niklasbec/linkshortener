import React, {useEffect} from "react"
import Loader from "./BeeLoader"
import axios from "axios"
import { useHistory } from 'react-router-dom'


function Link(props) {

    let history = useHistory()
    console.log(history);
    let url = props.history.location.pathname
    url = url.split("")
    url.shift()
    url = url.join("")

    useEffect(() => {
        axios.get(`https://bee-short.herokuapp.com/api/url/${url}`)
        .then((res) => {
            window.open(res.data.url, "_self");
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
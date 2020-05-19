import React, {useState} from 'react';
import './App.css';
import axios from "axios"

function App() {

  const [url, setUrl] = useState({
    url: ""
  })
  const [shortUrl, setShortUrl] = useState({
    url: ""
  })
  const [errorToggle, setErrorToggle] = useState(false)
  const [successToggle, setSuccessToggle] = useState(false)

  function copyToClipboard(text) {
    
    if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        }
        catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        }
        finally {
            document.body.removeChild(textarea);
        }
    }
}

  const handleChange = e => {
    setUrl({
        [e.target.name]: e.target.value
      })
}

const keyDown = e => {
  if(e.keyCode == 13) {
    axios.post("", {url: url.url})
    .then((res) => {
      setUrl({url: ""})
      setShortUrl({url: res.data.url})
      copyToClipboard(shortUrl.url)
      setSuccessToggle(true)
      setTimeout(() => {
        setSuccessToggle(false)
      }, 3000)
    })
    .catch((err) => {
      console.log(err)
      setErrorToggle(true)
      setTimeout(() => {
        setErrorToggle(false)
      }, 3000)
    })
  }
}

  const handleSubmit = e => {
      e.preventDefault()
    axios.post("", {url: url.url})
    .then((res) => {
      setUrl({url: ""})
      setShortUrl({url: res.data.url})
      copyToClipboard(shortUrl.url)
      setSuccessToggle(true)
      setTimeout(() => {
        setSuccessToggle(false)
      }, 3000)
    })
    .catch((err) => {
      console.log(err)
      setErrorToggle(true)
      setTimeout(() => {
        setErrorToggle(false)
      }, 3000)
    })
  }

  return (
    <div className="App">
    <div className="logo-div">
    <img className="logo" src="https://image.flaticon.com/icons/png/512/2657/2657849.png" alt="logo of a bee" />
    <h1>beeshort</h1>
    </div>
    {errorToggle ? <div className="error"><p>There was an error, please try again later.</p></div> : null}
    {successToggle ? <div className="success"><p>Success! Link copied to clipboard.</p></div> : null}
    <div className="shorten-flex">
      <input className="shortener-input" name="url" value={url.url} onChange={handleChange} onKeyDown={keyDown}/>
      <div className="a">
        <a onClick={handleSubmit}>Shorten URL</a>
      </div>
    </div>
    </div>
  );
}

export default App;

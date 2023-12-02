// create your App component here

import React, { useState, useEffect } from "react";

function App(){
    const [posts, setPosts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const url = "https://dog.ceo/api/breeds/image/random"

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                setPosts(data)
                setIsLoaded(true)
            })
    }, [])

    if(!isLoaded){
        return <p>Loading...</p>
    }

    return (
        <img src={posts.message} alt = "A Random Dog"/>
    )
}

export default App;
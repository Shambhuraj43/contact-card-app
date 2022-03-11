import React, { useState, useEffect } from 'react';
import './App.css';
import ContactCard from './contactCard'

const App = () => {

  //State variable: holds the results
  //results array get set to null initially
  const [results, setResults] = useState([]);

  //Hook
  //Gets called when the component first loads
  //Does an api call
  //gets results (contact information) 
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then(response => response.json())  //Converts to json
      .then(data => {
        console.log(data)
        setResults(data.results)
      });
  }, [])


  return (
    <div>
      {
        //Using props
        //Iterates over results array
        //get the individual user (result)
        results.map((result, index) => {
          return (
            <ContactCard key={index}
              avatarUrl={result.picture.large}
              name={result.name.first}
              email={result.email}
              age={result.dob.age} />
          )
        })
      }
    </div>

  )

}

export default App;
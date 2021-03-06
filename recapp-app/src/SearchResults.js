import React, { useState, useEffect } from "react";
import ResourceCard from "./Components/ResourceCard/ResourceCard";
import Footer from "./Components/Footer/Footer";

export function SearchResults({ userValue }) {
  const [results, setResults] = useState([]);
  const [resultsMessage, setResultsMessage] = useState(`Showing results for '${userValue}'...`)

  useEffect(() => {
    console.log(userValue);
    try {
      async function getData() {
        const response = await fetch(`http://localhost:5500/resources/search?tags=${userValue}`);
        const data = await response.json();
        setResults(data.payload)
        console.log(data)
      }
      getData();
    } catch (error) {

    }
    setResultsMessage(`Showing results for '${userValue.replace(/[^0-9a-z]/gi, '')}'...`)
  }, [userValue]);

  const seen = []
  return (
    <div>
      <h2 className="page--header">Search Results:</h2>
      <h4 className="page--text">{resultsMessage}</h4>
      <div>
        {
          results.map(function (term) {
            if (seen.includes(term.topic + term.week)) {
            return seen.push(term.topic + term.week)
            }
            return (
              <ResourceCard
                key={term.id}
                resourcesLink={term.link}
                resourcesTopic={term.topic}
                resourcesWeek={term.week}
                resourcesValue={term.value}
                resourcesImage={term.images}
              />
            );
          })
        }
      </div>
      <Footer />
    </div>
  );
}

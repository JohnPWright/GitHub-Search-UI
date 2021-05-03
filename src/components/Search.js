import React, { useState, useEffect } from 'react';
import Repository from "./Repository";
import Header from "./Header";
import SearchBar from "./SearchBar";


const Search = () => {
    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);
    const [searching, setSearching] = useState(false);
    const [error, setError] = useState(null);
    const [searched, setSearched] = useState(false);


    useEffect(() => {
        setError(null);
        if (searching) {
            fetch(`https://api.github.com/orgs/${term}/repos`)
                .then(res => res.json())
                .then(results => {
                    if (results.message === "Not Found") {
                        setError(results);
                        return;
                    }
                    setResults(results);
                    setSearched(true);
                });
                setSearching(false);
        };

    }, [searching]);


    const renderedError = (error) ? (
        <div>
            Error: {error.message}
        </div>
    ) : null;


    const renderedNoResults = ( ! error && searched && results.length === 0) ? <p className="center">No Results</p> : null;

    const renderedResult = (! error && results.length > 0) ? results.map(result => 
        <Repository key={result.id} result={result} />
    ) : (renderedNoResults);

    
    const buttonText = (!searching) ? "Search" : "Loading...";

    const onChangeTerm = (e) => {
        setTerm(e.target.value);
    };
    
    const onSearchClick = () => {
        setSearching(true);
    };

    const onResetClick = () => {
        setResults([]);
        setTerm("");
        setSearched(false);
        setError(null)
        
    };
    
    
    return (
        <div className="container">
            <div className="center">
                <Header title="GitHub Repository Search" />
                {renderedError}
                <div>
                    <SearchBar
                        term={term}
                        onChangeTerm={onChangeTerm}
                        onSearchClick={onSearchClick}
                        onResetClick={onResetClick}
                        buttonText={buttonText}
                    />
                    <div className="flex">
                        <hr className="left-line-break" />
                        <div className="margin-h">Results</div>
                        <hr className="right-line-break" />
                    </div>
                </div>
            </div>
            <div>
                {renderedResult}
            </div>
        </div>  
    );
};

export default Search;
import React, { useState, useEffect } from "react";
import App from "../App";

export default function SelectedContact({ selectedContactId, setSelectedContantactId }) {
    const [selectedContact, setSelectedContact] = useState(null);
    useEffect(() => {
        async function fetchContact() {
            try{
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const result = await response.json();
                setSelectedContact(result);
                console.log('result: ', result);
            } catch (error) {console.error(error);}
        }
        fetchContact();
    }, []);
    return (selectedContact ? (<div>
          <h1 className="logo">The Contact Selected is : {selectedContact.name}</h1>
          <p>Their loved ones feel safest at: {selectedContact.address.suite} {selectedContact.address.street} {selectedContact.address.city}</p>
          <h2>Their favorite food is: {selectedContact.company.catchPhrase}</h2>
          <button onClick={() => {location.reload()}}>execute order 66</button>
        </div>) : (<div>Slow down a sec, goddamn...</div>));
};
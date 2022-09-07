import "./App.css";
import React from "react";
import Nav from "./Nav";
import AttendeesList from "./AttendeesList";
import LocationForm from "./LocationForm";
import ConferenceForm from "./ConferenceForm";
import AttendForm from "./AttendForm";

function App(props) {
    if (props.attendees === undefined) {
        return null;
    }
    return (
        <>
            <Nav />
            <div className="container">
                <AttendForm />
                {/* <LocationForm /> */}
                {/* <ConferenceForm /> */}
                {/* <AttendeesList attendees={props.attendees} /> */}
            </div>
        </>
    );
}

export default App;

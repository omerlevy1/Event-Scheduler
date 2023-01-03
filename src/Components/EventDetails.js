import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import EventList from "../App";

function EventDetails() {
    const params = useParams();
    const {events, setEvents} = useContext(EventList);
    const [change, setChange] = useState();
    const index = params.index;
    const [render, setRender] = useState(false);
    function edit(key) {
        events[index][key] = change;
        setEvents(events);
        setRender(!render)
    }

    console.log("rendered")

return(
    <div id="EventDetails">
        <ul id="details" key={params.index}>
            <li id="detailsLi" key='EventName'><span>Event's Name:</span>{events[index].EventName}</li>
            <li id="detailsLi" key='Description'><span>Description:</span>{events[index].Description}</li>
            <li id="detailsLi" key='StartDate'><span>Start Date:</span>{events[index].StartDate}</li>
            <li id="detailsLi" key='EndDate'><span>End Date:</span>{events[index].EndDate}</li>
            <div><input type="text" onCange={e => setChange(e.target.value)}/></div>
        </ul>
        <div id="details">
                <button className="editButton" onClick={() => edit("EventName")}>Change Event Name</button>
                <button className="editButton" onClick={() => edit("Description")}>Change Event Description</button>
                <button className="editButton" onClick={() => edit("StartDate")}>Change Start Date</button>
                <button className="editButton" onClick={() => edit("EndDate")}>Change End Date</button>
        </div>
         </div>
)
}

export default EventDetails
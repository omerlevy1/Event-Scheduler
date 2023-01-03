// import {useState, useContext} from 'react'

function EventList(props){

    function deleteEvent(index){
        props.setFormData(props.formData.filter((event, eventIndex) =>index!==eventIndex))
            }

    return(
        <ul className='eventListReturn'>
{props.formData.map((item,index)=>{return <p key = {index}>{item.eventName} {item.eventDescription} {item.startDate} {item.endDate}  <button onClick={()=>deleteEvent(index)}>DELETE</button></p>})}

       <p></p>
</ul>
    )
}

export default EventList
import { useEffect, useState } from 'react';
import React from 'react';

// pulls the latest events from Greg Smith's S3 bucket
// his server runs a daily job to update latest events
// this should be replaced by a proper Wordpress plugin
// that pulls dynamically from Meetup.com
async function getEvents() {
    const url = 'https://devcybiko.s3.amazonaws.com/hackrva/widget.html'
    return (await fetch(url)).text()
}

export default function (): JSX.Element {
    const [upcomingEvents, setUpcomingEvents] = useState("")

    useEffect(() => {
        getEvents().then(setUpcomingEvents)
    }, [])

    if (!upcomingEvents) return <p>Fetching events...</p>

    return (
        <>
            <div className="event-container">
                <h1>Upcoming Events</h1>
                <div dangerouslySetInnerHTML={{ __html: upcomingEvents }}></div>
                Learn More at <a target="meetup" href="https://www.meetup.com/hackrva-meetup">Meetup.com</a>
            </div>
        </>
    )
}

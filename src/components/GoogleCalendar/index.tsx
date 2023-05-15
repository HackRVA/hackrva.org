import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

let calendars = [
    { calendarId: "hackrva.org_fihosi84pjcuriel6b1ba4qmo8@group.calendar.google.com" },
    {
        calendarId: "dija7vd1cl84t7njt64oqc32olnhg60g@import.calendar.google.com",
        color: "#B241D1", //optional, specify color of calendar 2 events
    },
];

export default function () {
  const { siteConfig } = useDocusaurusContext();
  return (
        <div>
            <Calendar apiKey={siteConfig.customFields.HACKRVA_GOOGLE_API_KEY} calendars={calendars} />
        </div>
    );
}

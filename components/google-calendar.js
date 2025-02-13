export default function GoogleCalendar(ctx) {
  let apiKey = ctx.attributes.apiKey || "";
  let calendars = [
    {
      calendarId:
        "hackrva.org_fihosi84pjcuriel6b1ba4qmo8@group.calendar.google.com",
    },
    {
      calendarId: "dija7vd1cl84t7njt64oqc32olnhg60g@import.calendar.google.com",
      color: "#B241D1",
    },
  ];

  return () => `
    <div>
      <iframe src="https://calendar.google.com/calendar/embed?src=${encodeURIComponent(calendars[0].calendarId)}&ctz=America/New_York"
        style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
    </div>
  `;
}

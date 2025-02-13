export default function UpcomingEvents(ctx) {
  let upcomingEvents = "Fetching events...";
  if (false) {
    // pulls the latest events from Greg Smith's S3 bucket
    // his server runs a daily job to update latest Events
    // this should be replaced by a proper Wordpress plugin
    // that pulls dynamically from Meetup.com
    fetch("https://devcybiko.s3.amazonaws.com/hackrva/widget.html")
      .then((response) => response.text())
      .then((html) => {
        upcomingEvents = html;
        ctx.update();
      });

    return () => `
    <div class="event-container">
      <h1 class="title is-4">Upcoming Events</h1>
      <div>${upcomingEvents}</div>
      <p>Learn More at <a target="meetup" href="https://www.meetup.com/hackrva-meetup">Meetup.com</a></p>
    </div>
  `;
  }
  return () => `
    <div class="adContainer">
      <div>
        <h3 class="title is-4">Upcoming Events</h3>
        <p> see <a href="https://www.meetup.com/HackRVA-Meetup/">meetup.com/HackRVA-Meetup/</a></p>
      </div>
    </div>
  `;
}

import { registerElement } from "https://cdn.jsdelivr.net/gh/dfirebaugh/bop@main/src/bop.js";

import TopNav from "./components/top-nav.js";
import HomePageHeader from "./components/home-page-header.js";
import FooterElement from "./components/footer-element.js";
import MapLocator from "./components/map-locator.js";
import HomePageFeatures from "./components/home-features.js";
import OpenHousePromotion from "./components/promotions/open-house.js";
import MonthlyMemberMeeting from "./components/promotions/monthly-meeting.js";
import UpcomingEvents from "./components/promotions/upcoming-events.js";
import AssertionsElement from "./components/assertions-element.js";
import GoogleCalendar from "./components/google-calendar.js";
import PaypalButtons from "./components/paypal-buttons.js";

registerElement(TopNav);
registerElement(HomePageHeader);
registerElement(FooterElement);
registerElement(MapLocator);
registerElement(HomePageFeatures);
registerElement(OpenHousePromotion);
registerElement(MonthlyMemberMeeting);
registerElement(UpcomingEvents);
registerElement(AssertionsElement);
registerElement(GoogleCalendar);
registerElement(PaypalButtons);

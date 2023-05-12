import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import About from '@site/src/components/About';
import Locator from '../components/Locator';
import Calendar from '../components/Calendar';
import AboutAssertions from '../components/About/Assertions';
import HackerspaceExplanation from '../components/About/Explanation';
import PaypalButtons from '../components/PaypalButtons';
import UpcomingEvents from '../components/UpcomingEvents';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "highlight" tag to our <Highlight /> component!
  // `Highlight` will receive all props that were passed to `highlight` in MDX
  aboutPage: About,
  aboutAssertions: AboutAssertions,
  hackerspaceExplanation: HackerspaceExplanation,
  locator: Locator,
  calendar: Calendar,
  paypalButtons: PaypalButtons,
  eventsWidget: UpcomingEvents,
};

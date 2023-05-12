import React from 'react';

export default function Locator(): JSX.Element {
    return (
            <iframe
                className="calendar"
                width="100%"
                height="300"
                // frameBorder="0"
                // scrolling="no"
                // marginheight="0"
                // marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1600%20E%20Roseneath%20Rd%20Richmond,%20va%2023231+(HackRVA)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
    );
}

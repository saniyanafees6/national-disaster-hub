import React from 'react';

class PartnerInfo extends React.Component {
  state = {};

  render() {
    return (
      <div className="right">
        <div className="partner-info">
          <h2>What does it mean to become an NDH Partner?</h2>
          <br />
          <p>
            It means you represent an organization or are an individual who
            wants to help unite victims of natural and manmade disasters with
            their friends, families, and loved ones.
            <br />
            <br />
            Becoming an NDH Partner is free and gives you unlimited access to
            our public API. This access will allow you to integrate our check-in
            database with your own technologies, subsequently furthering the
            efforts in disater prevention research by contributing to the pool
            of data to analyze.
            <br />
            <br />
            As this application grows, individuals across the world will know
            where to look as a chief effort to ensure victim's are safe and out
            of the disaster area.
          </p>
        </div>
      </div>
    );
  }
}

export default PartnerInfo;

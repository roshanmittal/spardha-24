import React from 'react';
import './Sponsors.css';

const SPONSORS = [
  { name: 'Amul', website: 'https://amul.com', logo: '/images/sponsors/after2023/amul.png' },
  { name: 'Axis Bank', website: 'https://www.axisbank.com', logo: '/images/sponsors/after2023/axis-bank.png' },
  { name: 'Beardo', website: 'https://www.beardo.in', logo: '/images/sponsors/after2023/beardo.png' },
  { name: 'ixigo', website: 'https://www.ixigo.com', logo: '/images/sponsors/after2023/ixigo.png' },
  { name: 'Nestlé', website: 'https://www.nestle.in', logo: '/images/sponsors/after2023/nestle.png' },
  { name: 'Royal Enfield', website: 'https://www.royalenfield.com', logo: '/images/sponsors/after2023/royal-enfield.png' },
  { name: 'Volini', website: 'https://www.volini.in', logo: '/images/sponsors/after2023/volini.png' },
  { name: 'Real', website: 'https://www.realfruitpower.com', logo: '/images/sponsors/after2023/real.png' },
  { name: 'Traya', website: 'https://traya.health', logo: '/images/sponsors/after2023/traya.png' },
  { name: 'NTPC (Vindhyachal)', website: 'https://www.ntpc.co.in', logo: '/images/sponsors/after2023/ntpc.png' },
  { name: 'KRAFTON', website: 'https://www.krafton.com', logo: '/images/sponsors/after2023/krafton.png' },
  { name: 'SAIL', website: 'https://www.sail.co.in', logo: '/images/sponsors/after2023/sail.png' },

  // Provided local brands/placeholders
  { name: 'Festee', website: '#', logo: '/images/sponsors/after2023/festee.png' },
  { name: 'The Chaskaa', website: '#', logo: '/images/sponsors/after2023/the-chaskaa.png' },
  { name: 'Kaiyo', website: '#', logo: '/images/sponsors/after2023/kaiyo.png' },
  { name: 'Vishal Bakers', website: '#', logo: '/images/sponsors/after2023/vishal-bakers.png' },
  { name: 'Garlic Facctry', website: '#', logo: '/images/sponsors/after2023/garlic-facctry.png' },
  { name: 'The Cric Store', website: '#', logo: '/images/sponsors/after2023/the-cric-store.png' },
  { name: 'Govind Vastralaya', website: '#', logo: '/images/sponsors/after2023/govind-vastralaya.png' },
  { name: 'May I Help You? (Mayank Shah)', website: '#', logo: '/images/sponsors/after2023/may-i-help-you.png' },
  { name: 'NAB', website: '#', logo: '/images/sponsors/after2023/nab.png' },
  { name: "De' Once More Restaurant", website: '#', logo: '/images/sponsors/after2023/de-once-more.png' },
  { name: 'Sports Villa', website: '#', logo: '/images/sponsors/after2023/sports-villa.png' },
  { name: 'Rento – Make Rides Easier', website: '#', logo: '/images/sponsors/after2023/rento.png' },
  { name: 'Piplani Cycle & Co.', website: '#', logo: '/images/sponsors/after2023/piplani-cycle.png' },
  { name: 'Cimaya', website: '#', logo: '/images/sponsors/after2023/cimaya.png' },
  { name: 'Holly Waffle', website: '#', logo: '/images/sponsors/after2023/holly-waffle.png' },
  { name: 'Safe House', website: '#', logo: '/images/sponsors/after2023/safe-house.png' },
  { name: 'Shrawan Care', website: '#', logo: '/images/sponsors/after2023/shrawan-care.png' },
];

function initialsOf(name) {
  const words = name.replace(/[^A-Za-z0-9 ]/g, '').trim().split(/\s+/).slice(0, 2);
  return words.map(w => (w[0] ? w[0].toUpperCase() : '')).join('');
}

export default function Sponsors() {
  return (
    <div className="sponsors-page">
      {/* Hero Section with Sports Arena Image */}
       
      <section className="sponsors-hero">
        
        {/* <div className="hero-image"> */}
          <div className="hero-overlay"></div>
          {/* <div className="hero-content"> */}
            <h1>Our Valued Sponsors</h1>
            <p>Powering exceptional sporting experiences</p>
          {/* </div> */}
        {/* </div> */}
      </section>

      {/* Transition Element */}
      <div className="transition-curve"></div>

      {/* Intro Text Section */}
      <section className="sponsors-intro">
        <div className="container">
          <h2>Our Past Sponsors</h2>
          <p>
            “With Spardha, our annual sports fest, 
            we strive to bridge students with industry while celebrating the spirit of sports. 
            Our sponsors make this possible by fueling our vision with both resources and experience.”
          </p>
        </div>
      </section>

      {/* Sponsors Grid Section */}
      <section className="sponsors-main">
        <div className="container">
          <div className="sponsors-grid">
            {SPONSORS.map((sponsor) => (
              <div key={sponsor.name} className="sponsor-card">
                <a
                  href={sponsor.website || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${sponsor.name}`}
                >
                  <div className="card-inner">
                    {sponsor.logo ? (
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        loading="lazy"
                        className="sponsor-logo"
                      />
                    ) : (
                      <div className="logo-fallback">
                        {initialsOf(sponsor.name)}
                      </div>
                    )}
                  </div>
                  <span className="sponsor-name">{sponsor.name}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
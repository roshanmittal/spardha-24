import React, { useState } from "react";
import styles from "./Espardha.module.css";
import poster from "./img/poster24.jpg";
import controler from "./img/control.png";
import pdf from "./ESPARDHA24.pdf";
import valorent from "./img/valorent.png";
import bgmi from "./img/bgmi.png";
import bullet_echo from "./img/bulletecho.png";
import road_to_valor from "./img/roadtovalor.png";
import realcricket from "./img/realcricket.png";
import polygonb from "./img/poly.png";
import polygonw from "./img/polyw.png";
import polygonwi from "./img/polywi.png"
import valorant_rulebook from "./rulebook/VALORANT_RULEBOOK.pdf";
import bgmi_rulebook from "./rulebook/BGMI_RULEBOOK.pdf";
import bullet_echo_rulebook from "./rulebook/Bullet_Echo_Rulebook.pdf";
import road_to_valor_rulebook from "./rulebook/Road_to_valor_rulebook.pdf";
import realcricket_rulebook from "./rulebook/Real_Cricket_rulebook.pdf";

const eventsData = [
  {
    title: "Valorant E-Spardha 2025",
    img: valorent,
    fee: "₹100/Person",
    regLink: "https://forms.gle/fvo7NtGHoXLgGNcP6",
    rulebook: valorant_rulebook,
  },
  {
    title:"BGMI E-Spardha \n2025",
    img: bgmi,
    fee: "₹110/Person",
    regLink: "https://forms.gle/E4qDU2kADYZuLL7Z9",
    rulebook: bgmi_rulebook,
  },
  {
    title: "Bullet Echo E-Spardha 2025",
    img: bullet_echo,
    fee: "Free",
    regLink: "https://forms.gle/Ew8GVSMY1e2xCetr6",
    rulebook: bullet_echo_rulebook,
  },
  {
    title: "Road To Valor E-Spardha 2025",
    img: road_to_valor,
    fee: "Free",
    regLink: "https://forms.gle/BxqY8G1YXY45qMMN8",
    rulebook: road_to_valor_rulebook,
  },
  {
    title: "Real Cricket E-Spardha 2025",
    img: realcricket,
    fee: "Free",
    regLink: "https://forms.gle/jHcXKDf5tSNLek386",
    rulebook: realcricket_rulebook,
  },
];

const Espardha = () => {
  const [isCardVisible, setCardVisible] = useState(false);

  const handleRegisterClick = () => setCardVisible(true);
  const handleBackClick = () => setCardVisible(false);

  return (
    <>
  <crousel />

  <div className={styles.outermostdiv}>
    
    <img src={polygonw} alt="polygon" className={styles.polywhite} />
  <img src={polygonb} alt="polygon" className={styles.polygonbg} />
  <img src={polygonwi} alt="polygon" className={styles.polywi} />
    

    <section id="espardha" className={`${styles.ftco_section} ${styles.events}`}>
      <div className={styles.title}>
        <h2>E-Spardha</h2>
      </div>

      {/* Poster & Description */}
      <div className={styles.maindiv}>
        <div className={styles.poster}>
          <img src={poster} alt="poster" width="300px" height="400px" />
        </div>

        <div className={styles.content}>
          <div className={styles.top}>
            <img
              src={controler}
              style={{ filter: "invert(100%)" }}
              alt="controler"
            />
          </div>

          <div className={styles.middle}>
            <div className={styles.discription}>
              Join us as we write history in the world of esports. Gather your
              team, sharpen your skills, and mark your calendars because Espardha
              is about to set the gaming world on fire! 🔥
            </div>
            <p style={{ color: "white" }}>🏆 #Espardha2025 🎮</p>

            {/* Buttons */}
            <div className={styles.buttons}>
              <button
                className={`${styles.registerbtn} ${styles.btnclass}`}
                style={{ display: isCardVisible ? "none" : "block" }}
                onClick={handleRegisterClick}
              >
                Register Now
              </button>

              <button
                className={`${styles.backbtn} ${styles.btnclass}`}
                style={{ display: isCardVisible ? "block" : "none" }}
                onClick={handleBackClick}
              >
                Back
              </button>

              <a
                href={pdf}
                className={`${styles.btnclass} ${styles.downloadBtn}`}
                style={{ display: isCardVisible ? "none" : "inline-block" }}
                download
              >
                Download Brochure
              </a>
            </div>
          </div>

          {/* Event Cards */}
          {isCardVisible && (
            <div className={styles.cardmaindiv}>
              {eventsData.map((event, index) => (
                <a
                  href={event.regLink}
                  className={styles.formlink}
                  target="_blank"
                  key={index}
                >
                  <div className={styles.cardcon}>
                    <div className={styles.cardimg}>
                      <img src={event.img} alt={`${event.title} poster`} />
                    </div>
                    <div className={styles.cardbottom}>
                      <h4>{event.title}</h4>
                      <div className={styles.prizepool}>
                        <h6>Registration Fee: {event.fee}</h6>
                        <p>Register Here</p>
                        <a
                          href={event.rulebook}
                          className={styles.btnclass}
                          download
                        >
                          Rulebook
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>

    {/* 🔹 Bottom White Polygon */}
    
  </div>

</>

  );
};

export default Espardha;

import './Contact.css';
import Card from './Card/Card';
import HomeContact from './MiddleSection/Contact';


const Contact = () => {

  return (
    <section id="contactus" className="contactus-bg"  style={{
    backgroundImage: "url(/images/bg/hero-bg1-blur.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
      <div className="conveners-block">
       
        <Card/>
      </div>

       <div style={{ backgroundColor: "rgb(23, 30, 41)"}}>
  <HomeContact/>
</div>
    </section>
  );
};

export default Contact;

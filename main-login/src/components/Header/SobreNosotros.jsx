import React from 'react';
import './SobreNosotros.css'
import { Link } from 'react-router-dom';
export function SobreNosotros() {

  return (
    
<section>
 
    <h1>About US</h1>
 
    <main>
        <section className="no-box">
          <h2>Our History</h2>
          <p>We are a passionate team of video game enthusiasts with the mission of providing the best online video game search experience. We started as a small project and hope to become your favorite website for your games.</p>
        </section>

        <section className="no-box">
          <h2>Our team</h2>
          <ul>
            <li><img id="avatares" src="1.jpg"></img></li>
            <li>Roland:<br /> Skilled programmer in search algorithms.</li>
            <li><img id="avatares" src="3.jpg"></img></li>
            <li>Akari:<br /> Designer of intuitive and appealing interfaces.</li>
            <li><img id="avatares" src="2.jpg"></img></li>
          </ul>
        </section>

        <section className="no-box">
          <h2>Contact us</h2>
          <p>
Feel free to get in touch with us if you have any questions or suggestions. You can reach us at JuegosFlix@gmail.com. ¡We are here to help you!</p>
        </section>
      </main>
  
      <footer>
    <p>&copy; 2023 JuegosFlix. All rights reserved.</p>
    <Link to={'/PrivacyNotice'}>Privacy Notice</Link><br></br>
    <Link to={'/LegalNotice'}>Legal Notice</Link>
  </footer>
</section>
      
    
  );
};



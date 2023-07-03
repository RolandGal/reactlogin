import React from 'react';
import { Link } from 'react-router-dom';
export function LegalNotice() {

  return (
    
<section>
    <main>

    <h1>Legal Notice</h1>

<p>Address C/Radio Peninsular, 14 - 28660 - Madrid, cannot assume any responsibility derived from the incorrect, inappropriate, or unlawful use of the information appearing on the web pages of www.JuegosFlix.com</p>
<p>Within the limits established by law, www.JuegosFlix.com does not assume any responsibility for the lack of truthfulness, integrity, updating, and accuracy of the data or information contained on its web pages.</p>
<p>The content and information do not bind www.JuegosFlix.com or constitute any kind of legal opinion, advice, or guidance, as they are merely a service offered for informational and educational purposes.</p>
<p>The web pages of www.JuegosFlix.com may contain links to other third-party pages that www.JuegosFlix.com cannot control. Therefore, www.JuegosFlix.com cannot assume responsibility for the content that may appear on third-party pages.</p>
<p>The texts, images, sounds, animations, software, and other content included on this website are the exclusive property of www.JuegosFlix.com or its licensors. Any act of transmission, distribution, transfer, reproduction, storage, or total or partial public communication must have the express consent of www.JuegosFlix.com.</p>
<p>Likewise, to access some of the services offered by www.JuegosFlix.com through the website, you may need to provide certain personal data. In compliance with the provisions of Organic Law 15/1999, of December 13, on the Protection of Personal Data, we inform you that, by completing the forms, your personal data will be incorporated and processed in the files of Ana María Bamba Bardavío in order to provide and offer our services, as well as to inform you of website improvements. We also inform you of the possibility to exercise your rights of access, rectification, cancellation, and opposition to your personal data, free of charge, by email to info@JuegosFlix.com or at the address C/Radio Peninsular, 14 - 28660 - Madrid.</p>
      </main>
  
      <footer>
    <p>&copy; 2023 JuegosFlix. All rights reserved.</p>
    <Link to={'/PrivacyNotice'}>Privacy Notice</Link><br></br>
    <Link to={'/LegalNotice'}>Legal Notice</Link>
  </footer>
</section>

);
};
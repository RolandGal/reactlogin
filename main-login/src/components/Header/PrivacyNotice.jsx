import React from 'react';
import { Link } from 'react-router-dom';
export function PrivacyNotice() {

  return (
    
<section>
    <main>
    <h1>Privacy Notice</h1>

<p>Protection of personal data according to the LOPD JuegosFlix, in compliance with current legislation on the protection of personal data, informs that the personal data collected through the forms on the website: www.JuegosFlix.com, are included in specific automated files of JuegosFlix service users.</p>
<p>The collection and automated processing of personal data is intended for maintaining the commercial relationship and performing tasks of information, training, advice, and other activities related to JuegosFlix.</p>
<p>These data will only be transferred to entities that are necessary for the sole purpose of fulfilling the aforementioned purpose.</p>
<p>JuegosFlix takes necessary measures to ensure the security, integrity, and confidentiality of the data in accordance with the provisions of Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of individuals with regard to the processing of personal data and on the free movement of such data.</p>
<p>The user may exercise the rights of access, opposition, rectification, and cancellation recognized in the aforementioned Regulation (EU) at any time. These rights can be exercised by the user through email to: info@JuegosFlix.com</p>
<p>The user declares that all data provided by him/her are true and correct, and undertakes to keep them updated by communicating any changes to JuegosFlix.</p>
<p>Purpose of processing personal data:</p>
<p>What is the purpose of processing your personal data?</p>
<p>At JuegosFlix, we will process your personal data collected through the website for the following purposes:</p>
<p>In the event of contracting the goods and services offered through www.JuegosFlix.com, for maintaining the contractual relationship, as well as the management, administration, information, provision, and improvement of the service.
Sending requested information through the forms available on www.JuegosFlix.com.
Sending newsletters, as well as commercial communications regarding promotions and/or advertising from JuegosFlix and the sector.
We remind you that you can oppose the sending of commercial communications through any means and at any time by sending an email to the address indicated above.</p>
<p>The fields in these records must be filled out, as it is impossible to fulfill the stated purposes without providing this data.</p>

      </main>
  
      <footer>
    <p>&copy; 2023 JuegosFlix. All rights reserved.</p>
    <Link to={'/PrivacyNotice'}>Privacy Notice</Link><br></br>
    <Link to={'/LegalNotice'}>Legal Notice</Link>
  </footer>
</section>

);
};
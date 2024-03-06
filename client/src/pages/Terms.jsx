import React from 'react';
import CallToAction from '../components/CallToAction';

const Terms = () => {
  return (
    <div className="min-h-screen max-w-screen-xl mx-auto p-6 bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">Terms and Conditions</h1>

      <section className="mb-4">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Welcome to Kiran's Blog!</h2>
        <p className="text-sm md:text-base lg:text-lg">
          These terms and conditions outline the rules and regulations for the use of Kiran's Blog. By accessing this Website, we assume you accept these terms and conditions in full. Do not continue to use Kiran's Blog if you do not accept all of the terms and conditions stated on this page.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice:</h2>
        <ul className="list-disc list-inside text-sm md:text-base lg:text-lg space-y-2">
          <li>"User," "You," and "Your" refer to you, the person accessing this website and accepting the Company’s terms and conditions.</li>
          <li>"The Company," "Ourselves," "We," "Our," and "Us" refer to our Company.</li>
          <li>"Party," "Parties," or "Us" refers to both the User and ourselves.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Cookies</h2>
        <p className="text-sm md:text-base lg:text-lg">
          We employ the use of cookies. By using Kiran's Blog, you consent to the use of cookies in accordance with Kiran's Blog privacy policy.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">License</h2>
        <p className="text-sm md:text-base lg:text-lg">
          Unless otherwise stated, Kiran's Blog and/or its licensors own the intellectual property rights for all material on Kiran's Blog. All intellectual property rights are reserved.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">User Comments</h2>
        <p className="text-sm md:text-base lg:text-lg">
          This Agreement shall begin on the date hereof. Certain parts of this website offer the opportunity for 
          users to post and exchange opinions, information, material, and data. Kiran's Blog 
          does not screen, edit, publish, or review Comments prior to their appearance on the website and 
          Comments do not reflect the views or opinions of Kiran's Blog, its agents, or 
          affiliates. Comments reflect the view and opinion of the person who posts such views or opinions. 
          To the extent permitted by applicable laws, Kiran's Blog shall not be 
          responsible or liable for the Comments or for any loss cost, liability, damages, or 
          expenses caused and or suffered as a result of any use of and/or posting of and/or appearance of the 
          Comments on this website. Kiran's Blog  reserves the 
          right to monitor all Comments and to remove any Comments that it considers in its absolute 
          discretion to be inappropriate, offensive, or otherwise in breach of these Terms and Conditions.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Hyperlinking to our Content</h2>
        
        <p className="text-sm md:text-base lg:text-lg">
          The following organizations may link to our website without prior written approval: 
          
          <ul className="list-disc list-inside text-sm md:text-base lg:text-lg space-y-2">
            
            <li>Government Agencies</li>
            <li>Search engines</li>
            <li>News organizations</li>
            <li>Online directory distributors when they list us in the directory may link to our website in the same manner as they hyperlink to the websites of other listed businesses.</li>
            </ul>
            
            
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Reservation of Rights</h2>
        <p className="text-sm md:text-base lg:text-lg">
          We reserve the right at any time and in its sole discretion to request that you remove all links or any particular link to our website. You agree to immediately remove all links to our website upon such request.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Disclaimer</h2>
        <p className="text-sm md:text-base lg:text-lg">
          To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose, and/or the use of reasonable care and skill).
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Variation of Terms</h2>
        <p className="text-sm md:text-base lg:text-lg">
          Kiran's Blog is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Governing Law & Jurisdiction</h2>
        <p className="text-sm md:text-base lg:text-lg">
          These terms and conditions are governed by and construed in accordance with the laws of Nepal and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
        </p>
      </section>

      <CallToAction />
    </div>
  );
}

export default Terms;

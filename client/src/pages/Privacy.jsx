import React from 'react';
import CallToAction from '../components/CallToAction';

const Privacy = () => {
  return (
    <div className="min-h-screen max-w-screen-xl mx-auto p-6 bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">Privacy Policy</h1>

      <section className="mb-4">
        <p className="text-sm md:text-base lg:text-lg">
          Welcome to Kiran's Blog! This Privacy Policy outlines how we collect, use, and protect your information. By using <a  href='https://kiran-blg.onrender.com/' >Kiran's Blog</a> you agree to the terms and practices described herein.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Information Collection and Use</h2>
        <p className="text-sm md:text-base lg:text-lg">
          - <strong>Personal Information:</strong> We may collect personal information such as name and email address when you register on our website or subscribe to our newsletter.
          <br />
          - <strong>Usage Data:</strong> We automatically collect information about your usage of the website, including IP address, browser type, pages visited, and access times.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Cookies</h2>
        <p className="text-sm md:text-base lg:text-lg">
          - <strong>Cookies Usage:</strong> We use cookies to enhance user experience. By using Kiran's Blog website, you consent to the use of cookies in accordance with our privacy policy.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">How We Use Your Information</h2>
        <p className="text-sm md:text-base lg:text-lg">
          - <strong>Personalization:</strong> We may use your information to personalize your experience and deliver content tailored to your interests.
          <br />
          - <strong>Communication:</strong> We may use your email address to send you updates, newsletters, and respond to inquiries.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">User Comments</h2>
        <p className="text-sm md:text-base lg:text-lg">
          This Agreement shall begin on the date hereof. Certain parts of this website offer the opportunity for users to post and exchange opinions, information, material, and data. Kiran's Blog does not screen, edit, publish, or review Comments prior to their appearance on the website, and Comments do not reflect the views or opinions of Kiran's Blog, its agents, or affiliates. Comments reflect the view and opinion of the person who posts such views or opinions. To the extent permitted by applicable laws, Kiran's Blog shall not be responsible or liable for the Comments or for any loss cost, liability, damages, or expenses caused and or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website. Kiran's Blog reserves the right to monitor all Comments and to remove any Comments that it considers in its absolute discretion to be inappropriate, offensive, or otherwise in breach of these Terms and Conditions.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Hyperlinking to our Content</h2>
        <p className="text-sm md:text-base lg:text-lg">
        The following organizations may link to our website without prior written approval:
        </p>
          <ul className="list-disc list-inside text-sm md:text-base lg:text-lg space-y-2">
            <li>Government agencies</li>
            <li>Search engines</li>
            <li>News organizations</li>
            <li>Online directory distributors when they list us in the directory may link to our website in the same manner as they hyperlink to the websites of other listed businesses.</li>
          </ul>
          
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
          Kiran's Blog is permitted to revise these Terms at any time as it sees fit, and by using this Website, you are expected to review these Terms on a regular basis.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Governing Law & Jurisdiction</h2>
        <p className="text-sm md:text-base lg:text-lg">
          These terms and conditions are governed by and construed in accordance with the laws of Nepal, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="text-sm md:text-base lg:text-lg">
          If you have any questions or concerns about our Privacy Policy, please <a href="/contact-us" className="text-blue-500">contact us</a>.
        </p>
      </section>

      <CallToAction />
    </div>
  );
}

export default Privacy;

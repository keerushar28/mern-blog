import React from 'react';
import { FaPhone, FaEnvelope,  FaInstagramSquare } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen max-w-screen-xl mx-auto p-6 bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">Contact Us</h1>

      <section className="mb-4">
        <p className="text-sm md:text-base lg:text-lg">
          Have questions, suggestions, or just want to say hello? We'd love to hear from you! Contact us through the following channels:
        </p>
      </section>

      <section className="mb-4 flex items-center">
        <FaPhone className="text-2xl mr-2" />
        <p className="text-base font-semibold">Contact Number: +977-9847627788</p>
      </section>
      <section className="mb-4 flex items-center">
        <FaInstagramSquare className="text-2xl mr-2" />
        <p className="text-base font-semibold">
         <a href="https://www.instagram.com/_kiran_gtm/" >
_kiran_gtm</a>
        </p>
      </section>

      <section className="mb-4 flex items-center">
        <FaEnvelope className="text-2xl mr-2" />
        <p className="text-base font-semibold">
        Email: <a href="mailto:gautamkiran878@gmail.com" className="hover:underline hover:text-blue-500">gautamkiran878@gmail.com</a>
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Visit Us</h2>
        <p className="text-sm md:text-base lg:text-lg">
          Kiran's Blog<br />
          Pokhara-5, Parsyang, Dharapani, Kaski<br />
          33700<br />
          Nepal
        </p>
      </section>
    </div>
  );
}

export default Contact;
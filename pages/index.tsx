import React from 'react';
import Head from 'next/head';
import OptInForm from '../components/OptInForm';

const Home = () => (
  <div>
    <Head>
      <title>Mailchimp React Example</title>
      <link rel="icon" href="/favicon.png" />
      <link
        href="https://unpkg.com/tailwindcss@^1.1.3/dist/tailwind.min.css"
        rel="stylesheet"
      />
    </Head>
    <div className="mx-auto px-6 py-16 max-w-lg antialiased">
      <h1 className="pb-6 text-3xl leading-snug">Mailchimp React Example</h1>
      <p className="pb-6 text-gray-700">
        This is a form connected to a{' '}
        <a href="https://mailchimp.com" className="text-indigo-600 underline">
          Mailchimp
        </a>{' '}
        account using a{' '}
        <a href="https://statickit.com" className="text-indigo-600 underline">
          StaticKit
        </a>{' '}
        function.
      </p>
      <OptInForm />
    </div>
  </div>
);

export default Home;

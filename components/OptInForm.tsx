import React, { useState } from 'react';
import { useStaticKit, ValidationError } from '@statickit/react';
import { addToMailchimp } from '@statickit/functions';

const OptInForm: React.FC = () => {
  const client = useStaticKit();

  const [emailAddress, setEmailAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors([]);
    setIsSubmitting(true);
    let resp = await addToMailchimp(client, { emailAddress });

    switch (resp.status) {
      case 'ok':
        setIsSubmitted(true);
        break;

      case 'argumentError':
        setErrors(resp.errors);
        setIsSubmitting(false);
        break;

      default:
        setIsSubmitting(false);
        break;
    }
  };

  if (isSubmitted) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="pb-3">
        <label htmlFor="email" className="block pb-2 font-bold text-gray-800">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={emailAddress}
          onChange={e => setEmailAddress(e.target.value)}
          className="block px-4 py-3 w-full rounded bg-gray-200"
          placeholder="you@example.com"
          required
        />
        <ValidationError
          prefix="Email address"
          field="email_address"
          errors={errors}
          className="py-2 text-red-600 text-sm font-bold"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-gray-800 rounded px-6 py-3 font-bold text-white"
      >
        Join the list
      </button>
    </form>
  );
};

export default OptInForm;

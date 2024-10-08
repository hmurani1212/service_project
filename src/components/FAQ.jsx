import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
            Frequently asked questions
          </h2>
        </div>
        <div className="accordion-group" data-accordion="default-accordion">
          {[
            {
              question: "How can I reset my password?",
              answer: "To reset your password, click on 'Forgot Password?' on the login page, enter your email, and follow the instructions sent to your inbox."
            },
            {
              question: "How do I update my billing information?",
              answer: "To update your billing information, go to your account settings, navigate to 'Billing,' and edit your payment details."
            },
            {
              question: "How can I contact customer support?",
              answer: "You can contact customer support through the 'Help' section on our website or by emailing support@example.com."
            },
            {
              question: "How do I delete my account?",
              answer: "To delete your account, please contact customer support. They will assist you with the deletion process."
            }
          ].map((item, index) => (
            <div
              key={index}
              className={`accordion border border-solid border-gray-300 p-4 rounded-xl transition duration-500 ${activeIndex === index ? 'accordion-active:bg-indigo-50 accordion-active:border-indigo-600' : ''} mb-8 lg:p-4`}
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
                onClick={() => toggleAccordion(index)}
                aria-controls={`collapse-${index}`}
              >
                <h5>{item.question}</h5>
                <svg
                  className={`w-6 h-6 text-gray-900 transition duration-500 ${activeIndex === index ? 'hidden' : 'block'} accordion-active:text-indigo-600 group-hover:text-indigo-600`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M12 18V6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  className={`w-6 h-6 text-gray-900 transition duration-500 ${activeIndex === index ? 'block' : 'hidden'} accordion-active:text-indigo-600 group-hover:text-indigo-600`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                id={`collapse-${index}`}
                className={`accordion-content w-full overflow-hidden pr-4 ${activeIndex === index ? 'max-h-40' : 'max-h-0'}`}
                aria-labelledby={`heading-${index}`}
              >
                <p className="text-base text-gray-900 font-normal leading-6">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

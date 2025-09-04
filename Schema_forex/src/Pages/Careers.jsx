
import React from "react";

const Careers = () => {
  return (
    <div className="bg-[var(--bg)] text-[var(--text-color)] min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[300px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1614176710432-81bdf52f120f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Careers
          </h1>
          <nav className="mt-4">
            <ol className="flex justify-center space-x-2 text-white text-sm">
              <li>
                <a href="#" className="hover:text-[var(--accent)]">
                  Home
                </a>
              </li>
              <span>/</span>
              <li>
                <a href="#" className="hover:text-[var(--accent)]">
                  Pages
                </a>
              </li>
              <span>/</span>
              <li className="text-[var(--accent)]">Careers</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 md:px-8 bg-[var(--secondary-bg)]">
        <div className="max-w-4xl mx-auto bg-[var(--bg)] rounded-xl shadow-lg p-6 md:p-10">
          <h2 className="text-3xl font-bold mb-4">Careers</h2>

          <p className="leading-relaxed mb-6">
            We're seeking a new teammate to join our dynamic and growing team!
            You must enjoy working from home in an online environment and be
            capable of adapting your role in line with the organisation's needs.
          </p>

          <p className="leading-relaxed mb-6">
            Are you keen to join an emerging force in the forex industry and
            help our organisation grow rapidly over the coming years? Then we
            look forward to hearing from you! The available role is full time,
            8hrs/day, 5 days/wk. The role is online with all communication
            between our team conducted via Skype and email.
          </p>

          <h3 className="text-xl font-semibold mb-3">Role Responsibilities</h3>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>Support &amp; sales via live chat and email</li>
            <li>Follow up potential new clients via email</li>
          </ul>

          <p className="leading-relaxed mb-6">
            There is significant scope to grow within our organisation as we
            continue our march towards being the market leader in forex related
            technology.
          </p>

          <h3 className="text-xl font-semibold mb-3">
            Candidate Requirements
          </h3>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>Perfect written English</li>
            <li>
              Extensive sales and support experience via email and live chat
            </li>
            <li>A basic knowledge of forex and/or financial markets</li>
            <li>Available to work in the European or US timezones</li>
          </ul>

          <p className="leading-relaxed mb-6">
            We provide extensive internal training to ensure you are fully
            equipped to handle the complexities of this position. Remuneration
            is negotiable and will be discussed during the first interview.
          </p>

          <div className="bg-[var(--secondary-bg)] rounded-lg p-4 border border-gray-300">
            <p>
              Please send your application including a cover letter explaining
              why you would be a great addition to our team and CV to{" "}
              <a
                href="mailto:support@acordanresearch.com"
                className="text-[var(--accent)] font-semibold hover:underline"
              >
                support@acordanresearch.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;

import React from 'react';
import LegalPage from '../components/common/LegalPage';

const CookiePolicy: React.FC = () => {
  return (
    <LegalPage
      title="Cookie Policy"
      lastUpdated="March 15, 2024"
    >
      <section>
        <p>
          <strong>Introduction</strong>
        </p>
        <p>
          This Cookie Policy explains how Learn Scratch Malaysia uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
        </p>
      </section>

      <section>
        <p>
          <strong>What Are Cookies?</strong>
        </p>
        <p>
          Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
        </p>
      </section>

      <section>
        <p>
          <strong>Types of Cookies We Use</strong>
        </p>
        <p>
          <strong>Essential Cookies</strong>
        </p>
        <p>
          These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
        </p>

        <p>
          <strong>Performance Cookies</strong>
        </p>
        <p>
          These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
        </p>

        <p>
          <strong>Functional Cookies</strong>
        </p>
        <p>
          These cookies enable the website to provide enhanced functionality and personalization based on your previous actions and preferences.
        </p>
      </section>

      <section>
        <p>
          <strong>Managing Your Cookie Preferences</strong>
        </p>
        <p>You can control and manage cookies in various ways:</p>
        <ul>
          <li>Browser settings to refuse all or some cookies</li>
          <li>Delete cookies after each session</li>
          <li>Enable private browsing mode</li>
        </ul>
        <p>
          Please note that blocking some types of cookies may impact your experience on our website and the services we offer.
        </p>
      </section>

      <section>
        <p>
          <strong>Third-Party Cookies</strong>
        </p>
        <p>
          We may use third-party services that use cookies to help us analyze how users use the site, personalize your experience, and provide certain features:
        </p>
        <ul>
          <li>Google Analytics for website analytics</li>
          <li>WhatsApp for communication features</li>
        </ul>
      </section>

      <section>
        <p>
          <strong>Updates to This Policy</strong>
        </p>
        <p>
          We may update this Cookie Policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Cookie Policy on this page.
        </p>
      </section>
    </LegalPage>
  );
};

export default CookiePolicy;
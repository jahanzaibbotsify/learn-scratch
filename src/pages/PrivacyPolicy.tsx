import React from 'react';
import LegalPage from '../components/common/LegalPage';

const PrivacyPolicy: React.FC = () => {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="March 15, 2024"
    >
      <section>
        <p>
          <strong>Introduction</strong>
        </p>
        <p>
          Learn Scratch ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
        </p>
      </section>

      <section>
        <p>
          <strong>Information We Collect</strong>
        </p>
        <p>
          <strong>Personal Information</strong>
        </p>
        <p>We collect information that you voluntarily provide to us when you:</p>
        <ul>
          <li>Register for our services</li>
          <li>Express interest in obtaining information about us or our products</li>
          <li>Participate in activities on our website</li>
        </ul>

        <p><strong>Personal information may include:</strong></p>
        <ul>
          <li>Name and contact information</li>
          <li>Child's age and learning preferences</li>
          <li>Payment information</li>
          <li>Communication preferences</li>
        </ul>
      </section>

      <section>
        <p>
          <strong>How We Use Your Information</strong>
        </p>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Process your payments and prevent fraud</li>
          <li>Send you updates about your child's progress</li>
          <li>Communicate with you about our services</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section>
        <p>
          <strong>Information Sharing and Disclosure</strong>
        </p>
        <p>We may share your information with:</p>
        <ul>
          <li>Service providers who assist in our operations</li>
          <li>Professional advisers and insurers</li>
          <li>Law enforcement when required by law</li>
        </ul>
        <p>We do not sell your personal information to third parties.</p>
      </section>

      <section>
        <p>
          <strong>Data Security</strong>
        </p>
        <p>
          We implement appropriate technical and organizational security measures to protect your information. However, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
        </p>
      </section>

      <section>
        <p>
          <strong>Children's Privacy</strong>
        </p>
        <p>
          We are committed to protecting children's privacy. We collect only necessary information about children with parental consent and use it solely for educational purposes. Parents can review, update, or request deletion of their child's information at any time.
        </p>
      </section>

      <section>
        <p>
          <strong>Your Rights and Choices</strong>
        </p>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt-out of marketing communications</li>
          <li>Withdraw consent where applicable</li>
        </ul>
      </section>

      <section>
        <p>
          <strong>Updates to This Policy</strong>
        </p>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
        </p>
      </section>

      <section>
        <p>
          <strong>Contact Us</strong>
        </p>
        <p>
          If you have questions about this Privacy Policy or our practices, please contact us via WhatsApp at +60 12-345 6789.
        </p>
      </section>
    </LegalPage>
  );
};

export default PrivacyPolicy;
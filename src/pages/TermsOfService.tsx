import React from 'react';
import LegalPage from '../components/common/LegalPage';

const TermsOfService: React.FC = () => {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="March 15, 2024"
    >
      <section>
        <p>
          <strong>Agreement to Terms</strong>
        </p>
        <p>
          By accessing or using Learn Scratch Malaysia's services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
        </p>
      </section>

      <section>
        <p>
          <strong>Our Services</strong>
        </p>
        <p>
          We provide online coding education services for children aged 7-15 years old, specifically focused on teaching Scratch programming through:
        </p>
        <ul>
          <li>One-on-one instruction</li>
          <li>Structured curriculum</li>
          <li>Project-based learning</li>
          <li>Progress tracking and reporting</li>
        </ul>
      </section>

      <section>
        <p>
          <strong>Payments and Refunds</strong>
        </p>
        <p>
          <strong>Payment Terms</strong>
        </p>
        <ul>
          <li>Program fee: RM 500 for 12 sessions (3 months)</li>
          <li>Payment is required before the start of sessions</li>
          <li>All prices are in Malaysian Ringgit (RM)</li>
        </ul>

        <p>
          <strong>Refund Policy</strong>
        </p>
        <p>
          We offer a 100% satisfaction guarantee for the first lesson. If you're not satisfied, we'll provide a full refund. After the first lesson, refunds are prorated based on unused sessions.
        </p>
      </section>

      <section>
        <p>
          <strong>Cancellation Policy</strong>
        </p>
        <ul>
          <li>24-hour notice required for lesson cancellation</li>
          <li>One free rescheduling per month</li>
          <li>Missed lessons without notice are forfeited</li>
        </ul>
      </section>

      <section>
        <p>
          <strong>Code of Conduct</strong>
        </p>
        <p>Students and parents are expected to:</p>
        <ul>
          <li>Attend scheduled sessions promptly</li>
          <li>Maintain respectful communication</li>
          <li>Complete assigned projects</li>
          <li>Use provided materials appropriately</li>
        </ul>
      </section>

      <section>
        <p>
          <strong>Intellectual Property</strong>
        </p>
        <p>
          All course materials, including but not limited to lesson plans, projects, and teaching methodologies, are the intellectual property of Learn Scratch Malaysia. Students retain ownership of their created projects.
        </p>
      </section>

      <section>
        <p>
          <strong>Limitation of Liability</strong>
        </p>
        <p>
          Learn Scratch Malaysia is not liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
        </p>
      </section>

      <section>
        <p>
          <strong>Termination</strong>
        </p>
        <p>
          We reserve the right to terminate or suspend access to our services for violations of these terms or any other reason we deem appropriate.
        </p>
      </section>

      <section>
        <p>
          <strong>Governing Law</strong>
        </p>
        <p>
          These terms are governed by and construed in accordance with the laws of Malaysia. Any disputes shall be subject to the exclusive jurisdiction of the Malaysian courts.
        </p>
      </section>
    </LegalPage>
  );
};

export default TermsOfService;
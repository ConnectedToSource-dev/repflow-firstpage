import './Privacy.css'

export default function Privacy() {
  return (
    <section className="privacy section">
      <div className="container">
        <div className="privacy__header">
          <span className="eyebrow">Legal</span>
          <h1 className="heading-display privacy__title">Privacy Policy</h1>
          <p className="body-text privacy__updated">Last updated: March 22, 2026</p>
        </div>

        <div className="privacy__intro">
          <p className="privacy__text">
            HomeBioHackers ("we," "us," or "our") operates the HomeBioHackers platform, including
            our website, web application, and related services (collectively, the "Platform"). This
            Privacy Policy explains how we collect, use, disclose, and protect your personal
            information when you use our Platform.
          </p>
          <p className="privacy__text">
            By accessing or using the Platform, you agree to the terms of this Privacy Policy.
            If you do not agree, please do not use the Platform.
          </p>
        </div>

        <div className="privacy__body">
          {/* 1. Information We Collect */}
          <div className="privacy__section">
            <h2 className="privacy__heading">1. Information We Collect</h2>

            <h3 className="privacy__subheading">1.1 Information You Provide Directly</h3>

            <h4 className="privacy__label">Account Information</h4>
            <p className="privacy__text">
              When you create an account or are invited to the Platform, we collect:
            </p>
            <ul className="privacy__list">
              <li>First name and last name</li>
              <li>Email address</li>
              <li>Password (stored in hashed form)</li>
              <li>Role and company affiliation</li>
            </ul>

            <h4 className="privacy__label">Client and Contact Information</h4>
            <p className="privacy__text">
              When sales representatives enter client data, we collect:
            </p>
            <ul className="privacy__list">
              <li>Client first name and last name</li>
              <li>Email address</li>
              <li>Phone number (including country code)</li>
              <li>Street address, city, and state</li>
              <li>Contact log notes and follow-up details</li>
            </ul>

            <h4 className="privacy__label">Installer Information</h4>
            <p className="privacy__text">
              When installer accounts are created, we collect:
            </p>
            <ul className="privacy__list">
              <li>Full name and email address</li>
              <li>Service region</li>
              <li>Daily job capacity</li>
              <li>Schedule availability (morning/afternoon shifts)</li>
              <li>Financing options offered (provider names, APR rates, terms)</li>
            </ul>

            <h4 className="privacy__label">Financial Information</h4>
            <p className="privacy__text">
              When transactions are processed through the Platform, we collect:
            </p>
            <ul className="privacy__list">
              <li>Payment amounts and payment method type</li>
              <li>Financing application status and provider references</li>
              <li>Commission amounts and approval status</li>
              <li>Platform fee records</li>
            </ul>
            <p className="privacy__text">
              We do not directly store credit card numbers, bank account details, or other sensitive
              payment credentials. All payment processing is handled by our third-party payment
              processor, Stripe.
            </p>

            <h4 className="privacy__label">Uploaded Content</h4>
            <p className="privacy__text">
              When users upload files to the Platform, we collect:
            </p>
            <ul className="privacy__list">
              <li>Installation photographs (interior and exterior)</li>
              <li>Project documents and assets</li>
              <li>File metadata (name, size, type, upload date)</li>
            </ul>

            <h4 className="privacy__label">Communications</h4>
            <p className="privacy__text">
              When you interact with the Platform, we may collect:
            </p>
            <ul className="privacy__list">
              <li>Contact log notes between sales representatives and clients</li>
              <li>Appointment details (date, time, location, notes)</li>
              <li>Voice note recordings (if you use the voice recording feature)</li>
            </ul>

            <h3 className="privacy__subheading">1.2 Information Collected Automatically</h3>

            <h4 className="privacy__label">Usage and Analytics Data</h4>
            <p className="privacy__text">
              We automatically collect information about how you use the Platform, including:
            </p>
            <ul className="privacy__list">
              <li>Pages visited and features used</li>
              <li>Booking creation, proposal views, and payment events</li>
              <li>Installer matching and scheduling activity</li>
              <li>Session duration and interaction patterns</li>
            </ul>

            <h4 className="privacy__label">Device and Technical Data</h4>
            <p className="privacy__text">We collect technical information including:</p>
            <ul className="privacy__list">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Device type</li>
              <li>IP address</li>
              <li>Error logs and performance data</li>
            </ul>

            <h4 className="privacy__label">Cookies and Local Storage</h4>
            <p className="privacy__text">
              We use the following browser storage mechanisms:
            </p>
            <ul className="privacy__list">
              <li><strong>Authentication tokens:</strong> Session data stored in your browser's local storage to keep you signed in</li>
              <li><strong>Analytics cookies:</strong> Set by our analytics provider (PostHog) for session tracking</li>
              <li><strong>Error tracking cookies:</strong> Set by our error monitoring provider (Sentry) for session replay</li>
              <li><strong>Preference flags:</strong> Application settings stored locally on your device</li>
            </ul>

            <h3 className="privacy__subheading">1.3 Information from Third Parties</h3>

            <h4 className="privacy__label">Water Quality Data</h4>
            <p className="privacy__text">
              We use publicly available water contamination data sourced from the Environmental
              Working Group (EWG) to display water quality information by city and state. This data
              does not contain personal information.
            </p>
          </div>

          {/* 2. How We Use Your Information */}
          <div className="privacy__section">
            <h2 className="privacy__heading">2. How We Use Your Information</h2>
            <p className="privacy__text">We use the information we collect to:</p>
            <ul className="privacy__list">
              <li><strong>Provide and operate the Platform:</strong> Create accounts, process bookings, match installers, generate proposals, and facilitate installations</li>
              <li><strong>Process payments:</strong> Facilitate payment transactions between homeowners, sales representatives, and installers through Stripe</li>
              <li><strong>Calculate commissions:</strong> Track and distribute earned commissions to sales representatives</li>
              <li><strong>Communicate with you:</strong> Send account invitations, password resets, and platform notifications</li>
              <li><strong>Improve the Platform:</strong> Analyze usage patterns to improve features, fix bugs, and optimize performance</li>
              <li><strong>Ensure security:</strong> Monitor for suspicious activity, enforce access controls, and maintain audit logs</li>
              <li><strong>Provide customer support:</strong> Diagnose issues and respond to inquiries</li>
              <li><strong>Comply with legal obligations:</strong> Meet regulatory requirements and respond to lawful requests</li>
            </ul>
          </div>

          {/* 3. How We Share Your Information */}
          <div className="privacy__section">
            <h2 className="privacy__heading">3. How We Share Your Information</h2>
            <p className="privacy__text">
              We do not sell your personal information. We share information only in the following
              circumstances:
            </p>

            <h3 className="privacy__subheading">3.1 With Service Providers</h3>
            <p className="privacy__text">
              We share information with third-party service providers who assist in operating the Platform:
            </p>
            <div className="privacy__table-wrap">
              <table className="privacy__table">
                <thead>
                  <tr>
                    <th>Provider</th>
                    <th>Purpose</th>
                    <th>Data Shared</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Supabase</strong></td>
                    <td>Database hosting, authentication, and file storage</td>
                    <td>Account data, client records, uploaded files</td>
                  </tr>
                  <tr>
                    <td><strong>Stripe</strong></td>
                    <td>Payment processing</td>
                    <td>Customer email, payment amounts, booking metadata</td>
                  </tr>
                  <tr>
                    <td><strong>Sentry</strong></td>
                    <td>Error monitoring and performance tracking</td>
                    <td>User ID, email, error traces, session replays (with text masked)</td>
                  </tr>
                  <tr>
                    <td><strong>PostHog</strong></td>
                    <td>Product analytics</td>
                    <td>User ID, email, role, event data (bookings, proposals, payments)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="privacy__text">
              Each provider processes data in accordance with their own privacy policies and our
              data processing agreements.
            </p>

            <h3 className="privacy__subheading">3.2 Within the Platform</h3>
            <p className="privacy__text">
              Information is shared between Platform users as necessary to facilitate operations:
            </p>
            <ul className="privacy__list">
              <li><strong>Sales representatives</strong> can view their own client data, bookings, and commissions</li>
              <li><strong>Installation managers</strong> can view installer schedules, capacity, and assigned jobs</li>
              <li><strong>Sales managers</strong> can view team performance data for representatives in their company</li>
              <li><strong>Administrators</strong> can access user management and platform-wide data</li>
              <li><strong>Homeowners</strong> can view their own proposal details via unique, token-secured proposal links</li>
            </ul>

            <h3 className="privacy__subheading">3.3 For Legal Reasons</h3>
            <p className="privacy__text">We may disclose information if required to:</p>
            <ul className="privacy__list">
              <li>Comply with applicable law, regulation, or legal process</li>
              <li>Protect the rights, safety, or property of HomeBioHackers, our users, or the public</li>
              <li>Detect, prevent, or address fraud or security issues</li>
              <li>Enforce our Terms of Service</li>
            </ul>

            <h3 className="privacy__subheading">3.4 Business Transfers</h3>
            <p className="privacy__text">
              If HomeBioHackers is involved in a merger, acquisition, or sale of assets, your
              information may be transferred as part of that transaction. We will notify you of
              any such change.
            </p>
          </div>

          {/* 4. Data Storage and Security */}
          <div className="privacy__section">
            <h2 className="privacy__heading">4. Data Storage and Security</h2>

            <h3 className="privacy__subheading">4.1 Where We Store Data</h3>
            <p className="privacy__text">
              Your data is stored on servers operated by Supabase (cloud infrastructure). Uploaded
              files (such as installation photos) are stored in Supabase Storage. Payment data is
              processed and stored by Stripe in accordance with PCI DSS standards.
            </p>

            <h3 className="privacy__subheading">4.2 How We Protect Data</h3>
            <p className="privacy__text">We implement the following security measures:</p>
            <ul className="privacy__list">
              <li><strong>Encryption in transit:</strong> All data transmitted between your browser and our servers uses TLS/SSL encryption</li>
              <li><strong>Authentication:</strong> Secure email/password authentication with JWT tokens</li>
              <li><strong>Role-based access control:</strong> Users can only access data appropriate to their role (sales rep, manager, installer, admin)</li>
              <li><strong>Row-level security:</strong> Database policies enforce data isolation between companies and users</li>
              <li><strong>CORS restrictions:</strong> API endpoints are restricted to authorized origins</li>
              <li><strong>Audit logging:</strong> Administrative actions are recorded for accountability</li>
              <li><strong>Masked session replays:</strong> Error tracking session replays automatically mask all on-screen text</li>
            </ul>

            <h3 className="privacy__subheading">4.3 Data Retention</h3>
            <p className="privacy__text">
              We retain your personal information for as long as your account is active or as needed
              to provide services. Specifically:
            </p>
            <ul className="privacy__list">
              <li><strong>Account data:</strong> Retained until account deletion is requested</li>
              <li><strong>Booking and transaction records:</strong> Retained for the duration required by applicable financial record-keeping laws (typically 7 years)</li>
              <li><strong>Uploaded files:</strong> Retained until manually deleted or account deletion is processed</li>
              <li><strong>Analytics data:</strong> Retained according to our analytics provider's retention policies</li>
              <li><strong>Audit logs:</strong> Retained for compliance and security purposes</li>
            </ul>
          </div>

          {/* 5. Your Rights and Choices */}
          <div className="privacy__section">
            <h2 className="privacy__heading">5. Your Rights and Choices</h2>
            <p className="privacy__text">
              Depending on your jurisdiction, you may have the following rights:
            </p>

            <h3 className="privacy__subheading">5.1 Access and Portability</h3>
            <p className="privacy__text">
              You can request a copy of the personal information we hold about you.
            </p>

            <h3 className="privacy__subheading">5.2 Correction</h3>
            <p className="privacy__text">
              You can update your account information directly through the Platform or request
              corrections to inaccurate data.
            </p>

            <h3 className="privacy__subheading">5.3 Deletion</h3>
            <p className="privacy__text">
              You can request deletion of your account and associated personal data. When an account
              is deleted, we remove your data from:
            </p>
            <ul className="privacy__list">
              <li>User profile and authentication records</li>
              <li>Notifications and contact logs</li>
              <li>Appointment records</li>
              <li>Project assets and uploaded files</li>
              <li>Installer availability and capacity records</li>
              <li>Role and permission assignments</li>
            </ul>
            <p className="privacy__text">
              Certain data may be retained where required by law (e.g., financial transaction records).
            </p>

            <h3 className="privacy__subheading">5.4 Opt-Out of Analytics</h3>
            <p className="privacy__text">You can opt out of analytics tracking by:</p>
            <ul className="privacy__list">
              <li>Using browser privacy settings or extensions that block tracking scripts</li>
              <li>Contacting us to request opt-out from server-side tracking</li>
            </ul>

            <h3 className="privacy__subheading">5.5 Cookie Management</h3>
            <p className="privacy__text">
              You can manage cookies through your browser settings. Note that disabling cookies may
              affect Platform functionality, particularly authentication.
            </p>
          </div>

          {/* 6. Progressive Web App */}
          <div className="privacy__section">
            <h2 className="privacy__heading">6. Progressive Web App (PWA)</h2>
            <p className="privacy__text">
              The Platform is available as a Progressive Web App, which means:
            </p>
            <ul className="privacy__list">
              <li>It can be installed on your device's home screen</li>
              <li>A service worker may cache application assets and recent API responses locally on your device for up to 5 minutes to improve performance</li>
              <li>Cached data is stored locally and is not transmitted to third parties</li>
              <li>You can clear cached data by uninstalling the PWA or clearing your browser's site data</li>
            </ul>
          </div>

          {/* 7. Children's Privacy */}
          <div className="privacy__section">
            <h2 className="privacy__heading">7. Children's Privacy</h2>
            <p className="privacy__text">
              The Platform is not intended for use by individuals under the age of 18. We do not
              knowingly collect personal information from children. If we learn that we have collected
              personal information from a child under 18, we will take steps to delete that
              information promptly.
            </p>
          </div>

          {/* 8. CCPA */}
          <div className="privacy__section">
            <h2 className="privacy__heading">8. California Privacy Rights (CCPA)</h2>
            <p className="privacy__text">
              If you are a California resident, you have additional rights under the California
              Consumer Privacy Act (CCPA):
            </p>
            <ul className="privacy__list">
              <li><strong>Right to know:</strong> What personal information we collect, use, and disclose</li>
              <li><strong>Right to delete:</strong> Request deletion of your personal information</li>
              <li><strong>Right to opt-out of sale:</strong> We do not sell personal information</li>
              <li><strong>Right to non-discrimination:</strong> We will not discriminate against you for exercising your privacy rights</li>
            </ul>
            <p className="privacy__text">
              To exercise these rights, contact us using the information in Section 10.
            </p>
          </div>

          {/* 9. Changes */}
          <div className="privacy__section">
            <h2 className="privacy__heading">9. Changes to This Privacy Policy</h2>
            <p className="privacy__text">
              We may update this Privacy Policy from time to time. When we make changes, we will
              update the "Last Updated" date at the top of this page. We encourage you to review
              this Privacy Policy periodically. Continued use of the Platform after changes
              constitutes acceptance of the updated policy.
            </p>
          </div>

          {/* 10. Contact Us */}
          <div className="privacy__section">
            <h2 className="privacy__heading">10. Contact Us</h2>
            <p className="privacy__text">
              If you have questions about this Privacy Policy, wish to exercise your privacy rights,
              or have concerns about how your data is handled, please contact us at:
            </p>
            <div className="privacy__contact">
              <p><strong>HomeBioHackers</strong></p>
              <p>Email: privacy@homebiohackers.com</p>
            </div>
          </div>

          {/* 11. Summary Table */}
          <div className="privacy__section">
            <h2 className="privacy__heading">11. Summary of Data Collection</h2>
            <p className="privacy__text">
              For quick reference, here is a summary of the categories of personal information we collect:
            </p>
            <div className="privacy__table-wrap">
              <table className="privacy__table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Examples</th>
                    <th>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Identifiers</td>
                    <td>Name, email, phone number</td>
                    <td>Account creation, communication</td>
                  </tr>
                  <tr>
                    <td>Contact information</td>
                    <td>Address, city, state</td>
                    <td>Service delivery, proposals</td>
                  </tr>
                  <tr>
                    <td>Financial data</td>
                    <td>Payment amounts, commissions</td>
                    <td>Transaction processing</td>
                  </tr>
                  <tr>
                    <td>Professional data</td>
                    <td>Role, company, certifications</td>
                    <td>Access control, platform operations</td>
                  </tr>
                  <tr>
                    <td>Usage data</td>
                    <td>Page views, feature interactions</td>
                    <td>Product improvement</td>
                  </tr>
                  <tr>
                    <td>Device data</td>
                    <td>Browser, OS, IP address</td>
                    <td>Security, error resolution</td>
                  </tr>
                  <tr>
                    <td>User content</td>
                    <td>Photos, documents, notes</td>
                    <td>Service delivery</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

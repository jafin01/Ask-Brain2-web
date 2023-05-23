import React from 'react';
import Link from 'next/link';
import Card from '@/components/Card';
import TermsBanner from '@/components/TermsBanner';

export default function PrivacyCustom() {
  return (
    <div className="h-screen flex justify-center bg-gray-50">
      <TermsBanner heading="Privacy Policy" />
      <Card className="absolute p-8 md:p-16 font-lato font-light">
        <section className="text-gray-700">
          <style jsx>{`
            section > p:not(:last-of-type) {
              margin-bottom: 2rem;
            }
          `}</style>
          <p>updated Date: 5 May 2023</p>
          <h3 className="font-bold pt-4">1. Objective</h3>
          <p>
            The objective of Herogram (also referred to as &quot;the
            Company&quot;) is to manage personal data of its users in accordance
            with standard privacy principles and pertinent data protection
            regulations, including the Personal Data Protection Law No. 6698
            (PDP Law) and other applicable legislation. If you have already
            shared or plan to share your personal information with our Company,
            or if we have acquired it through external sources, we may process
            it as the &quot;Data Controller&quot;.
          </p>
          <p>
            Our Company aims to process your personal data with due care and in
            compliance with this objective, we will undertake appropriate
            actions to ensure the accuracy and timeliness of the personal
            information shared or reported to us. These measures may include
            recording, storing, preserving, reorganizing, and sharing the data
            with authorized institutions as required by law. Additionally, we
            may transfer, classify, and disclose the data to third parties
            within or outside the country, in accordance with relevant
            legislation and your explicit consent if necessary. It is important
            to note that the personal information may also be subject to other
            processing methods and procedures as outlined by the legislation.
          </p>
          <p>
            This Privacy Policy has been adopted by Herogram to ensure the
            continuation and enhancement of our operations in accordance with
            the principles established in the PDP Law. The Policy outlines the
            types of data we collect, how we intend to use, store, protect, and
            share this information, the procedure for withdrawing your consent
            for data processing, and how to make corrections or revisions.
          </p>
          <p>
            Please note that capitalized terms used in this Policy have the same
            meaning as specified in the Terms and Conditions, unless defined
            separately in this Policy.
          </p>
          <h3 className="font-bold pt-4">
            2. Collection of Personal Data and Method
          </h3>
          <p>
            In accordance with the purposes outlined in this Privacy Policy,
            Herogram reserves the right to process your personal data.
          </p>
          <p>
            As part of our services, Herogram collects and uses certain personal
            data of its users. This includes order information when making an
            in-app purchase, as well as the Identifier for Advertisers (IDFA),
            Identifier for Vendors/Developers (IDVF), and Internet Protocol
            Address (IP Address) associated with the mobile device used to
            access our services.
          </p>
          <h3 className="font-bold pt-4">Data Categories and Data Types</h3>
          <table className="border-collapse border w-full">
            <tbody>
              <tr>
                <td className="border border-app-bg px-4 py-2">
                  <strong>
                    Data security measures for processing personal information
                  </strong>
                </td>
                <td className="border border-app-bg px-4 py-2">
                  The following information may be collected by Herogram in
                  connection with your use of our services: internet traffic
                  data (network movements, IP address, visit data, time and date
                  information), device name, in-app purchase history, Token ID
                  (if notifications are allowed through your device), Identifier
                  for Advertisers (IDFA) designated on your mobile device (if
                  you have given permission), and Identifier for
                  Vendors/Developers (IDVF) designated on your mobile device.
                </td>
              </tr>
              <tr>
                <td className="border border-app-bg px-4 py-2">
                  <strong>Customer data associated with transactions</strong>
                </td>
                <td className="border border-app-bg px-4 py-2">
                  Order Information
                </td>
              </tr>
              <tr>
                <td className="border border-app-bg px-4 py-2">
                  <strong>Marketing Data</strong>
                </td>
                <td className="border border-app-bg px-4 py-2">IDFA, IDVF</td>
              </tr>
            </tbody>
          </table>
          <p>
            We may collect the aforementioned data directly from you, through
            electronic or physical mediums, your mobile device, third-party
            applications, or third-party sources that you can access our
            application through (such as Apple App Store and Google Play App
            Store). The purpose of this data collection includes compliance with
            legal obligations, improving our services, administering your use of
            our services, and enabling you to easily navigate and enjoy our
            services.
          </p>
          <p>
            We may also collect log data generated while you use our services or
            applications (through our products or third-party products). This
            log data may include your device&apos;s Internet Protocol (IP)
            address, device name, operating system version, the configuration of
            the app when utilizing our service/application, the time/date of
            your use of the service/application, and other relevant statistics.
          </p>
          <p>
            <strong>Personal Data Processing Principles</strong>
            Herogram processes personal data as a data controller in accordance
            with this Privacy Policy and based on the following basic
            principles: (i) compliance with the law and good faith, (ii)
            accuracy and, when necessary, up-to-date information, (iii)
            processing for specific, explicit, and legitimate purposes, (iv)
            limiting data processing to the intended purpose and minimizing
            data; and (v) storing data for the period required by relevant
            legislation or for the purpose for which it was processed.
          </p>
          <h3 className="font-bold pt-4">
            Purposes and Legal Basis for Processing Personal Data
          </h3>
          <p>
            We will process your personal data in compliance with applicable
            laws and regulations, as well as articles 5 and 6 of the PDP Law.
            Such processing will be carried out through automated or
            non-automated means, provided that it is expressly permitted by
            laws, necessary for the performance of a contract, or for the
            legitimate interests of Herogram, with your fundamental rights and
            freedoms being protected.
          </p>
          <div className="pl-8">
            <h3 className="font-bold pt-4">
              a. Reasons of Personal Data Processing
            </h3>
            <p>
              Following the above-mentioned general conditions, we process your
              personal data for the following purposes:
            </p>
            <table className="border-collapse border w-full">
              <tbody>
                <tr>
                  <td className="border border-app-bg px-4 py-2">
                    <strong>Process Security</strong>
                  </td>
                  <td className="border border-app-bg px-4 py-2">
                    <ul className="list-disc ml-4">
                      <li>
                        Conducting business operations in compliance with legal
                        requirements.
                      </li>
                      <li>
                        Fulfilling commitments related to our products or
                        services.
                      </li>
                      <li>
                        Carrying out communication activities to keep customers
                        informed and up-to-date.
                      </li>
                      <li>
                        Conducting audits of our business activities to ensure
                        quality and efficiency.
                      </li>
                      <li>
                        Providing after-sales support services for goods or
                        services purchased from us.
                      </li>
                      <li>
                        Carrying out the sales processes of our goods or
                        services
                      </li>
                      <li>Carrying out storage and archiving processes</li>
                      <li>Conducting contract procedures</li>
                      <li>
                        Implementing measures to ensure information security
                      </li>
                      <li>Performing auditing and ethical procedures</li>
                      <li>
                        Carrying out business operations and conducting audits
                      </li>
                      <li>
                        Ensuring business continuity through relevant activities
                      </li>
                      <li>
                        Providing information to authorized entities,
                        institutions, and organizations.
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border border-app-bg px-4 py-2">
                    <strong>Customer Transaction</strong>
                  </td>
                  <td className="border border-app-bg px-4 py-2">
                    <ul className="list-disc ml-4">
                      <li>Compliance with legal obligations</li>
                      <li>
                        Fulfillment of commitments related to our company,
                        products and services
                      </li>
                      <li>Communication with our customers and partners</li>
                      <li> Audit and monitoring of business operations</li>
                      <li>
                        Provision of after-sales support services for our
                        products and services
                      </li>
                      <li>Sale of our products and services</li>
                      <li>Storage and archiving of data</li>
                      <li>Execution of contractual agreements</li>
                      <li>Implementation of information security measures</li>
                      <li>Conducting ethical and audit activities</li>
                      <li>Ensuring business continuity</li>
                      <li>
                        Sharing information with authorized parties,
                        institutions and organizations.
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border border-app-bg px-4 py-2">
                    <strong>Marketing Data</strong>
                  </td>
                  <td className="border border-app-bg px-4 py-2">
                    <ul className="list-disc ml-4">
                      <li>
                        Performing marketing analysis studies and carrying out
                        advertising, campaign, and promotion processes.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="pt-8">
              Furthermore, the reasons for processing personal data are subject
              to change according to our responsibilities under relevant laws
              and corporate policies. These include but are not limited to:
            </p>
            <ul className="list-disc ml-8 mt-4">
              <li>
                Creating user accounts for service recipients/application users.
              </li>
              <li>
                Personalizing our services to understand users and their
                preferences in order to improve their experience.
              </li>
              <li>
                Notifying users of new products, services, applications,
                advertisements, and promotions.
              </li>
              <li>
                Conducting digital subscription and in-app purchase processes
                for service recipients.
              </li>
              <li>
                Managing auto-renewable subscriptions for access to content,
                services, or premium features.
              </li>
              <li>Ensuring information security.</li>
              <li>
                Conducting activities in accordance with applicable legislation.
              </li>
              <li>Fulfilling the demands of competent authorities.</li>
              <li>Carrying out financial and accounting transactions.</li>
              <li>Conducting communication activities.</li>
              <li>Conducting contract processes.</li>
              <li>Carrying out strategic planning activities.</li>
              <li>Responding to requests and complaints.</li>
            </ul>
          </div>
          <h3 className="font-bold pt-4">b. Legal Reasons</h3>
          <table className="border-collapse border w-full">
            <tbody>
              <tr>
                <td className="border border-app-bg px-4 py-2">
                  <strong>Customer Transaction</strong>
                </td>
                <td className="border border-app-bg px-4 py-2">
                  <ul className="list-disc ml-4">
                    <li>
                      We may process your personal data if it is necessary for
                      the establishment of a contractual relationship with you
                      or directly related to our performance obligation arising
                      from the contract.
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border border-app-bg px-4 py-2">
                  <strong>Process Security</strong>
                </td>
                <td className="border border-app-bg px-4 py-2">
                  <ul className="list-disc ml-4">
                    <li>Fulfillment of our legal obligations</li>
                    <li>
                      Processing necessary for the establishment, performance,
                      or termination of a contract with you
                    </li>
                    <li>
                      Processing directly related to our obligations arising
                      from a contract with you
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border border-app-bg px-4 py-2">
                  <strong>Marketing Data</strong>
                </td>
                <td className="border border-app-bg px-4 py-2">
                  <ul className="list-disc ml-4">
                    <li>
                      Your explicit consent (acquired via Apple and/or Google)
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

          <h3 className="font-bold pt-4">
            Third Party Websites and Applications
          </h3>
          <p>
            Ask Brain2 App (Ask Brain2) may contain links to third-party
            websites and applications whose content is not controlled by
            Herogram. These linked websites may have different terms and
            conditions than Herogram, and as such, Herogram cannot be held
            responsible for the use or disclosure of information that these
            websites may process. Additionally, Herogram will not be responsible
            for any links from other sites provided to Ask Brain2, which is
            owned by Herogram.
          </p>
          <p>
            We collect information in a fair and lawful manner with your
            knowledge and consent, and we will inform you of the reason for
            collecting your data and how it will be used. Please note that you
            have the right to refuse our request for this information. However,
            this may impact our ability to provide you with some of the services
            you desire.
          </p>

          <h3 className="font-bold pt-4">Cookies</h3>
          <p>
            Cookies are small text files that are placed on your computer or
            mobile device&apos;s browser or hard drive when you visit a webpage
            or application. They enhance the browsing experience by allowing
            websites to function more smoothly and display tailored web pages
            that meet your specific needs and preferences. Cookies do not
            collect any personal information or files from your device; they
            only record information about your online website visit history.
          </p>
          <p>
            We use cookies to operate and improve the functionality and
            efficiency of our services, as well as to provide personalized
            content, such as advertisements that match your interests on our
            sites or those of third parties. If you wish to delete cookies that
            are already on your computer or prevent Internet Explorer from
            recording or locating cookies, you can do so.
          </p>
          <p>
            Most internet browsers are set to accept cookies by default.
            However, cookie management varies from browser to browser. You can
            find more information on how to manage cookies by referring to the
            help menu of your browser or program.
          </p>

          <h3 className="font-bold pt-4">Push Notifications</h3>
          <p>
            Herogram&apos;s mobile applications may occasionally send you push
            messages about updates or service alerts. You can modify or opt-out
            of these notifications at any time through your device&apos;s
            settings. We will retain your data for as long as required by
            applicable laws or until the processing is no longer necessary. In
            certain circumstances, we may continue to store your personal data
            even after its intended purpose has expired, but only if required by
            other laws or with your explicit consent. If you give consent for us
            to store your personal data for additional time, we will promptly
            delete, destroy, or anonymize it when that time expires or when the
            processing purpose is no longer relevant.
          </p>
          <h3 className="font-bold pt-4">
            Technical and Administrative Measures
          </h3>
          <p>
            Herogram will keep the personal data it handles in accordance with
            applicable laws for as long as it is necessary to fulfill the
            processing requirements. Herogram is committed to taking all
            necessary administrative and technical measures and exercising
            appropriate care to ensure the security, privacy, and
            confidentiality of personal data. To prevent unauthorized access,
            disclosure, alteration, or destruction of data, Herogram takes
            necessary precautions. As a result, the following technical and
            administrative safeguards are implemented by Herogram for the
            personal data it processes:
          </p>
          <div className="ml-4 mt-4">
            <p className="mb-2">
              Herogram installs anti-virus applications on all computers and
              servers within its information technology infrastructure, which
              are periodically updated.
            </p>
            <p className="mb-2">
              The servers hosted in Herogram&apos;s data center and disaster
              recovery centers are safeguarded by periodically updated
              software-loaded firewalls. The relevant next-generation firewalls
              manage the internet connections of all staff and provide
              protection against viruses and other similar threats during this
              process.
            </p>
            <p className="mb-2">
              Herogram allows suppliers to access its servers or systems through
              SSL-VPN, which is defined on Firewalls. A unique SSL-VPN
              identification has been created for each supplier, allowing them
              to access only the systems they are authorized to use.
            </p>
            <p className="mb-2">
              User access: Herogram limits the access of its employees to its
              systems based on their job descriptions. If there is any change in
              their authority or duties, the system authorizations are updated
              accordingly.
            </p>
            <p className="mb-2">
              Information security threat and event management: Herogram
              transfers the events occurring on its servers and firewalls to the
              &quot;Information Security Threat and Event Management&quot;
              system. The responsible staff is alerted through this system in
              case of any security threat and can respond immediately.
            </p>
            <p className="mb-2">
              Encryption: Herogram stores sensitive data with cryptographic
              methods and transfers it through encrypted environments as
              required. The cryptographic keys are stored in secure and diverse
              environments.
            </p>
            <p className="mb-2">
              Herogram securely logs all transaction records related to
              sensitive data.
            </p>
            <p className="mb-2">
              Two-factor authentication: Access to sensitive data through remote
              means requires at least two-factor authentication.
            </p>
            <p className="mb-2">
              Penetration testing: Herogram periodically conducts penetration
              tests on its servers. The security gaps identified are promptly
              addressed, and verification tests are performed to ensure the
              identified gaps are closed. Additionally, the Information Security
              Threat and Event Management System automatically performs
              penetration tests, with results recorded.
            </p>
            <p className="mb-2">
              Information Security Management System (ISMS): The director of
              information technology and the director of financial operations
              audit the topics contained in the control forum during monthly
              ISMS meetings.
            </p>
            <p className="mb-2">
              Moreover, regular training is provided to Herogram employees to
              enhance awareness of various information security violations and
              to reduce the impact of the human factor in information violation
              incidents.
            </p>
            <p className="mb-2">
              Physical data security: Sensitive data stored on paper is secured
              in lockers and accessed only by authorized personnel. Adequate
              security measures are taken to protect against situations such as
              electric leakage, fire, deluge, and theft, based on the nature of
              the environment where sensitive data is stored.
            </p>
            <p className="mb-2">
              Backup: Herogram periodically backs up the data it stores, using
              backup facilities provided by cloud infrastructure providers or
              developing its own backup solutions when necessary, provided that
              they comply with relevant legislation and this Policy.
            </p>
            <p className="mb-2">
              Non-disclosure agreement: Employees involved in processing
              sensitive personal data are required to sign non-disclosure
              agreements.
            </p>
            <p className="mb-2">
              When transferring sensitive personal data, Herogram uses encrypted
              corporate email or Registered E-mail.
            </p>
          </div>
          <p>
            Herogram promptly informs users and the relevant data protection
            authority, if needed, and takes appropriate measures if personal
            data is compromised due to an attack on Ask Brain2 or the Herogram
            system, despite Herogram having implemented necessary information
            security measures. This also includes instances where personal data
            is accessed by unauthorized third parties.
          </p>
          <h3 className="font-bold pt-4">
            4. Transmission of Personal Data to Third Parties
          </h3>
          <p>
            compliance with articles 8 and 9 of the PDP Law, which define the
            procedures and principles to be observed during personal data
            transfer, suppliers are permitted to transfer personal and special
            categories of data to third parties both domestically and
            internationally. This is due to the use of servers and cloud
            computing systems located outside of the country.
          </p>
          <p>
            Personal data may be transferred abroad for the following reasons:
            <ul>
              <li>Conducting storage and archiving operations</li>
              <li>Conducting business operations</li>
              <li>
                Providing after-sales support services for goods and services
              </li>
              <li>Managing customer relationship management processes.</li>
            </ul>
          </p>
          <p>
            Herogram reserves the right to transfer your personal data to our
            Company&apos;s service providers, as well as third-party entities
            such as Facebook SDK, Adjust, and Firebase Analytics, which are
            integrated into our service. This may be done for the following
            purposes:
          </p>
          <div>
            <ul className="list-disc ml-4">
              <li>
                To share identity, communication, and transaction security
                information with authorized public institutions and
                organizations, in order to execute activities that comply with
                legislation, monitor and execute legal affairs, and inform
                authorized persons, institutions, and organizations.
              </li>
              <li>
                To share customer transaction information for the management of
                after-sales support services, business activities, and customer
                relationship management processes.
              </li>
            </ul>
          </div>
          <h3 className="font-bold mt-4">5. Data Subject Rights</h3>
          <p>
            In accordance with Article 11 of the PDP Law, you, as the data
            subject, have certain rights regarding your personal data. You may
            exercise these rights by contacting Herogram and requesting the
            following:
          </p>
          <div>
            <ul className="list-desc">
              <li>
                Information on whether or not your personal data has been
                processed
              </li>
              <li>
                Information on the purpose of the processing and whether your
                data is being used for that purpose
              </li>
              <li>
                Information on the third parties, domestic or foreign, to whom
                your personal data has been transferred
              </li>
              <li>
                Notification to third parties if your personal data has been
                processed incompletely or inaccurately
              </li>
              <li>
                Deletion, destruction, or anonymization of your personal data if
                the reasons for processing have disappeared, and notification to
                third parties to whom your personal data has been transferred
              </li>
              <li>
                Objection to any result that is detrimental to you that arises
                solely from the analysis of your personal data through automated
                systems
              </li>
              <li>
                Compensation for any damages you may have incurred due to the
                unlawful processing of your personal data.
              </li>
            </ul>
          </div>
          <p>
            In situations where the General Data Protection Regulation (GDPR) is
            applicable, data subjects possess certain rights. These rights
            include:
          </p>
          <ul className="list-disc ml-4">
            <li>
              Right of access: The right to know whether personal data is being
              processed and, if so, the right to access the personal data and
              information about how the personal data is being processed by
              Herogram.
            </li>
            <li>
              Right to correction: The right to request that inaccurate
              information be corrected or incomplete information be completed by
              Herogram.
            </li>
            <li>
              Right to deletion: The right to request the deletion of personal
              data according to the conditions specified in the GDPR.
            </li>
            <li>
              Right to restrict processing: The right to request that the
              processing of personal data be restricted according to the
              conditions specified in the GDPR.
            </li>
            <li>
              Right to object to processing: The right to object to the
              processing of personal data according to the conditions specified
              in the GDPR.
            </li>
            <li>
              Right to data portability: The right to request that the data
              collected by Herogram be directly transferred to another
              organization, or under certain conditions.
            </li>
            <li>
              Objection to the occurrence of a result against oneself by
              analyzing the processed data exclusively through automatic
              systems, including profiling.
            </li>
          </ul>
          <p className="mt-4">
            In order to make a request related to your personal data, you must
            be authorized and provide proper documentation if you are acting on
            behalf of someone else. The application must also include your
            identity and address information and supporting documents. To file a
            request, you can use the &quot;Data Subject Application Form&quot;
            provided by our company at support@herogram.app. We will finalize
            your request within a maximum of 30 (thirty) days, depending on its
            nature, free of charge, in accordance with Article 13 of the PDP
            Law. If your request is rejected, we will provide the reason(s) for
            the rejection in writing or electronically, along with its
            justification.
          </p>
          <p>
            If you believe that our company or anyone we have transferred your
            data to is violating your rights, you have the right to file a
            complaint to the data protection authority in your country or other
            competent supervisory authorities.
          </p>
          <p>
            Our company may revise this Privacy Policy as necessary. If you
            continue to access Ask Brain2 and use or access it without taking
            advantage of the services offered by Herogram after the notification
            period, you will be deemed to have accepted the changes made in this
            Privacy Policy.
          </p>

          <table className="w-full mt-4">
            <tbody>
              <tr>
                <td className="px-4 py-2">
                  <strong>Customer Title:</strong>
                </td>
                <td className="px-4 py-2">
                  <strong>Herogram FZ LLC</strong>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">
                  <strong>Address:</strong>
                </td>
                <td className="px-4 py-2">
                  <strong>Dubai, United Arab Emirates</strong>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">
                  <strong>E-mail:</strong>
                </td>
                <td className="px-4 py-2">
                  <Link
                    href="mailto:support@herogram.app"
                    className="bg-grad-green text-white rounded-md px-2 py-1"
                  >
                    support@herogram.app.
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">
                  <strong>Tel:</strong>
                </td>
                <td className="px-4 py-2">
                  <strong>xx</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </Card>
    </div>
  );
}

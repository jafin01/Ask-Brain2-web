import React from 'react';
import Link from 'next/link';
import Card from '@/components/Card';
import TermsBanner from '@/components/TermsBanner';

export default function TermsCustom() {
  return (
    <div className="h-screen flex justify-center bg-gray-50">
      <TermsBanner heading="Terms and Conditions" />
      <Card className="absolute p-8 md:p-16 font-lato font-light">
        <section className="text-gray-700">
          <style jsx>{`
            section > p:not(:last-of-type) {
              margin-bottom: 2rem;
            }
          `}</style>
          <p>
            If you download, install, register with, or use the Ask Brain2 App
            (Ask Brain2 App), these terms and conditions (Terms and Conditions)
            will apply to you automatically. It is important to read these terms
            and conditions carefully before using the Ask Brain2 App. The
            Services provided by the Ask Brain2 App, which include developing
            and sharing visual material with other users through an AI algorithm
            based on the texts and photos you submit, as well as the art styles
            offered, can only be used with the permission granted under these
            Terms and Conditions. You are not permitted to copy, modify, or use
            our trademarks in any way. Additionally, you may not attempt to
            extract the source code, translate the Ask Brain2 App into other
            languages, or make derivative versions. Herogram FZ LLC (Herogram)
            owns the Ask Brain2 App, and all the trademarks, copyright, database
            rights, and other intellectual property rights related to it.
          </p>
          <p>
            Herogram is dedicated to providing users with a useful and efficient
            Ask Brain2 App. To achieve this, we may make changes to the Ask
            Brain2 App or introduce charges for certain services at any time,
            for any reason. We will always provide clear information regarding
            any costs associated with the use of the Ask Brain2 App or Herogram
            Services.
          </p>
          <p>
            The Ask Brain2 App processes and stores personal data provided by
            you to deliver our Service. You are responsible for maintaining the
            security of the Ask Brain2 App on your phone and preventing
            unauthorized access. To ensure proper functionality of the Ask
            Brain2 App, we recommend that you do not jailbreak or root your
            device as it may compromise the security features and increase the
            risk of malware or viruses.
          </p>
          <p>
            Please note that certain functions of the Ask Brain2 App require an
            active internet connection, which can be provided by Wi-Fi or your
            mobile network provider. We cannot be held responsible if the Ask
            Brain2 App does not function at full capacity due to lack of Wi-Fi
            or data allowance. It is important to be aware that there are
            certain things that Herogram will not take responsibility for.
          </p>
          <p>
            When using the Ask Brain2 App without a Wi-Fi connection, you should
            be aware that your mobile network provider&apos;s terms and
            conditions will still apply. This means you may be charged by your
            mobile provider for the duration of the connection while accessing
            the Ask Brain2 App, or for other third-party charges. You will be
            responsible for any such charges, including roaming data charges if
            you use the Ask Brain2 App outside of your home territory without
            turning off data roaming. If you are not the bill payer for the
            device on which you&apos;re using the Ask Brain2 App, we assume that
            you have received permission from the bill payer for using the app.
          </p>
          <p>
            However, please note that Herogram cannot be held responsible for
            the way you use the Ask Brain2 App. You need to ensure that your
            device stays charged, as Herogram cannot accept responsibility if it
            runs out of battery and you cannot turn it on to use the Service.
          </p>
          <p>
            Regarding Herogram&apos;s liability for your use of the Ask Brain2
            App, please be aware that while we make every effort to keep the app
            current and accurate, we rely on outside sources to supply
            information. As a result, Herogram disclaims all responsibility for
            any direct or indirect losses you may incur as a result of depending
            solely on this feature.
          </p>
          <p>
            From time to time, we may need to update the Ask Brain2 App. While
            it is currently available on iOS and Android, the requirements for
            system (and for any additional systems we decide to extend the
            availability of the app to) may change, and you will need to
            download the updates if you want to keep using the app. Although we
            cannot promise to always update the app to be relevant to you and/or
            work with the version of iOS or Android that you have installed on
            your device, you agree to always accept updates to the application
            when offered to you.
          </p>
          <p>
            Finally, we may decide to stop providing the Ask Brain2 App and may
            terminate its use at any time without giving notice of termination
            to you. In such cases, your rights and licenses granted in these
            terms will end, and you must stop using the app and, if needed,
            delete it from your device.
          </p>
          <h3 className="font-bold pt-4">User Content</h3>
          <p>
            When using Herogram&apos;s services, you have the ability to create,
            upload, transmit, store, edit, and share content (referred to as
            &quot;Input&quot;) and receive content (referred to as
            &quot;Output&quot;). The combination of these two types of content
            is known as &quot;User Content.&quot; However, you can only create,
            store, use, edit, and share User Content if it follows our Terms and
            Conditions, Herogram End-User License Agreement, and other
            applicable laws.
          </p>
          <p>
            By uploading or transmitting your Input, you are granting Herogram a
            non-exclusive, irrevocable, fully-paid, royalty-free, perpetual,
            sub-licensable, transferrable, worldwide license and right to use,
            broadcast, reproduce, modify, create derivative works of, record,
            sublicense (on multiple levels), translate, transmit, or otherwise
            exploit your User Content. This is for the limited purpose of
            operating or improving our existing and future products, including
            but not limited to training Ask Brain2&apos;s AI, in all formats and
            mediums with any technology, now known or hereafter developed,
            without notice, permission, payment, or additional compensation to
            you or a third party.
          </p>
          <p>
            It is your sole responsibility to ensure that your User Content
            complies with all applicable laws and these Terms and Conditions
            (including the Herogram End-User License Agreement). You acknowledge
            that Herogram will not be held liable in any way for User Content
            that is protected by copyright, including text, literary works,
            phrases, entries, and other materials.
          </p>
          <p>
            You must not upload, transmit, create, store, edit, use, or share
            any User Content that violates these Terms and Conditions (including
            the Herogram End-User License Agreement) and other applicable laws.
            You agree to indemnify and hold harmless Herogram from any Claim
            that alleges your User Content infringes the Intellectual Property
            Rights of any third party or results from your breach of these Terms
            and Conditions.
          </p>
          <p>
            Furthermore, you acknowledge and agree that (i) Output is generated
            by an Artificial Intelligence; (ii) Output may be false, inaccurate,
            or misleading; (iii) Herogram does not represent or warrant that
            Output is accurate, genuine, or true; (iv) Output is not advice,
            guidance, or information provided by Herogram in any way; (v)
            Herogram will not bear any responsibility or liability whatsoever
            for Output. Additionally, you understand and agree that output may
            not always be unique, as other users may receive the same or similar
            output from the same or similar input.
          </p>
          <h3 className="font-bold pt-4">
            Changes to This Terms and Conditions
          </h3>
          <p>
            We reserve the right to unilaterally revise and change our Terms and
            Conditions periodically. It is important that you frequently check
            this page for any updates. By posting the updated Terms and
            Conditions on our website, we will notify you of any changes, which
            will take effect on the day they are published. You agree that you
            are bound by these updates and modifications, and that you will be
            considered to have accepted them if you confirm them or use the Ask
            Brain2 App after they are published.
          </p>
          <p>
            You acknowledge that by accepting these Terms and Conditions, you do
            not gain any title or status as a representative, authorized person,
            agent, commercial representative, stakeholder, solution or business
            partner, dealer, or any other similar role with respect to Herogram.
            Therefore, you are not authorized to make any notification to be
            interpreted as such in any documents, brochures, advertisements,
            website or references made between third parties.
          </p>
          <p>These Terms and Conditions are effective as of 5 May 2023.</p>
          <h3 className="font-bold pt-4">Contact Us</h3>
          <p>
            If you have any questions or suggestions about our Terms and
            Conditions, do not hesitate to contact us at via{' '}
            <Link
              href="mailto:support@herogram.app"
              className="bg-grad-green text-white rounded-md px-2 py-1"
            >
              support@herogram.app.
            </Link>
          </p>
          <h3 className="font-bold pt-4">
            Herogram END-USER LICENSE AGREEMENT
          </h3>
          <p>
            The terms and conditions establish a legal agreement between the
            User and Herogram. It is essential to carefully read and understand
            all terms and conditions, as well as the scope of the Herogram
            Service. By utilizing the Ask Brain2 App, which is defined under
            Article 1.1, you are agreeing to the terms as outlined in these
            Terms and Conditions, including the Herogram End-User License
            Agreement and Privacy Policy. If you do not agree to these Terms and
            Conditions, including the Herogram End-User License Agreement and
            Privacy Policy, you should not use the Ask Brain2 App. If you
            continue to use the app, it will indicate your acceptance of the
            Terms and Conditions.
          </p>
          <h3 className="font-bold pt-4">1. TERMS OF USE</h3>
          <p>
            <strong>1.1. </strong>
            Herogram, a Dubai-based organization, is pleased to present to you
            the Ask Brain2 App, as well as its branded mobile applications and
            associated documentation (each a &quot;Herogram App&quot; and
            collectively, the &quot;Herogram Apps&quot;). A complete list of
            these apps can be found on the Apple App Store and/or Google Play.
            By using the Ask Brain2 App, you agree to be legally bound by these
            terms of service. These terms and conditions apply to all of
            Herogram&apos;s products or services that are offered through online
            platforms such as the Apple App Store, Google Play, or any other
            online platform (each a &quot;Herogram Service&quot; and
            collectively the &quot;Herogram Services&quot;). &quot;Use&quot; or
            &quot;using&quot; means accessing, using, installing, downloading,
            registering with, copying, in-app purchasing, or otherwise
            benefiting from the functionality of the Herogram Apps as per the
            documentation. Before accessing, installing, downloading,
            registering with, or using any Herogram Apps, please read this
            End-User License Agreement (the &quot;Agreement&quot;) carefully, as
            it governs your use of the Herogram Apps and how we provide them. If
            you do not agree with these terms, do not use the Herogram Services.
            Each time you access or use the Herogram Services, the current
            version of these terms will apply. In addition, this Agreement
            includes additional payment terms, in-app purchase options, and
            other requirements set forth on the download or purchase
            page/platform through which you download or purchase the Herogram
            Apps.
          </p>
          <p>
            <strong>1.2. </strong>
            The Herogram Privacy Policy (the &quot;Privacy Policy&quot;) is
            applicable to your use or access of the Herogram Services. You also
            agree to comply with any guidelines, policies, or procedures that
            may be published on the Herogram Services from time to time. We
            reserve the right to modify these terms at any time and without
            prior notice. However, any rights implied by law or under the terms
            of this Agreement remain unaffected by this modification. When you
            open, use, or access the Herogram Apps, the in-app message that
            notifies you of any changes will constitute a reasonable method of
            notification. Your continued use of the Herogram Apps after we post
            amendments or apply changes to this Agreement will indicate your
            acceptance of these amendments and/or changes. If you do not agree
            with any amendment, you must discontinue using the Herogram Apps. If
            you have any questions or concerns regarding the terms, please
            contact us at support@herogram.app.
          </p>
          <p>
            <strong>1.3. </strong>
            To clarify, all provisions in this Agreement that refer to the
            Herogram Apps and the Herogram Services are general terms and
            conditions that Herogram has established for its products and
            services. Although they are legally binding, these provisions only
            confer upon the User the rights specified herein for the Ask Brain2
            App. This Agreement does not grant the User any rights with respect
            to other Herogram Apps or Herogram Services.
          </p>
          <p>
            <strong>1.4. </strong>
            <span className="font-bold">NOTICE TO THE USER</span>: This is a
            legally binding agreement that you must understand and agree to
            before accessing or using any of the Herogram Services. If you do
            not agree to the terms of this Agreement or the Privacy Policy
            referenced herein, you must immediately leave the Apple App Store
            and/or Google Play and are not authorized to use or access any of
            the Herogram Services. However, depending on the laws of the
            jurisdiction where you live, you may have certain rights that cannot
            be waived through this Agreement, and certain provisions of this
            Agreement might be unenforceable as to you. If any term or condition
            of this Agreement is unenforceable, the remainder of the Agreement
            shall remain in full force and effect. By accessing or using the
            Herogram Services, you confirm that you are at least 18 years old
            (or if you are under 18 years old or under the legal majority age
            where you live, that you are using the Apple App Store and/or Google
            Play only with the approval of your parents or legal guardian), that
            you are legally able to enter into this Agreement, and that you have
            completely read, understood, and agree to be bound by this
            Agreement. Please note that to use Google Play, you must have a
            valid Google account and comply with any age restrictions that may
            apply to the use of specific content or features on Google Play.
          </p>
          <p>
            <strong>1.5. </strong>
            <span className="font-bold">
              NOTICE TO PARENTS AND LEGAL GUARDIANS
            </span>
            <span>
              : As a parent or legal guardian, if you permit your child to
              download, install, use, access, or register with the Herogram
              apps, you are hereby consenting to the terms of this agreement on
              behalf of your child. You are responsible for supervising your
              child&apos;s online and offline activities. If you do not agree to
              these terms, please do not allow your child to use the Herogram
              apps or associated features. In case you are the parent or legal
              guardian of a child under 18 and you suspect that they are using
              the Herogram apps without your prior approval, please contact us
              at{' '}
              <Link
                href="mailto:support@herogram.app"
                className="bg-grad-green text-white rounded-md px-2 py-1"
              >
                support@herogram.app.
              </Link>
            </span>
          </p>
          <h3 className="font-bold pt-4">2. PARTIES</h3>
          <p>
            <strong>2.1. </strong>This agreement is a binding contract between
            you, as the User, and Herogram, established upon your online
            approval, after you have downloaded and/or installed the Herogram
            app through the Apple App Store and/or Google Play. Both Herogram
            and you will be referred to individually as &quot;Party&quot; and
            collectively as &quot;Parties&quot; hereafter.
          </p>
          <p>
            <strong>2.2 </strong>
            Upon downloading and/or installing the Herogram App through the
            Apple App Store or Google Play, the User acknowledges, agrees, and
            represents that they have carefully read and understood all of the
            terms and provisions contained in this Agreement.
          </p>
          <h3 className="font-bold pt-4">3. HEROGRAM CONTACT INFORMATION</h3>
          <div className="w-full">
            <strong>3.1 </strong>
            <table className="border-collapse border w-full">
              <tbody>
                <tr>
                  <td className="border border-app-bg px-4 py-2">
                    <strong>Company Name:</strong>
                  </td>
                  <td className="border border-app-bg px-4 py-2">
                    Herogram FZ LLC
                  </td>
                </tr>
                <tr>
                  <td className="border border-app-bg px-4 py-2">
                    <strong>Address:</strong>
                  </td>
                  <td className="border border-app-bg px-4 py-2">
                    Dubai, United Arab Emirates
                  </td>
                </tr>
                <tr>
                  <td className="border border-app-bg px-4 py-2">
                    <strong>Email:</strong>
                  </td>
                  <td className="border border-app-bg px-4 py-2">
                    <a
                      href="mailto:support@herogram.app"
                      className="bg-grad-green text-white rounded-md px-2 py-1"
                    >
                      support@herogram.app
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="font-bold pt-4">4. GRANT OF LICENSE</h3>
          <p>
            <strong>4.1 </strong>
            Provided you comply with the terms of the Agreement, Herogram grants
            you a limited, non-exclusive, revocable, non-sub licensable,
            non-transferable license to access, download and install the latest
            available version of the Ask Brain2 App on a single mobile device
            that you own or control solely for your personal, lawful and
            non-commercial use as an end-user.
          </p>
          <p>
            <strong>4.2 </strong>
            It should be noted that all Herogram Apps are protected by
            intellectual property laws, international treaties, and copyright
            laws. Any software, designs, source codes, target codes,
            directories, images, or other content found on Herogram Apps is the
            exclusive property of Herogram. The User is only granted rights
            listed in Article 11 and Herogram reserves all other rights not
            expressly granted to the User. Additionally, Herogram retains
            ownership of the copyright in and to the Herogram Apps. The User is
            not permitted to duplicate, copy, distribute, process
            advertisements, images, texts, visual or audio images, files,
            databases, catalogs, or lists available on Herogram Apps, rent,
            lease, or lend the Herogram Apps to anyone, or permanently transfer
            any of their rights under this Agreement. Herogram is not
            responsible for any consequences arising from the illegal
            acquisition or use of Herogram Apps from an unauthorized
            distributor.
          </p>
          <h3 className="font-bold py-4">
            5. DESCRIPTION OF OTHER RIGHTS AND LIMITATIONS
          </h3>
          <p>
            <strong>5.1 </strong>
            Users must comply with all applicable laws and regulations while
            using Herogram Apps. They must not engage in any activity that is
            illegal, immoral, or could interfere with their use of Herogram
            Services, as outlined below. Herogram is not responsible for any
            losses resulting from a violation of this section. Violation of this
            section may result in the termination of this Agreement in
            accordance with Article 14 and the restriction of the User&apos;s
            access to Herogram Apps, either temporarily or permanently. Herogram
            also reserves the right to pursue legal action under both criminal
            and civil laws.
          </p>
          <p>
            <strong>5.2 </strong>
            The User is prohibited from transferring, selling, renting, leasing,
            sublicensing, distributing, assigning, copying (except for backup
            purposes), or granting any rights arising from the Herogram Apps to
            any third party. User shall not use the Herogram Apps for the
            benefit of any third party without express authorization from
            Herogram. The Herogram Apps are not to be made available over a
            network where it could be downloaded or used by multiple users,
            except with express authorization from Herogram. The User agrees not
            to use any device or process, such as robots or spiders, to
            interfere with the proper working of the Herogram Apps, except for
            the purpose of uninstalling or removing the Herogram Apps from a
            mobile device owned or controlled by the User. The User agrees not
            to deliver unlawful information or share harmful data, such as chain
            mail, malware, or viruses. The User also agrees not to violate or
            attempt to violate the security of the Herogram Services, except to
            the extent permitted by applicable law and this Agreement. The User
            shall not engage in activities that would negatively affect,
            obstruct, or manipulate the operation of the Herogram Apps, disable
            security systems, or attempt to do so through the preparation of
            automatic programs. Herogram reserves the right to take action,
            including cancellation of this Agreement in accordance with Article
            14 and restricting User&apos;s access to Herogram Apps, either
            temporarily or permanently. Herogram also retains the right to
            pursue legal remedies under both criminal and civil laws if the User
            violates this section.
          </p>
          <p>
            <strong>5.3 </strong>
            The User is prohibited from performing the following actions on the
            Herogram Apps: copying, adapting, translating, decompiling, reverse
            engineering, disassembling, modifying, recoding, creating derivative
            works or advertising the Herogram Apps. The User is also not allowed
            to access, create or modify the source code of any Herogram Apps.
            Any modifications or enhancements made to the Herogram Apps will
            remain the sole property of Herogram. The User must not attempt to
            obtain, copy or synchronize the source code of the Herogram Apps
            with other software or hardware, violate computer network security,
            or hack security passwords or codes. Moreover, the User shall not
            attempt to deliver SPAM mail or upload malware, and shall be
            responsible for any damages caused to Herogram and third parties.
          </p>
          <p>
            <strong>5.4 </strong>
            If the security of the network is threatened, or there is a risk of
            network, software or file malfunction, or to prevent potential
            disruptions, Herogram may terminate or restrict access to Herogram
            Apps without prior notice, in order to maintain network security and
            minimize the negative consequences.
          </p>
          <p>
            <strong>5.5 </strong>
            Herogram may make changes to the features or functions of its apps
            and may require users to update to new versions or accept the
            current agreement before accessing the app. Users should be aware
            that such updates may be necessary to use app stores or access
            content and agree to receive them automatically. While users may be
            able to manage updates to some content, if an update is needed to
            fix a critical security vulnerability, it may be completed
            regardless of the user&apos;s update settings or device. If content
            was initially downloaded from Google Play/App Store, updates from
            other app stores may be prevented or generate a warning. Herogram
            has no obligation to support previous app versions upon the release
            of updates, supplements, or subsequent versions.
          </p>
          <p>
            <strong>5.6 </strong>
            Access: The User is responsible for obtaining, at their own expense,
            all necessary equipment, internet connections, devices, and service
            plans required to access and use the Herogram Apps. If the User
            accesses the Herogram Apps using a mobile network, they may be
            subject to messaging, data, and other fees from their network or
            roaming provider. All fees charged for using the Herogram App from
            the User&apos;s device are their sole responsibility. The
            User&apos;s network provider may restrict, forbid, or limit their
            ability to download, install, or use specific Herogram Apps, and not
            all Herogram Apps may be compatible with the User&apos;s device or
            network provider. Herogram does not guarantee that the Herogram Apps
            are compatible with all hardware or cellular service packages.
            Herogram makes no representations or warranties that the Herogram
            Apps are suitable or accessible for use in any specific location or
            that they are available in all languages. The User must keep their
            account information confidential and not share it with anyone. The
            User must not collect or gather any personal data from any User of
            the Apple App Store and/or Google Play or any User of other Apple
            and/or Google Services via Apple App Store/Google Play, including
            account names.
          </p>
          <p>
            <strong>5.7 </strong>
            The Herogram Apps are available for purchase from mobile platform
            owners, such as Apple or Google, or via in-app purchase. Payment for
            such purchases may be processed by third-party payment processors
            acting on behalf of Herogram or directly by the mobile platform
            owner. It is important to note that specific countries have laws
            providing consumers with a right to cancel online purchases within a
            certain number of days after the purchase, such as European Union
            residents. Therefore, your right to cancel in-app purchases will
            depend on the country you reside in, and failure to comply with
            local laws regulating the right to cancel may be subject to the
            mobile platform owner&apos;s terms. It is recommended that you
            review the mobile platform owner&apos;s terms before making any
            purchases. Information regarding cancelling orders and obtaining
            refunds can be found on the website of the third-party re-seller
            from whom you purchased the app, such as the Apple App Store or
            Google Play. If you download Herogram Apps directly from Herogram
            and you are a resident of the European Union or your local law
            regulates the right to cancel, you agree to waive your cancellation
            and refund right once the download or relevant purchase is made. If
            you are not a resident of the European Union and your local laws do
            not regulate mandatory laws otherwise, you will have no right to
            cancel purchases made if you download Herogram Apps directly. This
            applies to subscriptions and in-app purchases, and is also subject
            to the provisions of Article 13 of the Agreement.
          </p>
          <p>
            <strong>5.8 </strong>
            It is your responsibility to promptly check the Herogram Apps to
            make sure that they are functioning as described and to inform us or
            the Google Play/App Store of any errors or defects that you may
            find. If you fail to comply with the terms of this Agreement and any
            other relevant documents, Herogram may terminate this Agreement and
            you will be required to uninstall or remove the Herogram Apps.
            Please also refer to the provisions of Article 14 of this Agreement.
          </p>
          <h3 className="font-bold pt-4">6. THIRD-PARTY PARTNERS</h3>
          <p>
            <strong>6.1 </strong>
            The Herogram Apps provide you with a variety of features,
            functionalities, and other services that may be subject to change
            over time. These are collectively referred to as the &quot;Herogram
            Apps Functions,&quot; and they are provided by both Herogram and
            third-party suppliers. These third-party suppliers may offer content
            and/or services in collaboration with or through the Herogram Apps,
            and are referred to as &quot;Third Party Partners.&quot;.
          </p>
          <p>
            <strong>6.2 </strong>
            The Herogram Apps may incorporate or be linked to third-party
            services, advertising, feeds, and content. If the User installs the
            Herogram App with such third-party services and content, these
            services and content are governed by the terms of service and
            privacy policies of the relevant Third-Party Partners. Such policies
            and terms of service can be found on their websites. It is important
            to note that Herogram has no control over these websites and
            resources. The User acknowledges and agrees that Herogram will not
            be responsible or liable, directly or indirectly, for any damage or
            loss caused or alleged to be caused by or in connection with the use
            of or reliance on any such Content, goods, or services available on
            or through any such website or resource. Herogram will not be
            involved or responsible for monitoring any transaction between the
            User and the Third-Party Partners.
          </p>
          <p>
            <strong>6.3 </strong>
            Access to Third Party Services and Content through Herogram Apps:
            The Content available through the Herogram Apps, including services,
            advertising, feeds, and data, whether publicly available or
            privately transmitted, is the sole responsibility of the entity or
            person who created it. By using Herogram Apps, you, as the User,
            agree and acknowledge that you may come across Content that may be
            offensive, indecent, or objectionable in your community. You assume
            all risks associated with using any Content, including any reliance
            on its accuracy or completeness. Herogram will not be responsible
            for any Content created by or originating from entities other than
            Herogram, including but not limited to, any errors or omissions in
            any such Content, or any loss or damage resulting from the
            transmission, sharing, or posting of such Content through Herogram
            Apps.
          </p>
          <h3 className="font-bold pt-4">7. SECURITY</h3>
          <p>
            <strong>7.1 </strong>
            The Herogram Apps, like other technologies in the market, may not
            provide complete security. By agreeing to this Agreement, you
            acknowledge and accept that the Herogram Apps, as well as any
            information you share or download via them, may be vulnerable to
            unauthorized access, interception, corruption, damage or misuse.
            Therefore, the Herogram Apps cannot guarantee 100% security.
          </p>
          <p>
            <strong>7.2 </strong>
            You acknowledge and agree that you are responsible for the security
            of your mobile device and any risks associated with the use of the
            Herogram Apps. You assume all responsibility for any damages that
            may result from unauthorized access, interception, corruption,
            damage or misuse of the app or information transmitted through it.
            It is your responsibility to protect your mobile device from
            unauthorized access and cyber-attacks, including the use of complex
            password protection. You acknowledge that Herogram is not
            responsible for any unauthorized access to your mobile device or any
            data stored on the app.
          </p>
          <p>
            <strong>7.3 </strong>
            To ensure your protection against security threats such as malicious
            third-party software and harmful URLs, Google may collect
            information about your device&apos;s network connections, operating
            system, and installed apps through Google Play or other sources.
            This helps Google to identify and prevent hazardous apps or URLs
            from being installed on your device and alert you accordingly. Even
            if you choose to disable some of these protections in your device
            settings, Google may still receive information about apps installed
            via Google Play and analyze apps installed from other sources for
            security issues without transmitting this information to Google.
          </p>
          <h3 className="font-bold pt-4">8. REGISTRATION AND PASSWORDS</h3>
          <p>
            <strong>8.1 </strong>
            While some of the Herogram Apps do not require registration, certain
            apps may provide the option or require you to create an account to
            gain access to additional features or functionalities. This process
            is called Registration and will be communicated to you when you
            attempt to use those particular apps. It is important to note that
            any registration required by Third-Party Partners is not covered by
            this Agreement, and you should refer to the relevant Third-Party
            Partners’ website for their policies.
          </p>
          <p>
            <strong>8.2 </strong>
            You are solely responsible for maintaining the confidentiality and
            security of any password and ID combination issued or chosen by you.
            It is your responsibility to ensure that your password(s) and ID(s)
            are kept confidential and secure. Any transactions made using your
            account, opened, held, accessed, or utilized with your password and
            ID are your responsibility. If there is any unauthorized use of your
            account or a security breach, it must be reported to us immediately,
            and you must confirm it in writing. This includes, but is not
            limited to, any loss, theft, leak, or unauthorized use of your
            password(s), ID(s), or any connected account. We reserve the right
            to suspend or terminate your account, deny any and all current or
            future use of the services, and seek any necessary legal remedies if
            we have good reason to believe that the security of your password
            and/or ID has been compromised. We are not responsible for any
            losses resulting from the misuse of any password or ID.
          </p>
          <p>
            <strong>8.3 </strong>
            If you provide any information in connection with your Registration,
            you must ensure that it is accurate, complete, and up-to-date. If we
            suspect that the information you provided is inaccurate, incomplete,
            or outdated, we reserve the right to suspend or terminate your use
            of the Herogram App and pursue legal action if necessary. By
            providing us with information, you agree that we may use it for the
            purposes outlined in this Agreement and as described in our Privacy
            Policy to further enhance your use of the Herogram App and our
            services.
          </p>
          <p>
            <strong>8.4 </strong>
            The Ask Brain2 App offers basic functions and services to users
            without requiring registration. However, users may choose to
            register and access additional features and services by using
            authentication methods provided by Third-Party Partners, such as
            Google, Apple, and email accounts. Users are solely responsible for
            ensuring the security of their access tools and keeping them away
            from third-party use, and any transactions made through their
            authenticated account are deemed to be made by the user themselves.
            Herogram is not responsible for any damages incurred by users or
            third parties due to negligence or faults related to security,
            storage, and use of the user&apos;s access tools. Registered users
            may access certain features, such as publishing materials for others
            to see, which are not available to non-registered users. Users must
            acknowledge that without registering according to this provision,
            they will not be able to access certain features provided to
            registered users.
          </p>
          <h3 className="font-bold pt-4">
            9. UNINSTALL AND REMOVING OF THE HEROGRAM APPS
          </h3>
          <p>
            The process for uninstalling and removing the Herogram Apps may
            differ depending on the type of device you have. To uninstall and
            remove the apps, we suggest utilizing the application manager that
            is available on your device. If you require further assistance,
            please refer to your device manual for more information.
          </p>
          <h3 className="font-bold pt-4">
            10. CONSENT TO USE OF DATA AND USER REVIEWS
          </h3>
          <p>
            <strong>10.1 </strong>
            By using the Herogram Apps, you consent to the collection and
            utilization of technical data and related information. This includes
            but is not limited to information about your device, system,
            application software, and peripherals, which is periodically
            gathered to facilitate the provision of software updates, product
            support, and other related services to you (if any). The information
            collected will be used in accordance with our Privacy Policy.
          </p>
          <p>
            <strong>10.2 </strong>
            If you decide to leave a review for the Herogram Apps on any social
            media platform or communication channel, please note that the
            information you provide may become public, including your username.
            If you do not want us to use your review for promotional purposes,
            please send your request to support@herogram.app, and include your
            name, mailing address, and email address. Please do not include
            sensitive information such as passwords, social security numbers,
            national ID numbers, or payment card details when using these
            features for security reasons. We reserve the right to monitor
            messages and communications between users for security and training
            purposes, but are not obliged to do so. We also reserve the right to
            remove any inappropriate content.
          </p>
          <p>
            <strong>10.3 </strong>
            If you download the Herogram Apps through Google Play or App Store,
            please be aware that, posting reviews shall be subject to the
            relevant virtual store’s policies.
          </p>

          <h3 className="font-bold pt-4">11. INTELLECTUAL PROPERTY RIGHTS</h3>
          <p>
            <strong>11.1 </strong>
            Herogram is the exclusive owner of all products, services, projects,
            and documents used in connection with the Herogram Apps and Herogram
            Services, including but not limited to visuals, texts, bulletins,
            slogans, videos, designs, know-how, business data, illustrations,
            databases, system flow data, logos, emblems, and data. Additionally,
            Herogram is the owner of intellectual property rights such as
            Herogram trademarks and trade dressings, flows, source codes,
            researches, codes, methods, statistical figures, financial and moral
            rights, and all other intellectual property rights relating to the
            preparation and supply of the Herogram Services under the United
            Arab Emirates&apos; Consumer Protection Law (Federal Law No. 24 of
            2006) and other applicable legislation. The User agrees not to
            engage in reverse engineering or attempt to acquire the source code
            of the Herogram Apps, violate network security or crack encryption
            codes, send SPAM mail, or load malicious software. Any losses
            incurred by Herogram or third parties as a result of such actions
            shall be the User&apos;s responsibility.
          </p>
          <p>
            <strong>11.2 </strong>
            To clarify, &quot;intellectual property rights&quot; refer to all
            rights recognized in any country or jurisdiction under patent,
            trademark, copyright, trade secret laws, or any other intellectual
            or proprietary rights, including moral or similar rights. The User
            is not permitted to remove or modify any copyright, trademark, or
            other proprietary rights notices displayed on or within the Herogram
            Apps by Herogram or Third-Party Partners. It should be noted that
            all rights not explicitly granted hereunder are reserved to Herogram
            and its licensors. Without our prior written consent, the User is
            not granted a license or right to use any of our trade names,
            trademarks, or service marks.
          </p>
          <p>
            <strong>11.3 </strong>
            Unless otherwise agreed upon by Herogram and the User, Herogram
            grants worldwide, indefinite, and exclusive rights to use any
            related Herogram Services. Herogram retains the right to determine
            ownership and usage of intellectual property rights. If different
            terms are suggested by Herogram, they should be communicated to the
            User before the Herogram Service is used or before operations for
            the Herogram Service commence.
          </p>
          <p>
            <strong>11.4 </strong>
            The User assumes full responsibility for any content they provide,
            submit, or display, or any adaptations of works created through the
            use of the Herogram Apps. The User must ensure that any such
            content, including photos, texts, documents, videos, and music
            files, complies with the law and does not infringe on any rights,
            including copyright or other intellectual property rights of
            Herogram, other Users, or any third parties. It is important to note
            that the User affirms and warrants that they have legal rights to
            any data, information, or content they use, and such use does not
            breach any laws or third-party rights. The User also agrees to
            indemnify Herogram and third parties for any damages that may result
            from their use of data, information, or content for which they do
            not have legal rights.
          </p>
          <p>
            <strong>11.5 </strong>
            Herogram acknowledges the intellectual property rights of copyright
            holders and expects its users to do the same. Herogram will take
            appropriate measures to remove any content that violates the rights
            of others to copy. Herogram may also disable the access to its
            services for any user who frequently infringes on the intellectual
            property rights of others using the Herogram Apps or other services.
          </p>
          <p>
            <strong>11.6 </strong>
            Herogram reserves the right to remove objectionable content, which
            includes but is not limited to content that violates any applicable
            laws or regulations, is harmful, threatening, abusive, harassing,
            tortuous, defamatory or libelous, advocates hate crimes or
            discrimination, or that may harm minors in any way. Additionally,
            private information such as phone numbers, addresses, or Social
            Security numbers should not be shared. Content that is vulgar,
            offensive, obscene, pornographic, or contains spam, chain letters,
            pyramid schemes, malicious software, or computer viruses is also
            prohibited. Users agree not to use Herogram Apps for any purpose
            that violates any laws or regulations, harms minors, generates or
            disseminates false or personal information, defames or harasses
            others, discriminates against individuals or groups based on legally
            protected characteristics or categories, or provides medical advice
            or interpretation of medical results. Additionally, the use of
            Herogram Apps is prohibited for any purpose intended to exploit the
            vulnerabilities of a specific group of persons, or for
            administration of justice, law enforcement, immigration or asylum
            processes, such as predicting an individual will commit fraud or
            crime.
          </p>
          <p>
            <strong>11.7 </strong>
            Social Security numbers should not be shared. Content that is
            vulgar, offensive, obscene, pornographic, or contains spam, chain
            letters, pyramid schemes, malicious software, or computer viruses is
            also prohibited. Users agree not to use Herogram Apps for any
            purpose that violates any laws or regulations, harms minors,
            generates or disseminates false or personal information, defames or
            harasses others, discriminates against individuals or groups based
            on legally protected characteristics or categories, or provides
            medical advice or interpretation of medical results. Additionally,
            the use of Herogram Apps is prohibited for any purpose intended to
            exploit the vulnerabilities of a specific group of persons, or for
            administration of justice, law enforcement, immigration or asylum
            processes, such as predicting an individual will commit fraud or
            crime.
          </p>
          <p>
            <strong>11.7 </strong>
            Herogram cannot screen or monitor all information submitted through
            the Herogram Apps, but by using the service, users give consent for
            representatives of Herogram to monitor any content submitted. Users
            should understand that submitting content does not guarantee
            privacy. Herogram reserves the right to refuse, edit, modify, or
            remove any content as it sees fit.
          </p>
          <p>
            <strong>11.8 </strong>
            Users are not permitted to use stream-ripping, stream capture, or
            similar software to record or copy any content or in-app features
            presented in streaming format through Google Play or the Herogram
            Apps. Furthermore, users may not remove watermarks, labels, or other
            legal or proprietary notices included in any content or features.
            Any attempt to modify content obtained through Google Play or the
            Herogram Apps for the purpose of disguising or changing ownership or
            source indications is also prohibited.
          </p>
          <p>
            <strong>11.9 </strong>
            Herogram may terminate a user&apos;s access to the Herogram Apps if
            the user is found to be a repeat infringer under the above
            provisions.
          </p>
          <h3 className="pt-4 font-bold">12. RIGHTS INFRINGEMENTS</h3>
          <p>
            <strong>12.1</strong>
            Confidentiality, intellectual property rights, including copyrights,
            and personal data are of utmost importance to Herogram, and we
            prioritize transparency regarding these matters. By using Herogram
            Apps, Users agree to comply with the principles outlined in this
            Agreement and other materials provided by Herogram. Users must
            ensure that they only upload materials they have produced or have
            been authorized to use on Herogram Apps. Additionally, Users must
            not infringe on the rights of other Users under this Agreement.
          </p>
          <p>
            <strong>12.2</strong>
            If you believe in good faith that materials transmitted or created
            through Ask Brain2 App infringe your copyright, personal right, or
            privacy, you can submit an infringement form to Herogram requesting
            the removal of the material or blocking access to it
          </p>
          <h3 className="pt-4 font-bold">13. IN-APP PURCHASE AND PAYMENT</h3>
          <p>
            <strong>13.1</strong>
            The Herogram Apps will be available worldwide through the Apple App
            Store and/or Google Play, with some features and limitations only
            accessible through in-app purchases. If you wish to use these paid
            features, you must make a payment before accessing them. In-app
            purchases are available on a weekly, monthly, quarterly,
            semi-annual, or annual basis and are automatically renewed by the
            Apple App Store and/or Google Play until canceled by you. The Apple
            App Store and/or Google Play will send a renewal reminder email with
            a hyperlink to the subscription management process before renewal.
            Payments for in-app purchases will be processed by the Apple App
            Store and/or Google Play from which you originally downloaded the
            application, and you can view the relevant in-app purchase rules and
            policies directly from the Apple App Store and/or Google Play. You
            understand and agree that it is your responsibility to manage your
            in-app purchases and monitor the amount spent on in-app purchases
            within the Herogram Apps.
          </p>
          <p>
            <strong>13.2</strong>
            Please note that to purchase content or the Herogram Apps through
            Google Play, you must have a Google Payments account and agree to
            the Google Payments Terms and Terms of Service. Each time you use
            your Google Payments account to purchase content, the Google
            Payments Privacy Notice will apply. You are responsible for all
            payments related to purchases made through your Google Payments
            account. Additionally, Google may offer alternative payment
            processing options outside of Google Payments to simplify your
            purchases through Google Play. You must comply with the relevant
            terms and conditions or other legal agreement that governs your use
            of any payment processing method, whether with Google or a third
            party. Google may add or remove payment processing methods at its
            discretion. You are solely responsible for all amounts payable
            associated with any purchases you make on Google Play.
          </p>
          <p>
            <strong>13.3</strong>
            To determine your eligibility to bill purchases of content or the
            Herogram Apps to your network provider&&apos;s account, Google Play
            will send your device&&apos;s identifiers to your network provider
            when you create a Google Play account on a device. You must accept
            the network provider&&apos;s terms of service to allow this. The
            network provider may send us your billing address information.
            Google Play will hold and use this information in accordance with
            Google&&apos;s Privacy Policies and Google Payments Privacy Notice
          </p>
          <p>
            <strong>13.4</strong>
            If you are under 18, you must have your parents or legal guardians
            permission to make any in-app purchases. By completing an in-app
            purchase, you confirm that you have all necessary permission to make
            that purchase. If you are a parent or legal guardian of someone
            under the age of 18, we recommend that you consider any parental
            control that may be provided by the Apple App Store and/or Google
            Play if you are concerned that your child may make excessive in-app
            purchases
          </p>
          <p>
            <strong>13.5</strong>
            Herogram wishes to make it clear that in-app purchases are made from
            and billed by the Apple App Store or Google Play, not by Herogram.
            Any purchases made are subject to the terms and conditions of the
            respective app store. If you have any billing or refund inquiries,
            please contact the Apple App Store and/or Google Play directly, as
            Herogram does not have access to these accounts and transactions.
          </p>
          <p>
            <strong>13.6</strong>
            In the event that an in-app purchase is not downloaded successfully
            or does not work once it has been downloaded, we will investigate
            the reason for the fault after being notified by you. We will then
            decide whether to provide you with a replacement in-app purchase or
            issue you with a patch to repair the fault. We will not charge you
            any additional fees to replace or repair the in-app purchase. If we
            are unable to replace or repair the in-app purchase or do so within
            a reasonable period of time and without significant inconvenience to
            you, we will authorize the Apple App Store and/or Google Play to
            refund you an amount up to the cost of the relevant in-app purchase.
            If you wish to request a refund, you may contact the Apple App Store
            and/or Google Play directly.
          </p>
          <p>
            <strong>13.7</strong>
            It is acknowledged and agreed that the Apple App Store and/or Google
            Play, from whose platform you downloaded the Herogram Apps, are
            solely responsible for handling all billing and transaction
            processes related to the app. The terms and conditions/end user
            license agreement of the Apple App Store and/or Google Play shall
            govern these processes. In the event of any payment-related issues
            with in-app purchases, it is advised to directly contact the Apple
            App Store and/or Google Play
          </p>
          <h3 className="pt-4 font-bold">14. TERM AND TERMINATION</h3>
          <p>
            <strong>14.1</strong>
            This Agreement will take effect on the date of approval and will
            remain in force as long as the User continues to use the Ask Brain2
            App. It will continue to be legally effective and operative between
            Herogram and the User.
          </p>
          <p>
            <strong>14.2</strong>
            Under any circumstances where the User breaches this Agreement or
            any other agreements or rules applicable to different services
            offered over the Apple App Store and/or Google Play, Herogram may
            unilaterally terminate this Agreement without any obligation of
            compensation and further notice. Specifically, this includes if the
            User manipulates the operation of the Herogram Apps using any
            method, violates the provisions of this Agreement or any other
            agreements to be executed over the Apple App Store and/or Google
            Play, or violates third party rights. Additionally, if the data,
            contents, visuals, texts and articles shared with Ask Brain2 App by
            the User have an unlawful element or are posted for unlawful or
            immoral purposes, Herogram may terminate the Agreement.
          </p>
          <p>
            <strong>14.3</strong>
            The User agrees that Herogram will not be liable to the User or any
            third-party for any termination or disabling of the Herogram Apps.
            Upon termination of this Agreement, the User must immediately stop
            using the Ask Brain2 App and uninstall, remove or destroy all copies
            of the Ask Brain2 App in their possession or control. However, the
            termination will not limit any of Herogram&&apos;s other rights or
            remedies at law.
          </p>
          <h3 className="pt-4 font-bold">15. INDEMNIFICATION</h3>
          <p>
            <strong>15.1</strong>
            You agree to hold harmless and indemnify Herogram, its affiliates,
            officers, directors, licensors, partners, shareholders, licensees,
            contractors, agents, attorneys, employees, and third-party service
            providers (collectively referred to as the “Indemnitees”) from any
            and all claims, liabilities, costs, and expenses, including
            reasonable attorneys fees (collectively, “Claims”) that directly or
            indirectly result from your use of the Herogram Services, your
            information, or your breach of this Agreement.
          </p>
          <p>
            <strong>15.2</strong>
            You agree to assume sole responsibility for defending any Claims
            made against any Indemnitee, while granting the relevant Indemnitee
            the right to participate with counsel of its own choosing.
            Additionally, you agree to pay for any damages or losses arising
            from any Claims against any Indemnitee. You will not agree to any
            settlement that imposes any obligation or liability on any
            Indemnitee without obtaining Herogram&&apos;s prior express written
            consent.
          </p>
          <h3 className="pt-4 font-bold">16. WARRANTY DISCLAIMER</h3>
          <p>
            <strong>16.1</strong>
            To the extent permitted by applicable law, Herogram Apps are
            provided to you &&apos;AS IS&&apos;, &&apos;WITH ALL FAULTS&&apos;
            and &&apos;AS AVAILABLE&&apos;, and you use them at your own risk.
            Subject to applicable law, Herogram, on behalf of itself and its
            affiliates, licensors, distributors, vendors, agents, and suppliers,
            expressly disclaims any and all warranties of any kind, whether
            express or implied, including but not limited to the implied
            warranties of merchantability, non-infringement, and any other
            warranty arising from applicable legislation
          </p>
          <p>
            <strong>16.2</strong>
            Herogram makes no warranty that the Herogram Apps will meet your
            requirements, be uninterrupted, timely, secure, or error-free, or
            that the results obtained from the use of the Herogram products will
            be accurate or reliable. Additionally, Herogram assumes no liability
            or responsibility for any property damage resulting from your use of
            the Herogram Apps, any unauthorized access to or use of our secure
            servers and/or any personal or financial information stored therein,
            any interruption or cessation of transmission to or from the
            Herogram Apps or servers, any bugs, viruses, Trojan horses, or other
            harmful content transmitted by any third party, or any errors or
            omissions in any content. Furthermore, Herogram will not be liable
            for any loss or damage of any kind incurred as a result of the use
            of any content posted, e-mailed, transmitted, or otherwise made
            available via the Herogram Apps
          </p>
          <p>
            <strong>16.3</strong>
            The Herogram Apps may include a feature that allows you to record
            phone conversations on your Android or iOS device. However, it is
            important to note that some local, state, federal, and international
            laws prohibit the recording of third-party audio without the consent
            of all parties involved. It is your responsibility to comply with
            all applicable laws regarding call recording and obtaining any
            necessary consent. Please be aware that Herogram is not responsible
            for any failure to comply with local, state, federal, or
            international laws regarding third-party audio recording.
          </p>
          <p>
            <strong>16.4</strong>
            You should be aware that the use and performance of the Herogram
            Apps are at your own risk. Herogram explicitly disclaims all
            warranties regarding products and/or services provided by Third
            Party Partners. This warranty disclaimer is an essential part of
            this agreement.
          </p>
          <h3 className="pt-4 font-bold">17. LIMITATION OF LIABILITY</h3>
          <p>
            <strong>17.1</strong>
            In accordance with applicable laws, it is understood and agreed that
            Herogram shall not be liable for any direct, indirect, incidental,
            special, consequential, or exemplary damages. This includes, but is
            not limited to, damages for loss of profits, goodwill, use, data, or
            other intangible losses, resulting from: (i) the use or inability to
            use the Herogram Apps; (ii) unauthorized access to or alteration of
            your transmission or data; (iii) statements or conduct of any third
            party; or (iv) any other matter relating to Herogram.
          </p>
          <p>
            <strong>17.2</strong>
            Herogram’s total liability to you for all damages, losses, and
            causes of action (whether in contract, tort or otherwise) shall not
            exceed the amount paid by you for accessing the Herogram App. The
            aforementioned limitations will be applicable even if the stated
            remedy fails of its essential purpose.
          </p>
          <h3 className="pt-4 font-bold">
            18. FORCE MAJOR EVENT AND APPLICABLE LAW
          </h3>
          <p>
            <strong>18.1</strong>
            In legal terms, if an event of force majeure occurs, Herogram will
            not be held liable for any failure to perform its obligations,
            whether incomplete or delayed, as agreed herein. Such failures will
            not be considered default or incomplete or faulty performance, and
            no compensation claim may be made against Herogram.
          </p>
          <p>
            <strong>18.2</strong>
            The term &&apos;force majeure events&&apos; in this agreement refers
            to any event that is beyond the reasonable control of Herogram and
            cannot be avoided despite reasonable care, including but not limited
            to acts of God, riots, insurrections, war, interruptions in
            communication, infrastructure and internet network failures, power
            failures, mobilization, strikes, fire, explosion, terrorism, cyber
            attacks, prolonged power outages, internet outages, computer
            viruses, legislative amendments, and adverse weather conditions.
          </p>
          <p>
            <strong>18.3</strong>
            In the event of a force majeure event, Herogram shall not be liable
            for any failure to perform its obligations under this Agreement, or
            for any delayed, incomplete, or faulty performance. The User shall
            not be entitled to claim default interest or indemnification from
            Herogram for any delayed, incomplete, or non-performance of any
            provision in this Agreement due to force majeure events.
          </p>
          <p>
            <strong>18.4</strong>
            This Agreement and legal relations arising hereunder shall be
            governed and construed as per laws in Dubai Free Zone, Dubai, United
            Arab Emirates. Emirati Courts (Dubai, United Arab Emirates Courts
            and Execution Offices)) shall have jurisdiction over any actual or
            potential dispute arising from this Agreement. To the maximum extent
            permitted by law, you hereby consent to the jurisdiction and venue
            of such courts and waive any objections to such jurisdiction and
            venue.
          </p>
          <h3 className="pt-4 font-bold">
            19. FORCE MAJOR EVENT AND APPLICABLE LAW
          </h3>
          <p>
            <strong>19.1</strong>
            This Agreement governs your use of the Ask Brain2 App and Services,
            and constitutes the entire agreement between you and Herogram
            regarding this subject matter, replacing any prior or
            contemporaneous understandings.
          </p>
          <p>
            <strong>19.2</strong>
            Any changes to this Agreement must be made in writing and signed by
            Herogram to be valid. Herogram&&apos;s failure to enforce any rights
            granted or take action against a breach of this Agreement by either
            party does not constitute a waiver of its right to enforce such
            rights or take future actions in case of breaches.
          </p>
          <p>
            <strong>19.3</strong>
            This Agreement may be translated for local requirements, but in case
            of a conflict between the English version and any non-English
            version, the English version shall prevail to the extent not
            prohibited by law.
          </p>
          <p>
            <strong>19.4</strong>
            If any provision of this Agreement is declared void or unenforceable
            in a particular situation by any judicial or administrative
            authority, the remaining provisions shall remain valid and
            enforceable to the fullest extent permitted by law, and the
            provision in question shall be interpreted and enforced to the
            maximum extent legally permissible in order to effectuate the
            original intent. If no such interpretation or enforcement is legally
            permissible, the offending provision shall be deemed severed from
            this Agreement.
          </p>
        </section>
      </Card>
    </div>
  );
}

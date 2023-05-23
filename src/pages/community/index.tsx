/* eslint-disable react/no-unknown-property */
import React from 'react';
import Card from '@/components/Card';
import TermsBanner from '@/components/TermsBanner';

export default function CommunityCustom() {
  return (
    <div className="h-screen flex justify-center bg-gray-50">
      <TermsBanner heading="Community Guidelines" />
      <Card className="absolute p-8 md:p-16 font-lato font-light">
        <section className="text-gray-700">
          <style jsx>{`
            section > p:not(:last-of-type) {
              margin-bottom: 2rem;
            }
          `}</style>
          <p>Update Date: 8 May 2023</p>
          <p>Thank you for joining the Brain2 community!</p>
          <p>
            We aim to foster a positive and creative environment where everyone
            can find joy. To ensure that everyone has a positive experience
            while using Brain2 App and our services, we kindly ask that you
            adhere to all relevant laws and show respect for the rights of
            individuals and communities worldwide.
          </p>
          <p>
            To help you understand what is expected of you, we have provided
            these Community Guidelines. They outline the rules and regulations
            that must be followed when using Brain2 App and our services.
          </p>
          <p>
            Please note that Herogram reserves the right to take appropriate
            action, including removing content, suspending service access,
            removing, blocking, or banning accounts or servers, and reporting to
            relevant authorities, in the event of a violation of our Community
            Guidelines.
          </p>
          <h3 className="font-bold pt-4">Adhering to the Law</h3>
          <p>
            Brain2 is committed to maintaining a safe and lawful environment. We
            kindly request that you refrain from engaging in any activities or
            creating any content that violates any applicable national, federal,
            state, local, or international laws and regulations.
          </p>
          <p>
            All content that encourages, glorifies, supports, or suggests
            illegal activities is strictly prohibited. This includes content
            that promotes, supports, or enables:{' '}
            <li>
              {' '}
              Acts of terrorism or other forms of crimes against humanity
            </li>{' '}
            <li> Human exploitation </li>{' '}
            <li>
              The possession, use, and trade of drugs, firearms, or other
              controlled substances, as well as other forms of trafficking
            </li>
            <li>
              Crimes against persons and animals, such as homicide, assault,
              rape, kidnapping, and domestic abuse Crimes against property, such
              as damage to property, vandalism, theft, robbery, and shoplifting.{' '}
            </li>{' '}
          </p>
          <p>
            We take any violations of these guidelines very seriously and
            reserve the right to take appropriate actions, including removing
            content, suspending access to our services, and reporting to the
            relevant authorities if we find any violations.
          </p>
          <h3 className="font-bold pt-4">Safety for Minors</h3>
          <p>
            It is strictly prohibited to create any content that exploits or
            harms minors or that attempts, risks, or threatens to do so.
            Additionally, content that has the purpose or effect of exploiting
            or harming a minor is unacceptable.
          </p>
          <p>
            Brain2 has a zero-tolerance policy for content that describes a
            child in a sexual, pornographic, or violent manner. We will remove
            any such content, as well as the associated account, and report it
            to the relevant public authorities.
          </p>
          <p>
            We take these matters very seriously and prioritize the safety and
            well-being of minors. If we find any content that violates these
            guidelines, we reserve the right to take appropriate action,
            including removing the content and suspending service access to the
            user.
          </p>
          <h3 className="font-bold pt-4">Content Safety</h3>
          <p>
            At Brain2, our goal is to provide a safe and welcoming environment
            for all users. Therefore, we do not allow any content that depicts
            pornography, nudity, sexual imagery, sexual organs, sexual
            intercourse, sexual services, genitals, or intimate images to be
            created using our services.
          </p>
          <p>
            Furthermore, we strictly prohibit the creation of any content that
            depicts gore. This includes illustrations of violence, blood,
            deformed bodies, or detached body parts of humans and animals, among
            other things.
          </p>
          <p>
            We take any violations of these guidelines very seriously and will
            take appropriate action, including removing content and suspending
            service access to the user if necessary. Our aim is to provide a
            positive and enjoyable experience for everyone on our platform, and
            we appreciate your cooperation in upholding these standards.
          </p>
          <h3 className="font-bold pt-4">
            Disinformation and Dangerous Content
          </h3>
          <p>
            Brain2 strictly prohibits the creation or sharing of harmful content
            or disinformation, including false, inaccurate, or misleading
            information that may harm others. This includes medical advice,
            conspiracy theories, and false information related to natural
            disasters or emergencies. Brain2 also prohibits content that may
            provoke hate, prejudice, or fear. Creating or sharing content for
            use in law enforcement, immigration, or asylum processes is also
            prohibited.
          </p>
          <h3 className="font-bold pt-4">Harmful Content</h3>
          <p>
            Brain2 strictly prohibits any form of harassment or hateful
            behaviour towards individuals or specific groups based on their
            personal characteristics or vulnerabilities. This includes personal
            attacks, name-calling, trolling, profanity, sexual objectification,
            or content intended to shame or degrade others. We also prohibit any
            content that encourages or glorifies violence, discrimination, or
            defamation. Brain2 does not permit the creation or sharing of
            content that promotes self-harm, suicide, eating disorders, cutting,
            or any other forms of harming oneself. Additionally, the platform
            cannot be used to create content of self-harm as a form of threat or
            emotional manipulation.
          </p>
          <h3 className="font-bold pt-4">Personal/Private Information</h3>
          <p>
            In order to protect the privacy of individuals, Brain2 strictly
            prohibits the creation or sharing of content that violates the
            privacy of others, including the disclosure of personal or
            identifiable information without permission. Examples of such
            information include but are not limited to:
          </p>
          <li>Identification information,</li>
          <li>private addresses,</li>
          <li>medical records,</li>
          <li>photos, images</li>
          <li>social media profile details such as usernames and passwords.</li>

          <h3 className="font-bold pt-4">Intellectual Property Rights</h3>
          <p>
            Brain2 takes the protection of intellectual property and personal
            rights seriously. Generating or sharing content that violates the
            intellectual property rights of any person, such as copyrights or
            trademarks, is strictly prohibited. Additionally, we do not allow
            any content that violates or threatens to violate the personal
            rights of individuals or creates a binding, enforceable obligation.
          </p>
          <p>
            If you encounter any content or user that you suspect may violate
            our community guidelines, please report it to us at
            support@herogram.app. For any questions regarding our Community
            Guidelines, please contact our support team at support@herogram.app.
          </p>
          <p>
            Please note that these guidelines will be updated periodically, and
            we will inform you of any updates. Thank you for your help in
            maintaining Brain2 as a safe and enjoyable platform for everyone.
          </p>
        </section>
      </Card>
    </div>
  );
}

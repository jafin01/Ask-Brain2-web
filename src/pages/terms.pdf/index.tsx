import React from 'react';
// import TermsBanner from '@/components/TermsBanner';
// import Card from '@/components/Card';
import Head from 'next/head';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms and Conditions</title>
      </Head>
      <div className="h-screen">
        <embed
          src="/docs/terms.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
          title="Helloo this is new"
        />
      </div>
    </>
    // <div className="h-screen flex justify-center bg-gray-50">
    //   <TermsBanner heading="Terms and Conditions" />
    //   <Card className="p-16 font-lato font-light">
    //     <section className="text-gray-700">
    //       <style jsx>{`
    //         section > p:not(:last-of-type) {
    //           margin-bottom: 2rem;
    //         }
    //       `}</style>
    //       <p>
    //         If you download, install, register with, or use the Ask Brain2 App
    //         (Ask Brain2 App), these terms and conditions (Terms and Conditions)
    //         will apply to you automatically. It is important to read these terms
    //         and conditions carefully before using the Ask Brain2 App. The
    //         Services provided by the Ask Brain2 App, which include developing
    //         and sharing visual material with other users through an AI algorithm
    //         based on the texts and photos you submit, as well as the art styles
    //         offered, can only be used with the permission granted under these
    //         Terms and Conditions. You are not permitted to copy, modify, or use
    //         our trademarks in any way. Additionally, you may not attempt to
    //         extract the source code, translate the Ask Brain2 App into other
    //         languages, or make derivative versions. Herogram FZ LLC (Herogram)
    //         owns the Ask Brain2 App, and all the trademarks, copyright, database
    //         rights, and other intellectual property rights related to it.
    //       </p>
    //       <p>
    //         Herogram is dedicated to providing users with a useful and efficient
    //         Ask Brain2 App. To achieve this, we may make changes to the Ask
    //         Brain2 App or introduce charges for certain services at any time,
    //         for any reason. We will always provide clear information regarding
    //         any costs associated with the use of the Ask Brain2 App or Herogram
    //         Services.
    //       </p>
    //       <p>
    //         The Ask Brain2 App processes and stores personal data provided by
    //         you to deliver our Service. You are responsible for maintaining the
    //         security of the Ask Brain2 App on your phone and preventing
    //         unauthorized access. To ensure proper functionality of the Ask
    //         Brain2 App, we recommend that you do not jailbreak or root your
    //         device as it may compromise the security features and increase the
    //         risk of malware or viruses.
    //       </p>
    //       <p>
    //         Please note that certain functions of the Ask Brain2 App require an
    //         active internet connection, which can be provided by Wi-Fi or your
    //         mobile network provider. We cannot be held responsible if the Ask
    //         Brain2 App does not function at full capacity due to lack of Wi-Fi
    //         or data allowance. It is important to be aware that there are
    //         certain things that Herogram will not take responsibility for.
    //       </p>
    //       <p>
    //         When using the Ask Brain2 App without a Wi-Fi connection, you should
    //         be aware that your mobile network provider&apos;s terms and
    //         conditions will still apply. This means you may be charged by your
    //         mobile provider for the duration of the connection while accessing
    //         the Ask Brain2 App, or for other third-party charges. You will be
    //         responsible for any such charges, including roaming data charges if
    //         you use the Ask Brain2 App outside of your home territory without
    //         turning off data roaming. If you are not the bill payer for the
    //         device on which you&apos;re using the Ask Brain2 App, we assume that
    //         you have received permission from the bill payer for using the app.
    //       </p>
    //     </section>
    //   </Card>
    // </div>
  );
}

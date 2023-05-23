import React from 'react';
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
          <p>dsohjfajksld</p>
        </section>
      </Card>
    </div>
  );
}

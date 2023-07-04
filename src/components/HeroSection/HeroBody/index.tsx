import React from 'react';
import CallToAction from '../CallToActionButton';
import IllustrationCard from '../IllustrationCard';
import InfoCard from '../InfoCard';
import ChatCard from '../ChatCard';

export default function HeroBody() {
  return (
    <section className="w-3/4 m-auto my-4 flex justify-center">
      {/* left side section */}
      <section className="w-3/4 flex pl-8 justify-center">
        {/* wrapper div for 2 rows in flex */}
        <div className="w-full">
          {/* first row */}
          <div className="w-full flex">
            <div className="w-1/2" />
            <div className="flex-1">
              <CallToAction />
            </div>
          </div>
          {/* second row */}
          <div className="flex w-full pr-4 gap-4 justify-between">
            <IllustrationCard />
            <div className="w-2/3">
              <InfoCard />
            </div>
          </div>
        </div>
      </section>
      <section className="w-1/4 h-auto flex justify-center">
        <ChatCard />
      </section>
    </section>
  );
}

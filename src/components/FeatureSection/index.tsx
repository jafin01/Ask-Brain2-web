import React from 'react';
import ThreeSphere from '../ThreeModel';
import FeatureCard from './FeatureCard';

export default function Features() {
  return (
    <div className="relative">
      <div>
        <FeatureCard className=" top-10 left-10" />
        {/* <div className="absolute bottom-10 left-10">Hello</div> */}
        <FeatureCard className="top-10 right-10" />
      </div>
      <ThreeSphere />
      <div>
        {/* <div className="absolute top-10 right-10">hey</div>
        <div className="absolute bottom-10 right-10">hey</div> */}
        <FeatureCard className="bottom-10 left-10" />
        <FeatureCard className="bottom-10 right-10" />
      </div>
    </div>
  );
}

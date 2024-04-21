import { homeCardLinks } from '@/constants';
import React from 'react';
import HomeCard from './HomeCard';

function HomeFlipList() {
  return (
    <section className="grid xl:grid-cols-4 gap-5 max-sm:grid-cols-1 md:grid-cols-2 mt-10">
        {homeCardLinks.map((item) => (
          <HomeCard
            key={item.title}
            ClassName={item.ClassName}
            tagline={item.tagline}
            title={item.title}
            route={item.route}
            Icon={item.Icon}
          ></HomeCard>
        ))}
      </section>
  );
}

export default HomeFlipList;

import React, { useEffect, useState } from 'react';
import useIntersectionObserver from '..';
import country from '../data/country.json';

function ContentScrolled() {
  const [data, setData] = useState(country.slice(0, 50));
  const { ref, inView } = useIntersectionObserver();

  useEffect(() => {
    if (inView) {
      setData((state) => {
        console.log(inView);
        return [...state, ...country.slice(50, 100)];
      });
    }
  }, [inView]);

  return (
    <div
      style={{
        width: '300px',
        height: '300px',
        padding: '20px',
        border: 'solid 1px #ededed',
        overflow: 'auto',
        fontFamily: 'Tahoma'
      }}
    >
      <div>
        {data.map((item, index) => (
          <div key={index}>{item.name}</div>
        ))}
        <div ref={ref} />
      </div>
    </div>
  );
}

export { ContentScrolled };

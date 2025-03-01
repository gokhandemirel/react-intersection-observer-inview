# react-intersection-observer-inview

## Getting Started

```bash
  npm install react-intersection-observer-inview
```

## Usage

```jsx
import React from 'react';
import { useIntersectionObserver } from 'react-intersection-observer-inview';

const Component = () => {
  const { ref, inView } = useIntersectionObserver({
    // Optional options
    root: // Not used because ref was used
    threshold: 0,
    rootMargin: '0px 0px 0px 0px',
  });

  return (
    <div ref={ref}>
      <span>{`Inview state ${inView}.`}</span>
    </div>
  );
};
```

## LICENSE

[MIT](LICENSE)
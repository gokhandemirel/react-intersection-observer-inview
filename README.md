# React Intersection Observer Inview

A lightweight and simple React hook for detecting if an element is in the viewport using the Intersection Observer API. Perfect for lazy loading, infinite scrolling, animations, and more!

## Installation

```bash
npm install react-intersection-observer-inview
or
yarn install react-intersection-observer-inview
```

# Features

- Uses the Intersection Observer API for efficient viewport detection.
- Simple React hook interface for easy integration.
- Minimal setup required.
- TypeScript support for better development experience.

## Usage

```jsx
import React from 'react';
import { useIntersectionObserver } from 'react-intersection-observer-inview';

const MyComponent = () => {
  const { ref, inView } = useIntersectionObserver({
    threshold: 0.5,  // Element is considered in view when 50% is visible
    rootMargin: '0px 0px 0px 0px', // Optional margin for the root element
  });

  return (
    <div ref={ref}>
      <span>{`In View: ${inView ? 'Yes' : 'No'}`}</span>
    </div>
  );
};

export default MyComponent;

```

## Props
- `root?` - The element to use as the viewport for intersection checking. Defaults to the browser viewport.
- `rootMargin?` - 	Margin around the root element. Accepts CSS margin property values.
- `threshold?` - Percentage of the target element's visibility required to trigger the observer. (0 - 1)

## Return values
- `ref` - The reference to be attached to the target element.
- `inView` - `true` if the element is in the viewport, otherwise `false`.
- `entry?` - The entry object from the Intersection Observer (optional)

## LICENSE

[MIT](LICENSE)
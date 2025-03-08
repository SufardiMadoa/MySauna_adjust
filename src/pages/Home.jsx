import React, { lazy, Suspense } from 'react';

const Hero = lazy(() => import('../components/home/Hero'));
const About = lazy(() => import('../components/home/About'));
const Features = lazy(() => import('../components/home/Features'));
const Impact = lazy(() => import('../components/home/Impact'));
const Community = lazy(() => import('../components/home/Community'));
const Articles = lazy(() => import('../components/home/Articles'));

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Hero />
      <About />
      <Features />
      <Impact />
      <Community />
      <Articles />
    </Suspense>
  );
};

export default Home;

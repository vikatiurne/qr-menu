import React from 'react';
import CostSavings from '@/components/Home/CostSavings/CostSavings';
import Footer from '@/components/Home/Footer/Footer';
import Hero from '@/components/Home/Hero/Hero';
import JoinUs from '@/components/Home/JoinUs/JoinUs';
import MenuOptions from '@/components/Home/MenuOptions/MenuOptions';
import Container from '@/hoc/Container/Container';

const Home: React.FC = () => {
  return (
    <div className=" min-h-screen scroll-smooth">

      {/* <Container padding=" flex-grow xl:px-[9rem] xl:pt-[4.5625rem] xl:pb-[6.25rem] px-4 pb-[3.125rem] pt-[3.125rem] sm:px-11 sm:pt-[3.56rem] sm:pb-20"> */}
      <Container padding="flex-grow xl:px-[9rem] xl:pt-[4.5625rem] xl:pb-[6.25rem] px-4 pb-[3.125rem] pt-[3.125rem] sm:px-11 sm:pt-[3.56rem] sm:pb-20">
        <Hero />
        <MenuOptions />
        <CostSavings />
        <JoinUs />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;

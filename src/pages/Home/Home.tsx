import CostSavings from '@/components/Home/CostSavings/CostSavings';
import Footer from '@/components/Home/Footer/Footer';
import Hero from '@/components/Home/Hero/Hero';
import JoinUs from '@/components/Home/JoinUs/JoinUs';
import MenuOptions from '@/components/Home/MenuOptions/MenuOptions';
import Container from '@/hoc/Container/Container';

const Home: React.FC = () => {
  return (
    <div>
      <Container>
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

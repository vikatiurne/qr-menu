import Container from '@/hoc/Container/Container';
import bgImage from '@/assets/images/Auth/bg-image.png';
import GroupFon from '@/assets/images/Auth/GroupFon.png';
import RegistrationForm from '../../../components/Auth/Registration/RegistrationForm';

const Registration: React.FC = () => {
  return (
    <div>
    <Container>
      <RegistrationForm />
    </Container>
    <div className="absolute top-0 right-0 max-w-[620px] h-[300px]  max-sm:w-[265px] sm:h-[670px]  ">
          <img src={bgImage} className=" w-full h-full" alt="bg-imge" />
          <img
            src={GroupFon}
            className="absolute top-[268px] left-[73px]   w-[423px] h-[430px] hidden sm:block"
            alt="bg-imge"
          />
        </div>
  </div>
  )
};

export default Registration;

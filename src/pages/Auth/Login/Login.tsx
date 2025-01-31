import Container from '@/hoc/Container/Container';
import LoginForm from '../../../components/Auth/Login/LoginForm';
import bgImage from '@/assets/auth/png/bg-image.png';
import GroupFon from '@/assets/auth/png/GroupFon.png';

const Login: React.FC = () => {
  return (
    <div>
      <Container>
        <LoginForm />
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
  );
};

export default Login;

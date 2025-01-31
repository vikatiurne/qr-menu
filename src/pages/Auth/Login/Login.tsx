import Container from '@/hoc/Container/Container';
import LoginForm from '../../../components/Auth/Login/LoginForm';
import bgImage from '@/assets/images/Auth/bg-image.png';
import GroupFon from '@/assets/images/Auth/GroupFon.png';

const Login: React.FC = () => {
  return (
    <div>
      <Container>
        <LoginForm />
      </Container>
      <div className="absolute top-0 right-0 max-w-[620px] max-h-[670px] max-sm:w-[265px] max-sm:h-[300px]  ">
          <img src={bgImage} className=" w-full h-full" alt="bg-imge" />
          <img
            src={GroupFon}
            className="absolute top-[268px] left-[73px]   w-[423px] h-[430px] max-sm:hidden"
            alt="bg-imge"
          />
        </div>
    </div>
  );
};

export default Login;

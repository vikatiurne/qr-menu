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
      <div className="absolute max-sm:top-0 right-0 max-sm:w-[255px] max-sm:h-[300px]  w-[590px]  top-0 h-[660px]  ">
        <img src={bgImage} className=" w-full h-full" alt="bg-imge" />
        <img
          src={GroupFon}
          className="absolute top-[238px] right-[88px]   max-w-[423px] max-h-[430px] max-sm:hidden"
          alt="bg-imge"
        />
      </div>
    </div>
  );

};

export default Login;

import Container from '@/hoc/Container/Container';
import PasswordRecoveryForm from '@/components/Auth/PasswoRecoveryForm/PasswordRecoveryForm';
import Group1 from '@/assets/images/Auth/PasswordRecovery/Group1.png';
import Group2 from '@/assets/images/Auth/PasswordRecovery/Group2.png';
import Group3 from '@/assets/images/Auth/PasswordRecovery/Group3.png';
import Group4 from '@/assets/images/Auth/PasswordRecovery/Group4.png';

const PasswordRecovery: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Container>
        <PasswordRecoveryForm />
      </Container>

      <div
        className="absolute right-0 top-0 translate-x-1/3 -translate-y-1/3 w-[80vw] h-[80vw] bg-[#98F8CC45] rounded-full 
        sm:w-[70vw] sm:h-[70vw] sm:translate-x-[45%]
        lg:w-[1100px] lg:h-[1100px] lg:translate-x-[60%] lg:-translate-y-[30%]
        xl:w-[1552px] xl:h-[1552px] xl:translate-x-[55%] xl:-translate-y-[35%]
        transition-all duration-500"
      >
        <img
          src={Group1}
          alt="Group1"
          className="absolute top-[620px] left-[147px] mobile:hidden tab:hidden imgBG:w-[150px] imgBG:h-[150px] imgBG:top-[450px] imgBG:left-[140px]"
        />
        <img
          src={Group2}
          alt="Group2"
          className="absolute top-[960px] left-[240px] mobile:hidden tab:hidden imgBG:w-[150px] imgBG:h-[150px] imgBG:top-[720px] imgBG:left-[190px]"
        />
        <img
          src={Group3}
          alt="Group3"
          className="absolute top-[1180px] left-[597px] mobile:hidden tab:hidden imgBG:w-[75px] imgBG:h-[150px] imgBG:top-[880px] imgBG:left-[460px]"
        />
        <img
          src={Group4}
          alt="Group4"
          className="absolute top-[560px] left-[597px] mobile:hidden tab:hidden imgBG:w-[75px] imgBG:h-[150px] imgBG:top-[360px] imgBG:left-[460px]"
        />
      </div>
    </div>
  );
};

export default PasswordRecovery;

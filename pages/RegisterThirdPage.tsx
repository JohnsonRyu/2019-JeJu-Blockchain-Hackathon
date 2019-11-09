import PageLayout from "../layouts/PageLayout"
import RegisterThree from "../components/RegisterPage/RegisterThree"
import UserHeader from "../components/UserHeader/UserHeader"
import NavTopHeader from "../components/Common/NavTopHeader"
import NavBottomFooter from "../components/Common/NavBottomFooter"

const RegisterThirdPage = () => (
  <PageLayout headerTitle="반려견 등록" isBack>
    <RegisterThree />
  </PageLayout>
);
export default RegisterThirdPage;

import PageLayout from "../layouts/PageLayout"
import RegisterFour from "../components/RegisterPage/RegisterFour"
import UserHeader from "../components/UserHeader/UserHeader"
import NavTopHeader from "../components/Common/NavTopHeader"
import NavBottomFooter from "../components/Common/NavBottomFooter"

const RegisterFourthPage = () => (
  <PageLayout headerTitle="반려견 등록" isBack>
    <RegisterFour />
  </PageLayout>
);
export default RegisterFourthPage;

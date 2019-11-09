import PageLayout from "../layouts/PageLayout"
import RegisterTwo from "../components/RegisterPage/RegisterTwo"
import UserHeader from "../components/UserHeader/UserHeader"
import NavTopHeader from "../components/Common/NavTopHeader"
import NavBottomFooter from "../components/Common/NavBottomFooter"

const RegisterSecondPage = () => (
  <PageLayout headerTitle="반려견 등록" isBack>
    <RegisterTwo />
  </PageLayout>
);
export default RegisterSecondPage;

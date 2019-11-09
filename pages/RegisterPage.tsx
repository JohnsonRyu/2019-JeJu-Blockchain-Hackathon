import PageLayout from "../layouts/PageLayout"
import Register from "../components/RegisterPage/Register"
import UserHeader from "../components/UserHeader/UserHeader"
import NavTopHeader from "../components/Common/NavTopHeader"
import NavBottomFooter from "../components/Common/NavBottomFooter"

const RegisterPage = () => (
  <PageLayout headerTitle="반려견 등록" isBack>
    <Register />
  </PageLayout>
);
export default RegisterPage;

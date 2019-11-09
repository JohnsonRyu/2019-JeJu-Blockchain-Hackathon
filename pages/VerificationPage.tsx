import PageLayout from "../layouts/PageLayout"
import Verification from "../components/VerificationPage/Verification"
import UserHeader from "../components/UserHeader/UserHeader"
import NavTopHeader from "../components/Common/NavTopHeader"
import NavBottomFooter from "../components/Common/NavBottomFooter"

const VerificationPage = () => (
  <PageLayout headerTitle="신분인증" isBack>
    <Verification />
  </PageLayout>
);
export default VerificationPage;

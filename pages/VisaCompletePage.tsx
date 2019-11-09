import PageLayout from "../layouts/PageLayout"
import RegisterTwo from "../components/RegisterPage/RegisterTwo"
import Complete from "../components/Visa/Complete"
import NavTopHeader from "../components/Common/NavTopHeader"
import NavBottomFooter from "../components/Common/NavBottomFooter"

const VisaCompletePage = () => (
  <PageLayout headerTitle="VISA 발급" isBack>
    <Complete />
  </PageLayout>
);
export default VisaCompletePage;

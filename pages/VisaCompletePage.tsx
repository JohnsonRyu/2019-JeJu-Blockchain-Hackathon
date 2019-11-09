import PlainPageLayout from "../layouts/PlainPageLayout"
import RegisterTwo from "../components/RegisterPage/RegisterTwo"
import Complete from "../components/Visa/Complete"
import NavTopHeader from "../components/Common/NavTopHeader"
import NavBottomFooter from "../components/Common/NavBottomFooter"

const VisaCompletePage = () => (
  <PlainPageLayout headerTitle="VISA 발급" isBack>
    <Complete />
  </PlainPageLayout>
);
export default VisaCompletePage;

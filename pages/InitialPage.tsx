import PageLayout from "../layouts/PageLayout"
import Initial from "../components/InitialPage/Initial"
import NonAuthUserHeader from "../components/UserHeader/NoAuthUserHeader"
import NavTopHeader from "../components/Common/NavTopHeader"
import NavBottomFooter from "../components/Common/NavBottomFooter"

const InitialPage = () => (
  <PageLayout headerTitle="반려견 DID" isBack={false} >
    {/* <NavTopHeader title="댕댕 VISA" /> */}
    <NonAuthUserHeader />
    <Initial />
    {/* <NavBottomFooter /> */}
  </PageLayout>
);
export default InitialPage;

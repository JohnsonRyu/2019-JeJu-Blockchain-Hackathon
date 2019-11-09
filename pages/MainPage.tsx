import PageLayout from "../layouts/PageLayout"
import Main from "../components/MainPage/Main"
import UserHeader from "../components/UserHeader/UserHeader"
import NavTopHeader from "../components/Common/NavTopHeader"
import NavBottomFooter from "../components/Common/NavBottomFooter"

const MainPage = () => (
  <PageLayout headerTitle="반려견 DID" isBack={false} >
    {/* <NavTopHeader title="댕댕 VISA" /> */}
    <Main />
    {/* <NavBottomFooter /> */}
  </PageLayout>
);
export default MainPage;

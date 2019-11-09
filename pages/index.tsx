// import HomePage from "./HomePage"

// const Index = () => (
//   <HomePage />
// );

// export default Index;




import NonAuthPageLayout from "../layouts/NonAuthPageLayout"
import Initial from "../components/InitialPage/Initial"
import NonAuthUserHeader from "../components/UserHeader/NoAuthUserHeader"
import NavTopHeader from "../components/Common/NavTopHeader"
import NavBottomFooter from "../components/Common/NavBottomFooter"

const Index = () => (
  <NonAuthPageLayout headerTitle="반려견 DID" isBack={false} >
    {/* <NavTopHeader title="댕댕 VISA" /> */}
    {/* <NonAuthUserHeader /> */}
    <Initial />
    {/* <NavBottomFooter /> */}
  </NonAuthPageLayout>
);
export default Index;

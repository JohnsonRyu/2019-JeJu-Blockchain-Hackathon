// import HomePage from "./HomePage"

// const Index = () => (
//   <HomePage />
// );

// export default Index;




import PageLayout from "../layouts/PageLayout"
import Initial from "../components/InitialPage/Initial"
import NonAuthUserHeader from "../components/UserHeader/NoAuthUserHeader"
import NavTopHeader from "../components/Common/NavTopHeader"
import NavBottomFooter from "../components/Common/NavBottomFooter"

const Index = () => (
  <PageLayout headerTitle=" " isBack={false} >
    {/* <NavTopHeader title="댕댕 VISA" /> */}
    <NonAuthUserHeader />
    <Initial />
    {/* <NavBottomFooter /> */}
  </PageLayout>
);
export default Index;

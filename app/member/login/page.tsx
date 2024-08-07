import AppLayout from "@/src/components/AppLayout";
import Login from "@/src/feat-components/Login";

const LoginPage = () => {
  return <AppLayout isFlatMode children={<Login />} />;
};

export default LoginPage;

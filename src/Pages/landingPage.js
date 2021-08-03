import { Layout, Menu, Breadcrumb, Button } from "antd";
import "../styles/landingPage.css";

const LandingPage = () => {
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <img src="orange1.png" alt="orange1" />
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          marginTop: 10,
        }}
      >
        <div className="logo">
          <img src="logo1.png" alt="logo1" />
        </div>
        <Menu mode="horizontal">
          <Menu.Item key="3">
            <Button>Join waitlist</Button>
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Quickpickup (c) 2021</Footer>
    </Layout>
  );
};

export default LandingPage;

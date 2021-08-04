import { Layout, Button } from "antd";
import "../styles/landingPage.css";
import background from "../assets/orange1.png";
import Logo1 from "../assets/logo1.png";
import Blackrec from "../assets/black.png";
import FirstContent from "./firstContent";

const LandingPage = () => {
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <Header
        style={{
          //   position: "fixed",
          // zIndex: 1,
          width: "100%",

          backgroundImage: `url(${background})`,
        }}
      >
        <div
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="logo">
            <img src={Logo1} alt="logo1" />
          </div>

          <Button>Join waitlist</Button>
        </div>
        <FirstContent />
      </Header>
      <Content className="site-layout" style={{ marginTop: 0 }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380, background: "#2D2B2B" }}
        >
          Content
        </div>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380, background: "#FFFFFF" }}
        >
          Content
        </div>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380, background: "#1F1F1F" }}
        >
          Content
        </div>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380, background: "#000000" }}
        >
          Content
        </div>
      </Content>
      <div style={{ backgroundImage: `url(${Blackrec})` }}>
        <div
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="logo">
            <img src={Logo1} alt="logo1" />
          </div>

          <Button>Join waitlist</Button>
        </div>
        <Footer style={{ textAlign: "center" }}>Quickpickup (c) 2021</Footer>
      </div>
    </Layout>
  );
};

export default LandingPage;

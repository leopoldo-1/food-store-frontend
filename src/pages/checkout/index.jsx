import { Layout, theme, Typography } from "antd";
const { Content } = Layout;
const { Title, Paragraph } = Typography;

import { HeaderComponent } from "../../../components/ui";

export default function checkoutPage ()  {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  const { useToken } = theme;
  const { token } = useToken();

  return (
    <Layout>
      <HeaderComponent/>
      <Content
        style={{
          padding: '0px 24px',
          borderRadius: '10px',
          height: '100vh'
        }}
      >
        <main style={{ paddingTop: '15px' }}>
          <div style={{marginBottom: '40px'}} >
            <Title 
              level={2} 
              style={{
                color: token.colorPrimary, 
                marginBottom: '0px',
              }}
              >
              Checkout
            </Title>
          </div>
        </main>
      </Content>
    </Layout>
  )
}
import React from 'react';
import { Drizzle } from '@drizzle/store';
import { drizzleReactHooks } from "@drizzle/react-plugin";

import drizzleOptions from "./drizzleOptions";
import LoadingContainer from './LoadingContainer.js';
import TokenMetadata from './TokenMetadata.js';
import TokenWallet from './TokenWallet.js';

import { Layout,Col, Row  } from 'antd';

const { Header, Content } = Layout;

const drizzle = new Drizzle(drizzleOptions);
const { DrizzleProvider } = drizzleReactHooks;

function App() {
  return (
      <Layout style={{height: "100%",width: "100%", position : "absolute"}}>

          <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
              <div>
                  <span style={{color: "white",fontSize: 28}}>ERC20 Token</span>
              </div>
          </Header>
              <Content
                  style={{
                      padding: 24,
                      margin: 0,
                      minHeight: 100,
                      background: "#F0F0FF",
                  }}
              >
                  <div className="container">
                      <DrizzleProvider drizzle={drizzle}>
                          <LoadingContainer>
                              <Row  gutter={48}>
                                  <Col span={24}>
                                      <TokenMetadata />
                                  </Col>
                              </Row>
                              <Row  gutter={48} style={{marginTop: 24}}>
                                  <Col span={24}>
                                      <TokenWallet />
                                  </Col>
                              </Row>
                          </LoadingContainer>
                      </DrizzleProvider>
                  </div>
              </Content>
      </Layout>

  );
}

export default App;

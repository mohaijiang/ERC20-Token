import React from "react";
import { drizzleReactHooks } from "@drizzle/react-plugin";
import { newContextComponents } from "@drizzle/react-components";
import { Card,Descriptions } from 'antd';

const { useDrizzle, useDrizzleState } = drizzleReactHooks;
const { ContractData } = newContextComponents;

export default () => {
  const { drizzle } = useDrizzle();
  const state = useDrizzleState(state => state);
  return (
    <Card  style={ { width: "50%", height: "100%"}}  bordered={false}>
        <Descriptions title="Metadata" bordered>
            <Descriptions.Item label="Name">
                <ContractData
                    drizzle={drizzle}
                    drizzleState={state}
                    contract="ERC20Token"
                    method="name"
                />
            </Descriptions.Item>
            <Descriptions.Item label="Symbol">
                <ContractData
                    drizzle={drizzle}
                    drizzleState={state}
                    contract="ERC20Token"
                    method="symbol"
                />
            </Descriptions.Item>
            <Descriptions.Item label="Decimals">
                <ContractData
                    drizzle={drizzle}
                    drizzleState={state}
                    contract="ERC20Token"
                    method="decimals"
                />
            </Descriptions.Item>
            <Descriptions.Item label="Balance">
                <ContractData
                    drizzle={drizzle}
                    drizzleState={state}
                    contract="ERC20Token"
                    method="balanceOf"
                    methodArgs={[state.accounts[0]]}
                />
            </Descriptions.Item>

        </Descriptions>
    </Card>
  );
};

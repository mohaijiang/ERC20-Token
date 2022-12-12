import React from "react";
import { drizzleReactHooks } from "@drizzle/react-plugin";
import { newContextComponents } from "@drizzle/react-components";
import { Card,Descriptions } from 'antd';
import "./TokenWallet.css"


const { useDrizzle } = drizzleReactHooks;
const { ContractForm } = newContextComponents;

export default () => {
  const { drizzle } = useDrizzle();
  return (
    <Card  style={ { width: "50%", height: "100%"}}  bordered={false}>

        <Descriptions column={1} title="Contract Method" bordered>
            <Descriptions.Item label="Transfer">
                <ContractForm
                    drizzle={drizzle}
                    contract="ERC20Token"
                    method="transfer"
                />
            </Descriptions.Item>

            <Descriptions.Item label="Transfer from">
                <ContractForm
                    drizzle={drizzle}
                    contract="ERC20Token"
                    method="transferFrom"
                />
            </Descriptions.Item>

            <Descriptions.Item label="Approve">
                <ContractForm
                    drizzle={drizzle}
                    contract="ERC20Token"
                    method="approve"
                />
            </Descriptions.Item>
        </Descriptions>

    </Card>
  );
};

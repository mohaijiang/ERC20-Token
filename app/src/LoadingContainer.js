import React from "react";
import { drizzleReactHooks } from "@drizzle/react-plugin";

const { useDrizzleState } = drizzleReactHooks;

function LoadingContainer({children}) {

  const drizzleStatus = useDrizzleState(state => state.drizzleStatus);

  if(drizzleStatus.initialized === false) {
    return "You need to switch to the local network where the erc20 contract is deployed in metamask  ...";
  }
  return (
    <>
      {children}
    </>
  )
}

export default LoadingContainer;

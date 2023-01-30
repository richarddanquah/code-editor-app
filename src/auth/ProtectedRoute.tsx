import { withAuthenticationRequired } from "@auth0/auth0-react";
import React, { ComponentType, PropsWithChildren } from "react";
import Loading from "../components/common/Loading";
import { Route } from "react-router-dom";

const ProtectedRoute = (props: PropsWithChildren<{ [key: string]: any }>) => {
  const { children, ...args } = props;
  
  return (
    <Route component={withAuthenticationRequired(children as unknown as ComponentType, {onRedirecting: ()=>  <Loading />})}  {...args} />
  );
};

export default ProtectedRoute;

import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LogtoProvider, LogtoConfig } from "@logto/react";
import { mountRemoteComponent } from '@/utils/loadComponent';

import "jquery-ui-bundle";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "jquery-nice-select";
import "owl.carousel/dist/owl.carousel.min";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "./style/sass/style.scss";

import Auth from "./components/SignIn/Auth";
const Layout = lazy(() => import("./components/Layout"));
const Home = lazy(() => import("./screens/Home"));
const Shop = lazy(() => import("./screens/Shop"));
const ShopDetail = lazy(() => import("./screens/ShopDetail"));
const Contact = lazy(() => import("./screens/Contact"));
const ShoppingCart = lazy(() => import("./screens/ShoppingCart"));
const Checkout = lazy(() => import("./screens/Checkout"));
import eventBus  from 'js-event-bus';

function App() {
  const config: LogtoConfig = {
    endpoint: "http://localhost:3001",
    appId: process.env.LOGTO_KEY as string,
  };
  const eventBusInit: any = new eventBus();
  
  return (
    <LogtoProvider config={config}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout eventBus={eventBusInit}/>}>
            <Route index element={<Home eventBus={eventBusInit}/>} />
            <Route path="/callback" element={<Auth />} />
            <Route path="/shop">
              <Route index element={<Shop />} />
              <Route path=":id" element={<ShopDetail />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<Checkout eventBus={eventBusInit}/>} />
          </Route>
        </Routes>
      </Router>
      {mountRemoteComponent({ module: 'chat', component: 'Chatbox'})}
      {mountRemoteComponent({ module: 'shared', component: 'SnackMessage', props: {
        eventBus: eventBusInit,
      }})}
    </LogtoProvider>
  );
}

export default App;

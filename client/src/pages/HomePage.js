import React from "react";
import Layout from "../components/Layout/Layout.js";
import { useAuth } from "../context/auth.js";
const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"Best offeres"}>
      <h1>HomePage</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};

export default HomePage;

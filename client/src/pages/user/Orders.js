import React from "react";
import Layout from "../../components/Layout/Layout.js";
import UserMenu from "../../components/Layout/UserMenu.js";

const Orders = () => {
  return (
    <Layout title=" your orders">
      <div className="container-fluid p-3 m-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1>All Orders</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;

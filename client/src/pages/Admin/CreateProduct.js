import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout.js";
import AdminMenu from "../../components/Layout/AdminMenu.js";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
const { Option } = Select;
const CreateProduct = () => {
  const [categories, setCategories] = useState([]);
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQunatity] = useState("");
  const [shipping, setShipping] = useState("");

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };
  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <Layout title={"Create Product"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Product</h1>
            <div className="m-1 w-75">
              <Select
                boarder={false}
                placeholder="Select a Category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setCategory(value);
                }}
              >
                {categories?.map((c) => (
                  <Option Key={c._id} value={c.name}>
                    {c.name}
                  </Option>
                ))}
              </Select>{" "}
              <div className="mb-3">
                <label
                  htmlFor="upload images"
                  className="btn btn-outline-secondary"
                >
                  Upload Photo
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onClick={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;

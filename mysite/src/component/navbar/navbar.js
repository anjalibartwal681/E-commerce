/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Items from "../ProductItems/Items";
import "./navbar.css";
import "../style/product.css";
import { ApiData } from "../Data";
import { Box, Button, Modal } from "@mui/material";
import LoginModal from "./login";
import SignupModal from "./signup";
// import { UserPage } from "../user/user";
// import UserPage from "../user/user";
// import EditProfilePage from "../../editUser/edituser";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Navbar = ({ addToCart }) => {
  const [cart, setCart] = useState(ApiData);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filterName, setFilterName] = useState();
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const navigation = useNavigate();

  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);
  const handleOpenSignup = () => setOpenSignup(true);
  const handleCloseSignup = () => setOpenSignup(false);

  const filteredItemsAccordingCat = selectedCategory
    ? cart.filter((item) => item.category === selectedCategory)
    : cart;

  const filteredItems = filterName
    ? filteredItemsAccordingCat.filter((item) =>
        item.title.toLowerCase().includes(filterName.toLowerCase())
      )
    : filteredItemsAccordingCat;

  return (
    <header>
      <div className="t-div">
        <div className="nav-bar0">
          <div className="brand0">E-Cart</div>
          <div className="seacrhbar0">
            <input
              type="text"
              value={filterName}
              placeholder="search Product"
              onChange={(e) => {
                setFilterName(e.target.value);
              }}
            />
          </div>
          <div style={{ display: "flex", color: "white" }}>
            <Button style={{ color: "#ffff" }} onClick={handleOpenLogin}>
              Login
            </Button>
            <Button style={{ color: "#fff" }} onClick={handleOpenSignup}>
              Signup
            </Button>
          </div>
          <div>
            <Modal
              open={openLogin}
              onClose={handleCloseLogin}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <LoginModal />
              </Box>
            </Modal>
            <Modal
              open={openSignup}
              onClose={handleCloseSignup}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <SignupModal />
              </Box>
            </Modal>
          </div>
          <div className="cart0" onClick={() => navigation("/cart")}>
            <FaCartPlus />
            <span className="cart-count0"></span>
          </div>
        </div>
      </div>
      <div className="n-div">
        <div className="navside-wrap">
          <div className="nav-bar-wrapper0">
            <div className="item0" onClick={() => setSelectedCategory(null)}>
              All Products
            </div>
            <div
              className="item0"
              style={
                selectedCategory === "mobiles"
                  ? {
                      backgroundColor: "blue",
                      borderRadius: "5px",
                      height: "40px",
                      width: "90px",
                      textAlign: "center",
                      padding: "5px 10px",
                      fontSize: "20px",
                    }
                  : {}
              }
              onClick={() => setSelectedCategory("mobiles")}
            >
              Mobiles
            </div>
            <div
              className="item0"
              style={
                selectedCategory === "laptops"
                  ? {
                      backgroundColor: "blue",
                      borderRadius: "5px",
                      height: "40px",
                      width: "90px",
                      textAlign: "center",
                      padding: "5px 10px",
                      fontSize: "20px",
                    }
                  : {}
              }
              onClick={() => {
                setSelectedCategory("laptops");
              }}
            >
              Laptops
            </div>

            <div
              className="item0"
              style={
                selectedCategory === "tablets"
                  ? {
                      backgroundColor: "blue",
                      borderRadius: "5px",
                      height: "40px",
                      width: "90px",
                      textAlign: "center",
                      padding: "5px 10px",
                      fontSize: "20px",
                    }
                  : {}
              }
              onClick={() => setSelectedCategory("tablets")}
            >
              Tablets
            </div>
          </div>
        </div>
      </div>
      <div>
     
        {/* <EditProfilePage /> */}
      </div>
      <div
        className="side-wrap"
        style={{
          maxWidth: "1440px",
          margin: "auto",
          padding: "25px 25px",
          position: "relative",
        }}
      >
        <div className="container_main">
          {filteredItems.map((element, id) => (
            <div key={id}>
              < Items
                item1={element}
                onAddToCart={addToCart}
                cart={cart}
                className="item-container"
              />
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

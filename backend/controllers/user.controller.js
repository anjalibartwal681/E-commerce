import userModel from "../model/user.model.js";

const regiterController = async (req, res) => {
    try {
      const { name, email, password, contact } = req.body;
      //VALIDATION OF ALL FIELDS
      if (!name) {
        return res.status(404).json({
          success: false,
          message: "Name Is Required",
        });
      }
      if (!email) {
        return res.status(404).json({
          success: false,
          message: "Email Is Required",
        });
      }
      if (!password) {
        return res.status(404).json({
          success: false,
          message: "Password Is Required",
        });
      }
      if (!contact) {
        return res.status(404).json({
          success: false,
          message: "Phone Number Is Required",
        });
      }

      // REGISTER USER
      const user = await new userModel({
        name,
        email,
        password,
        contact
      }).save();
  
      res.status(201).json({
        success: true,
        message: "User Register Successfully...",
        user,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Something Went Wrong In User Registration",
        error,
      });
    }
  };

  export {regiterController}
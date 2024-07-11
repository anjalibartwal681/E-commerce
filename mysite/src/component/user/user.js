// /* eslint-disable no-unused-vars */
// /* eslint-disable react-hooks/exhaustive-deps */
// import { useState, useEffect } from "react";

// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableRow from "@mui/material/TableRow";
// import {
//   ALL_USERS_LIST,
//   API_URL,
//   REQUEST_METHOD,
// } from "../../ApiData/constant";
// import useCrud from "../../useCrud/useCrud";
// import { Button } from "@mui/material";
// import FectApiData from "../../apigetdata/getdata";

//  function UserPage() {
//   // Fetch all users when the component mounts
//   // eslint-disable-next-line no-unused-vars
//   const [userInfoData, userInfoLoading, userInfoError, userInfoAPIHandler] =
//     useCrud({
//       type: REQUEST_METHOD.get,
//       id: ALL_USERS_LIST,
//       url: API_URL.getUsers,
//     });

//   useEffect(() => {
//     userInfoAPIHandler();
//   }, []);

//   const handleClickUsers = () => {
//     userInfoAPIHandler();
//   };

//   console.log(">>>>>>>>>>>>>>>>>>>>userInfoData", userInfoData);

//   return (
//     <Container>
//       <Button onClick={handleClickUsers}>get users</Button>
//       <div style={{ display: "flex" }}>
//         {/* Side Div */}
//         <div style={{ marginRight: "20px" }}>
//           <Typography variant="h5" gutterBottom></Typography>
//           {/* Add your side div content here */}
//         </div>
//         {/* Main Content */}
//         {/* <FectApiData/> */}
//         <div style={{ flex: "1" }}>
//           <Typography variant="h4">
//             Users 
//           </Typography>
//           <TableContainer>
//             <Table>
//               <TableBody>
//                 {userInfoData?.results?.map((user) => (
//                   <TableRow key={user.id}>
//                     <TableCell>{user.id}</TableCell>
//                     <TableCell>{user.name}</TableCell>
//                     <TableCell>{user.email}</TableCell>
//                     <TableCell>{user.contact}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//       </div>
//     </Container>
//   );
// }
// export default UserPage;
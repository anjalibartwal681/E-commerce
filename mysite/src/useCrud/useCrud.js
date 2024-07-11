import { useDispatch, useSelector } from "react-redux";

const op = {};
const useCrud = ({ id, url, type }) => {
  const response = useSelector((state) => state?.[type]?.get(id));
  const dispatch = useDispatch();
  op.create = ({ data }) => {
    // dispatch create saga
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>CRUD create data", data);
    dispatch({ type: "create_req", payload: { id, url, data } });
  };
  op.read = (data) => {
    dispatch({ type: "read_req", payload: { id, url, data } });
  };
  return [
    response?.get("data"),
    response?.get("loading"),
    response?.get("error"),
    op[type],
  ];
};

export default useCrud;

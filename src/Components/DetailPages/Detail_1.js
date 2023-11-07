import { useParams } from "react-router-dom";
import Generics from "../Pages/Generics";

const Detail_1 = () => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <Generics />
      <h1>This is Detail_1 Page</h1>
      <div>{params.Details}</div>
    </>
  );
};
export default Detail_1;

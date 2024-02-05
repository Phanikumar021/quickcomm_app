import { useRouteError } from "react-router";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div id="error">
      <h1>🐾🐾OOPS...!!</h1>
      <h2>something went wrong🐈</h2>
    </div>
  );
};
export default Error;

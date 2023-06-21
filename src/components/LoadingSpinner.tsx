import { Spinner } from "react-bootstrap";

const LoadingSpinner = () => {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "30px",
    width:'30px'
  };
  return (
    <div style={style}>
      <Spinner animation="border" variant="secondary" />
    </div>
  );
};

export default LoadingSpinner;

// import { Spinner } from "react-bootstrap";
import { Dna } from "react-loader-spinner";
import "./LoadingSpinner.css"

const LoadingSpinnerDNA = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
      className="appear-load"
    >
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default LoadingSpinnerDNA;

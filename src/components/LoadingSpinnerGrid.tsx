// import { Spinner } from "react-bootstrap";
import { Grid } from "react-loader-spinner";
import "./LoadingSpinner.css"


interface LoadingSpinnerGridProps{
  color:any;
}

const LoadingSpinnerGrid:React.FC<LoadingSpinnerGridProps> = ({color}) => {
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
      <Grid
        visible={true}
        height="80"
        width="80"
        color={color}
        ariaLabel="grid-loading"
        wrapperStyle={{}}
        wrapperClass=""
        radius="12.5"
      />
    </div>
  );
};

export default LoadingSpinnerGrid;

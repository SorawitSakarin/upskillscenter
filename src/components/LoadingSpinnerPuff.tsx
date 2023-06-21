import { Puff } from "react-loader-spinner";

interface LoadingSpinnerPuffProps{
  color:any;
}

const LoadingSpinnerPuff:React.FC<LoadingSpinnerPuffProps> = ({color}) => {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "30px",
    width: "30px",
  };
  return (
    <div style={style}>
      <Puff
        height="30"
        width="30"
        radius={2}
        color={color}
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default LoadingSpinnerPuff;

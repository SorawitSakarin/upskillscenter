import './loadingspinnerplus.css'

interface LoadingSpinnerPlusProps {
  top: number;
  left: number;
}

const LoadingSpinnerPlus: React.FC<LoadingSpinnerPlusProps> = ({top,left}) => {
  return (
    <div className="container" style={{position:'absolute', top:`${top}%`,left:`${left}%`}}>
      <div className="top">
        <div className="square">
          <div className="square">
            <div className="square">
              <div className="square">
                <div className="square">
                  <div className="square"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="square">
          <div className="square">
            <div className="square">
              <div className="square">
                <div className="square">
                  <div className="square"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="left">
        <div className="square">
          <div className="square">
            <div className="square">
              <div className="square">
                <div className="square">
                  <div className="square"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="square">
          <div className="square">
            <div className="square">
              <div className="square">
                <div className="square">
                  <div className="square"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinnerPlus;

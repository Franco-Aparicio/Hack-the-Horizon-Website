import './style.scss';

function PrizeHeading(props) {
  return (
    <div className="PrizeHeading">
      <h1>{props.type}</h1>
    </div>
  );
}

function FirstPrize(props) {
  return (
    <div className="Prizes">
      <i className={'shine ' + props.iconClass}></i>
      <h2>{props.type}</h2>
      <p>{props.content}</p>
    </div>
  );
}

export {FirstPrize, PrizeHeading};

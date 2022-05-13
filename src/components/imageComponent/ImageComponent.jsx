import './ImageComponent.css';

function ImageComponent(props) {
  return <img className="image" src={props.src} alt="" />;
}

export default ImageComponent;

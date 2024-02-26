

export default function CoreConcept(props) {
    return (
      <li>
        <img src={props.image} alt="image" />
        <h3 className="comcept-text">{props.title}</h3>
        <p className="comcept-text">{props.description}</p>
      </li>
    );
  }
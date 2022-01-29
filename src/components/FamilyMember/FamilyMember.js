import { useContext } from "react";
import SpanishContext from "../../Context/SpanishContext.js";

const FamilyMember = ({ id, name, color, age, favorite }) => {
  const { spanish } = useContext(SpanishContext);
  return (
    <div key={id}>
      <h2>{spanish ? "El amado:" : "The Loved One:"}</h2>
      <h3>{name}</h3>
      <h3>Favorite Color is: {color}</h3>
      <h3>Age is: {age}</h3>
      <h3>Favorite activity is: {favorite}</h3>
    </div>
  );
};

export default FamilyMember;

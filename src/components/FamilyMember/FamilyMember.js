import React from "react";

const FamilyMember = (props) => {
  const { id, name, color, age, favorite } = props;
  return (
    <div key={id}>
      <h2>This is a family member</h2>
      <h3>{name}</h3>
      <h3>Favorite Color is: {color}</h3>
      <h3>Age is: {age}</h3>
      <h3>Favorite activity is: {favorite}</h3>
    </div>
  );
};

export default FamilyMember;

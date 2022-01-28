import React from "react";
import FamilyMember from "../FamilyMember/FamilyMember.js";

const ListFamily = ({ family }) => {
  return (
    <div className='flex flex-col'>
      <h1>These are the people I love</h1>
      {family.map((member) => {
        return <FamilyMember {...member} />;
      })}
    </div>
  );
};

export default ListFamily;

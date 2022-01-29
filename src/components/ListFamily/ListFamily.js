import { useContext } from "react";
import SpanishContext from "../../Context/SpanishContext.js";
import FamilyMember from "../FamilyMember/FamilyMember.js";

const ListFamily = ({ family }) => {
  const { spanish } = useContext(SpanishContext);
  return (
    <div className='flex flex-col'>
      <h1>{!spanish ? "The People I Love" : "La gente que amo"}</h1>
      {family.map((member) => {
        return <FamilyMember {...member} />;
      })}
    </div>
  );
};

export default ListFamily;

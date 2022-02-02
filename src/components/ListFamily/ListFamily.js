import { useContext } from "react";
import SpanishContext from "../../Context/SpanishContext.js";
import FamilyMember from "../FamilyMember/FamilyMember.js";
import BigButton from "../BigButton/BigButton.js";

const ListFamily = ({ family }) => {
  const { spanish } = useContext(SpanishContext);
  return (
    <div className='flex-col max-w-2xl p-6 rounded-lg bg-amber-700 text-amber-100'>
      <h1 className='text-xl font-bold text-center'>
        {spanish ? "Gente que amo" : "People I Love"}
      </h1>
      <div className='flex flex-wrap'>
        {family.map((member) => {
          return <FamilyMember {...member} />;
        })}
      </div>
    </div>
  );
};

export default ListFamily;

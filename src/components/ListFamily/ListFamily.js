import { useContext } from "react";
import SpanishContext from "../../Context/SpanishContext.js";
import FamilyMember from "../FamilyMember/FamilyMember.js";

const ListFamily = ({ family }) => {
  const { spanish } = useContext(SpanishContext);
  return (
    <div className='rounded-lg flex-col max-w-2xl bg-amber-700 text-amber-100 p-6'>
      <h1 className='text-center text-xl font-bold'>
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

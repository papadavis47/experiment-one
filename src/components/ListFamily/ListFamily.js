import { useContext } from "react";
import SpanishContext from "../../Context/SpanishContext.js";
import FamilyMember from "../FamilyMember/FamilyMember.js";

const ListFamily = ({ family }) => {
  const { spanish } = useContext(SpanishContext);
  return (
    <section className='rounded-lg flex flex-col md:w-1/2 bg-amber-800 text-amber-100 p-6'>
      <h1 className='text-center text-xl font-bold'>
        {!spanish ? "The People I Love" : "La gente que amo"}
      </h1>
      <div>
        {family.map((member) => {
          return <FamilyMember {...member} />;
        })}
      </div>
    </section>
  );
};

export default ListFamily;

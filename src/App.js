import { useState } from "react";
import AddFamilyMember from "./components/AddFamilyMember/AddFamilyMember.js";
import BigButton from "./components/BigButton/BigButton.js";
import ListFamily from "./components/ListFamily/ListFamily.js";
import SpanishContext from "./Context/SpanishContext.js";

function App() {
  const [adding, setAdding] = useState(false);
  const [spanish, setSpanish] = useState(false);
  const [family, setFamily] = useState([]);
  const [familyMember, setFamilyMember] = useState({
    name: "",
    age: "",
    month: "",
    color: "",
    favorite: "",
  });

  const toggleAdding = () => {
    setAdding(!adding);
  };

  const toggleSpanish = () => {
    setSpanish(!spanish);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      familyMember.name &&
      familyMember.age &&
      familyMember.color &&
      familyMember.month &&
      familyMember.favorite
    ) {
      const newFamilyMember = { ...familyMember, id: new Date().getTime().toString() };
      setFamily([...family, newFamilyMember]);
      setFamilyMember({ name: "", age: "", month: "", color: "", favorite: "" });
      setAdding(false);
    }
  };

  const englishAddButtonText =
    family.length > 0 ? "Add Another Family Member to List" : "Add a Family Member";
  const spanishAddButtonText =
    family.length > 0
      ? "Agregar otro miembro de la familia a la lista"
      : "Añadir miembro de la familia";

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFamilyMember({ ...familyMember, [name]: value });
  };

  return (
    <SpanishContext.Provider value={{ spanish }}>
      <div className='bg-amber-200 min-h-screen flex flex-col items-center p-4'>
        <div onClick={toggleSpanish}>
          <BigButton text={spanish ? "Cambiar a Inglés" : "Change to Spanish"} />
        </div>
        <h1 className='text-3xl font-bold text-center py-5'>
          {spanish ? "Mi Familia" : "My Family"}
        </h1>
        {!adding && family.length > 0 && <ListFamily family={family} />}
        {adding ? (
          <AddFamilyMember
            familyMember={familyMember}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            toggleAdding={toggleAdding}
          />
        ) : (
          <div onClick={toggleAdding}>
            <BigButton
              text={spanish ? spanishAddButtonText : englishAddButtonText}
              onClick={toggleAdding}
            />
          </div>
        )}
      </div>
    </SpanishContext.Provider>
  );
}

export default App;

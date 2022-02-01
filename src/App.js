import { useState } from "react";
import AddFamilyMember from "./components/AddFamilyMember/AddFamilyMember.js";
import BigButton from "./components/BigButton/BigButton.js";
import Footer from "./components/Footer/Footer.js";
import HeaderNav from "./components/HeaderNav/HeaderNav.js";
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
    qualities: "",
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
      familyMember.favorite &&
      familyMember.qualities
    ) {
      const newFamilyMember = { ...familyMember, id: new Date().getTime().toString() };
      setFamily([...family, newFamilyMember]);
      setFamilyMember({ name: "", age: "", month: "", color: "", favorite: "", qualities: "" });
      setAdding(false);
    }
  };

  const englishAddButtonText =
    family.length > 0 ? "Add Another Love One to List" : "Create a List of Loved Ones";
  const spanishAddButtonText =
    family.length > 0 ? "Agregar otro ser querido a la lista" : "Crear una lista de seres queridos";

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFamilyMember({ ...familyMember, [name]: value });
  };

  return (
    <SpanishContext.Provider value={{ spanish, toggleSpanish }}>
      <div className='bg-amber-200 flex flex-col items-center min-h-screen'>
        <HeaderNav />
        <section className='flex flex-col items-center flex-grow px-3'>
          {!adding && family.length > 0 && <ListFamily family={family} />}
          {adding ? (
            <AddFamilyMember
              familyMember={familyMember}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              toggleAdding={toggleAdding}
            />
          ) : (
            <BigButton
              text={spanish ? spanishAddButtonText : englishAddButtonText}
              clickHandler={toggleAdding}
              textSize='text-2xl'
            />
          )}
        </section>
        <Footer />
      </div>
    </SpanishContext.Provider>
  );
}

export default App;

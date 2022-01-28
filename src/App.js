import { useState } from "react";
import AddFamilyMember from "./components/AddFamilyMember/AddFamilyMember.js";
import BigButton from "./components/BigButton/BigButton.js";
import ListFamily from "./components/ListFamily/ListFamily.js";

function App() {
  const [adding, setAdding] = useState(false);
  const [family, setFamily] = useState([]);
  const [familyMember, setFamilyMember] = useState({
    name: "",
    age: "",
    month: "",
    color: "",
    favorite: "",
  });

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

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFamilyMember({ ...familyMember, [name]: value });
  };

  return (
    <div className='bg-amber-200 min-h-screen flex flex-col items-center justify-center p-4'>
      <h1 className='text-3xl font-bold text-center py-5'>Mi Familia</h1>
      {!adding && family.length > 0 && <ListFamily family={family} />}
      {adding ? (
        <AddFamilyMember
          familyMember={familyMember}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          setAdding={setAdding}
        />
      ) : (
        <BigButton
          text={family.length > 0 ? "Add Another Family Member to List" : "Add a Family Member"}
          adding={adding}
          setAdding={setAdding}
        />
      )}
    </div>
  );
}

export default App;

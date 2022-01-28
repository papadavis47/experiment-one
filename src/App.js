import { useState } from "react";
import AddFamilyMember from "./components/AddFamilyMember/AddFamilyMember.js";
import BigButton from "./components/BigButton/BigButton.js";

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
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFamilyMember({ ...familyMember, [name]: value });
    console.log(name, value);
  };

  return (
    <div className='bg-amber-200 min-h-screen m-0 flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-bold text-center py-5'>Mi Familia</h1>
      {adding ? (
        <>
          <AddFamilyMember
            familyMember={familyMember}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
          <h2 className='text-2xl font-bold text-center py-5'>Making a List</h2>
        </>
      ) : (
        <BigButton text='Add a Family Member to List' adding={adding} setAdding={setAdding} />
      )}
    </div>
  );
}

export default App;

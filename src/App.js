import AddFamilyMember from "./components/AddFamilyMember/AddFamilyMember.js";

function App() {
  return (
    <div
      className='bg-amber-200 h-screen m-0 flex flex-col items-center
    '
    >
      <h1 className='text-3xl font-bold text-center py-5'>Mi Familia</h1>
      <AddFamilyMember />
    </div>
  );
}

export default App;

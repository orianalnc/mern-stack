import logo from './logo.svg';
import './assets/style.css';
import UserList from './components/UserList';

function App() {
  return (
    <div className=" bg-slate-700 h-screen w-auto text-zinc-50 ">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center uppercase"> Crud Mern Stack by Orianalnc </h1>
        <div className="mt-6">
          <UserList />
        </div>
      </div>
    </div>
  );
}

export default App;

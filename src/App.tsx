import { useQuery } from 'react-query';
import './App.css';
import axios from 'axios';
import Input from './components/Input/Input';
import SubmitButton from './components/SubmitButton/SubmiButton';


async function fetchData() {
  const {data}  = await axios.get('http://localhost:3001/data');
   return data.todos;
}

function App() {
  
  const {data} = useQuery({queryKey: ["data"], queryFn: fetchData}) 
  console.log(data)
  return (
    
      <div className="App w-full grid justify-items-center">
        <div className='w-3/4 flex h-auto flex-col my-14 rounded flex' >
          <header className='text-lg font-medium w-full rounded flex h-min justify-center' >
            <p className='w-11/12 text-start' >Todos ({data ? data.length : 0})</p>
          </header>
          <main className='flex w-full flex-col items-center' >
            <div className='w-11/12 grid grid-cols-1.5 mt-4 mb-3' >
              <Input/>
              <SubmitButton/>
            </div>
            
            
          </main>
        </div>
      </div>

  );
}

export default App;

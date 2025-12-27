import{useState, useEffect} from 'react'
import "./styles.css";

export default function App() {
  const[loading, setLoading] = useState(true);
  const[err, setErr] = useState(false);
  const[users, setUser] = useState([]);
  const fetchUsers = async () =>{
    try{
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    if(!data.ok){
      throw new Error("Failed to fetch users");
    }
    const json = await data.json();
    console.log("json", json);
    setUser(json)
    }catch(err){
      setError(err.message)
    }finally{
      setLoading(false)
    }
    

  }

  useEffect(()=>{
fetchUsers();
  },[])

  return (
    <div className="App">
      <ul>
        {users.map((m)=>{
          <li key={m.id}>
          <span>{m.name}</span>
          </li>
        }
        )}
        </ul>
    </div>
  );
}

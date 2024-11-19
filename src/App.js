import { Form } from "./components/From";
import { Todos } from "./components/Todos";
import {useDispatch, useSelector} from 'react-redux';
import {deleteAll} from './redux/todoapp/actions';



function App() {
  const dispatch = useDispatch();

  const todos = useSelector((state)=>state.operationsReducer);
console.log('todos',todos)
  return (
    <div className="wrapper">
      <br></br>
      <h1 className="text-center">TODO-LIST-APP IN-AMEN</h1>
      <Form/>
      <Todos/>
      {todos.length > 1&&(
        <button className='btn btn-danger btn-md delete-all'
        onClick={()=>dispatch(deleteAll())}>DELETE ALL</button>
      )}
    </div>
  );
}

export default App;

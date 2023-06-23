import './App.css';
import TodoWrapper from './components/TodoWrapper';
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="App">
       <ToastContainer />
      <TodoWrapper />
    </div>
  );
}
export default App;

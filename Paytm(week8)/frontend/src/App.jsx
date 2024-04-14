import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard, Send, Signin, Signup } from './pages';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signup' element={<Signin />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/send' element={<Send />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

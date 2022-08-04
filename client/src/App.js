import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import PostsList from './components/PostsList';
import PostDetails from './components/PostDetails';
import Header from './components/Header';
import Home from './components/Home';

function App() {
 
  return (
    <>
      <ToastContainer autoClose={3000} />
      <Router>
        <Header />
        <Routes>
             <Route path="/" element={<Home/>} />    
             <Route path="/posts" element={<PostsList/>} /> 
             <Route path="/posts/:id" element={<PostDetails/>} /> 
             <Route path="/" element={<Navigate replace to="/home" />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
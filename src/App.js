import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import theme from './theme'
import Home from './pages/Home';
import Meditation from './pages/Meditation';
import Groups from './pages/Groups';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import GuidedMed from './pages/GuidedMed';
import RespGraph from './pages/RespGraph';
import SustAttention from './pages/SustAttention';
import SignupDone from './pages/SignupDone';
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meditation" element={<Meditation />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signup/success" element={<SignupDone />} />
            <Route 
              path="/meditation/gm" 
              element={
                <PrivateRoute>
                  <GuidedMed />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/meditation/rg" 
              element={
                <PrivateRoute>
                  <RespGraph />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/meditation/sa" 
              element={
                <PrivateRoute>
                  <SustAttention />
                </PrivateRoute>
              } 
            />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;

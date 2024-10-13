import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { OktoProvider, BuildType } from 'okto-sdk-react';
import Home2 from './home'
import Form from './form'
import CreateBlink from './pages/CreateBlink'
import { Home } from './pages/Home';
import { Toaster } from "react-hot-toast";
import { Account } from './pages/Account';
import Demo from './demo';

const OKTO_CLIENT_API_KEY = import.meta.env.VITE_OKTO_CLIENT_API_KEY;
export const API_URL = 'https://sublinks.onrender.com';

function App() {
  return (
    <Router>
      <div><Toaster/></div>
      <OktoProvider apiKey={OKTO_CLIENT_API_KEY} buildType={BuildType.SANDBOX}>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Form />} />
        <Route path="/form" element={<CreateBlink />} />
        <Route path="/account" element={<Account />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
      </OktoProvider>
    </Router>
  )
}

export default App;
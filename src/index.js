import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { Home } from './pages/Home/Home';
import { Reminder } from './pages/Reminder/Reminder';
import { User } from './pages/User/User';
import { AddTask } from './pages/AddTask/AddTask';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import "./index.scss"
import { UserContextProvider } from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <React.StrictMode>
        <UserContextProvider>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<Home />}></Route>
                    <Route path='reminder' element={<Reminder />}></Route>
                    <Route path='user' element={<User />}></Route>
                </Route>
                <Route path='/add-task' element={<AddTask />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/register' element={<Register />}></Route>
            </Routes>
            </BrowserRouter>
        </UserContextProvider>
    </React.StrictMode>
);
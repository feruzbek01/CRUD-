import React from 'react'
import { Routes, Route} from "react-router-dom";
import { AddUser } from './components/AddUser'
import { EditUser } from './components/EditUser'
import { Home } from './components/Home'


export const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddUser />} />
      <Route path="/edit/:id" element={<EditUser />} />
    </Routes>
  );
}

import React, { useState, useEffect } from 'react';
import supabase from '../utils/supabase';
import { InputTodoForm } from '../components/InputToDoForm';
import { TodoList } from '../components/ToDoList';

const Home : React.FC = () => {
  return (
    <>
      <InputTodoForm />
      <TodoList />
    </>
  )
}

export default Home;
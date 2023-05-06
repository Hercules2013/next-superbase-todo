"use client";

import React, { useState } from 'react';
import { useAddTodo } from '../Hooks/useAddTodo';
import supabase from '../utils/supabase';

export const InputTodoForm : React.FC = () => {
    const [title, setTitle] = useState("");
    const { fetchTodos } = useAddTodo();

    const pushTodo = async (e:any) => {
        e.preventDefault();
        await supabase.from('todos').insert({ title });
        fetchTodos();
        setTitle('');
    }

    return (
        <form onSubmit={pushTodo}>
            <input value={title} onChange={(event) => setTitle(event.target.value)} />
            <button>追加</button>
        </form>
    )
}
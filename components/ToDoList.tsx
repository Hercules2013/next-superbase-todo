"use client";
import React, { useState, useEffect } from 'react';
import { useAddTodo } from '../Hooks/useAddTodo';

export const TodoList : React.FC = () => {
    const {todos, fetchTodos} = useAddTodo()

    return (
        <>
            <div>todoリスト</div>
            {todos?.map((todo) => (
                <li key={todo.id}>{todo.titile}</li>
            ))}
        </>
    )
}
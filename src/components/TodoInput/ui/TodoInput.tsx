import { useAppDispatch } from '@/hooks/hooks';
import { addTodo } from '@/store/todoSlice';
import { Button, Input } from 'antd';
import React, { useState } from 'react';

export const TodoInput: React.FC = () => {
	const [input, setInput] = useState('');
	const dispatch = useAppDispatch();

	const handleAddTodo = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		if (input.trim()) {
			dispatch(addTodo(input.trim()));
			setInput('');
		}
	};

	return (
		<form onSubmit={handleAddTodo}>
			<Input
				placeholder="Добавить задачу..."
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<Button onClick={handleAddTodo} style={{ marginTop: '8px', marginBottom: '8px' }}>
				Добавить
			</Button>
		</form>
	);
};

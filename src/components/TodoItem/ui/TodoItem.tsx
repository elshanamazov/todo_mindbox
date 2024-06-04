import { useAppDispatch } from '@/hooks/hooks';
import { Todo, removeTodo, toggleTodo } from '@/store/todoSlice';
import { Button, Checkbox } from 'antd';
import React from 'react';

interface TodoItemProps {
	todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
	const dispatch = useAppDispatch();

	const handleToggle = () => {
		dispatch(toggleTodo(todo.id));
	};

	const handleRemove = () => {
		dispatch(removeTodo(todo.id));
	};

	return (
		<div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
			<Checkbox checked={todo.completed} onChange={handleToggle} style={{ marginRight: '8px' }} />
			<p style={{ flex: 1, textDecoration: todo.completed ? 'line-through' : 'none' }}>
				{todo.text}
			</p>
			<Button type="primary" danger onClick={handleRemove}>
				Удалить
			</Button>
		</div>
	);
};

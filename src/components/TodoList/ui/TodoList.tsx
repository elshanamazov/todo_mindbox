import { TodoItem } from '@/components/TodoItem';
import { useAppSelector } from '@/hooks/hooks';
import { Button } from 'antd';
import React, { useState } from 'react';

export const TodoList: React.FC = () => {
	const todos = useAppSelector((state) => state.todos.todos);
	const [filter, setFilter] = useState<'all' | 'completed' | 'active'>('all');

	const filteredTodos = todos.filter((todo) => {
		if (filter === 'completed') {
			return todo.completed;
		} else if (filter === 'active') {
			return !todo.completed;
		}
		return true;
	});

	return (
		<div>
			<div
				style={{
					marginBottom: '20px',
					display: 'flex',
					gap: '5px',
					justifyContent: 'center',
					flexWrap: 'wrap',
				}}>
				<Button type={filter === 'all' ? 'primary' : 'default'} onClick={() => setFilter('all')}>
					Все задачи
				</Button>
				<Button
					type={filter === 'active' ? 'primary' : 'default'}
					onClick={() => setFilter('active')}
					style={{ margin: '0 8px' }}>
					Невыполненные
				</Button>
				<Button
					type={filter === 'completed' ? 'primary' : 'default'}
					onClick={() => setFilter('completed')}>
					Выполненные
				</Button>
			</div>
			{filteredTodos.map((todo) => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</div>
	);
};

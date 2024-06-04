import store from '@/store/store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, test } from 'vitest';
import { TodoList } from './TodoList';

describe('TodoList', () => {
	test('renders without crashing', () => {
		render(
			<Provider store={store}>
				<TodoList />
			</Provider>,
		);

		expect(screen.getByText('Все задачи')).toBeInTheDocument();
	});
});

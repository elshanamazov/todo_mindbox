import { render, screen } from '@testing-library/react';

import store from '@/store/store';
import { Provider } from 'react-redux';
import { describe, expect, test } from 'vitest';
import { TodoItem } from './TodoItem';

const mockTodo = {
	id: 1,
	text: 'Test Todo',
	completed: false,
};

describe('TodoItem', () => {
	test('renders todo text', () => {
		render(
			<Provider store={store}>
				<TodoItem todo={mockTodo} />
			</Provider>,
		);

		expect(screen.getByText('Test Todo')).toBeInTheDocument();
	});
});

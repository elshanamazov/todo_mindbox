import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import store from '@/store/store';
import { Provider } from 'react-redux';
import { TodoInput } from './TodoInput';

describe('TodoInput', () => {
	test('allows users to add todos', () => {
		render(
			<Provider store={store}>
				<TodoInput />
			</Provider>,
		);

		const inputElement = screen.getByPlaceholderText('Добавить задачу...');
		const buttonElement = screen.getByRole('button', { name: 'Добавить' });

		fireEvent.change(inputElement, { target: { value: 'New Todo' } });
		fireEvent.click(buttonElement);

		expect(inputElement).toHaveValue('');
	});
});

import { Provider } from 'react-redux';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import store from './store/store';

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<div style={{ padding: '20px' }}>
				<h1>Менеджер задач</h1>
				<TodoInput />
				<TodoList />
			</div>
		</Provider>
	);
};

export default App;

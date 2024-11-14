import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ChatPage from './pages/ChatPage.js'
import RegisterPage from './pages/RegisterPage.js'

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/chat' element={<ChatPage />} />
				<Route path='/auth' element={<RegisterPage />} />
			</Routes>
		</Router>
	)
}

export default App

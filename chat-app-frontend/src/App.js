import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ChatPage from './pages/ChatPage.js'
import RegisterPage from './pages/RegisterPage.js'
import HomePage from './pages/HomePage.js' 
import Navbar from './components/Navbar' 
import './styles/chat.css'

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/chat' element={<ChatPage />} />
				<Route path='/register' element={<RegisterPage />} />
			</Routes>
		</Router>
	)
}

export default App

import React from 'react'
import Header from './components/Header'
// function App() {
// 	return (
// 		<div className='App'>
// 			<Header />
// 			<h1>Hello From react</h1>
// 		</div>
// 	)
// }

class App extends React.Component {
	render() {
		// return <h1>Hello from a class</h1>
		return <Header />
	}
}

export default App
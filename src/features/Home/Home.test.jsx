/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import React from 'react'
import Home from './Home'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import store from '../../store/store'
import { BrowserRouter } from 'react-router-dom'
const setup = () => {
	render(
		<Provider store={store}>
			<BrowserRouter>
				<Home />
			</BrowserRouter>
		</Provider>
	)
}
describe('Renderiza componente Home', () => {
	let renderCmponent
	beforeEach(() => {
		renderCmponent = setup()
	})

	it('Se renderiza componente', () => {
		expect(renderCmponent).toBeTruthy
	})
	// console.log("renderCmponent", screen.debug(renderCmponent));
	it('Se encuentra el btn Ver Detalles', async () => {
		expect(await screen.getAllByTestId('isATest')).toBeInTheDocument()
	})

	// it("Se navega a detalles del pokemon", () => {
	//   expect(renderCmponent).toBeTruthy;
	// });
})

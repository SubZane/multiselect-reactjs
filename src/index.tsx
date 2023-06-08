import React from 'react'
import { createRoot } from 'react-dom/client'

import MultiSelectComponent from './App'
import { multiSelectTheme, ThemeProvider } from './theme'

const container = document.getElementById('root')
const root = createRoot(container!)

function MultiSelectContainer() {
	return (
		<React.Fragment>
			<ThemeProvider theme={multiSelectTheme}>
				<MultiSelectComponent />
			</ThemeProvider>
		</React.Fragment>
	)
}

root.render(<MultiSelectContainer />)

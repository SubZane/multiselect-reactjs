import React from 'react'
import { createRoot } from 'react-dom/client'

import MultiSelectComponent from './App'

const container = document.getElementById('root')
const root = createRoot(container!)

const listData = [
	{
		value: 'demo',
		text: 'Voluptate sit Lorem consequat dolore ',
	},
	{
		value: 'demo',
		text: 'Dolore pariatur duis do culpa commodo',
	},
	{
		value: 'demo',
		text: 'Duis do culpa commodo',
	},
	{
		value: 'demo',
		text: 'Aute cillum fugiat quis dolor',
	},
	{
		value: 'demo',
		text: 'Amet incididunt adipisicing consectetur',
	},
	{
		value: 'demo',
		text: 'Magna velit ad sunt incididunt',
	},
	{
		value: 'demo',
		text: 'Aliqua id duis elit ex voluptate est',
	},
	{
		value: 'demo',
		text: 'Voluptate sit Lorem consequat dolore ',
	},
	{
		value: 'demo',
		text: 'Dolore pariatur duis do culpa commodo',
	},
	{
		value: 'demo',
		text: 'Duis do culpa commodo',
	},
	{
		value: 'demo',
		text: 'Aute cillum fugiat quis dolor',
	},
	{
		value: 'demo',
		text: 'Amet incididunt adipisicing consectetur',
	},
	{
		value: 'demo',
		text: 'Magna velit ad sunt incididunt',
	},
	{
		value: 'demo',
		text: 'Aliqua id duis elit ex voluptate est',
	},
]

function MultiSelectContainer() {
	return (
		<React.Fragment>
			<MultiSelectComponent width="350px" maxHeight="50vh" listData={listData} />
		</React.Fragment>
	)
}

root.render(<MultiSelectContainer />)

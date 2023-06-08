import React from 'react'
import { createRoot } from 'react-dom/client'

import MultiSelectComponent from './App'

const container = document.getElementById('root')
const root = createRoot(container!)

const listData = [
	{
		value: 'demo1',
		text: 'Voluptate sit Lorem consequat dolore ',
	},
	{
		value: 'demo2',
		text: 'Dolore pariatur duis do culpa commodo',
	},
	{
		value: 'demo3',
		text: 'Duis do culpa commodo',
	},
	{
		value: 'demo4',
		text: 'Aute cillum fugiat quis dolor',
	},
	{
		value: 'demo5',
		text: 'Amet incididunt adipisicing consectetur',
	},
	{
		value: 'demo6',
		text: 'Magna velit ad sunt incididunt',
	},
	{
		value: 'demo7',
		text: 'Aliqua id duis elit ex voluptate est',
	},
	{
		value: 'demo8',
		text: 'Voluptate sit Lorem consequat dolore ',
	},
	{
		value: 'demo9',
		text: 'Dolore pariatur duis do culpa commodo',
	},
	{
		value: 'demo10',
		text: 'Duis do culpa commodo',
	},
	{
		value: 'demo11',
		text: 'Aute cillum fugiat quis dolor',
	},
	{
		value: 'demo12',
		text: 'Amet incididunt adipisicing consectetur',
	},
	{
		value: 'demo13',
		text: 'Magna velit ad sunt incididunt',
	},
	{
		value: 'demo14',
		text: 'Aliqua id duis elit ex voluptate est',
	},
]

function MultiSelectContainer() {
	return (
		<React.Fragment>
			<MultiSelectComponent
				checkAll={true}
				selected={['demo1', 'demo7']}
				width="350px"
				maxHeight="50vh"
				listData={listData}
			/>
		</React.Fragment>
	)
}

root.render(<MultiSelectContainer />)

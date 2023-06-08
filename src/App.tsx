import React, { useMemo, useState } from 'react'

import { css, styled } from './theme'
import { useOutsideClick } from './useOutsideClick'

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

type ElementTypes = {}

type ListTypes = {
	expanded: boolean
}

const Wrapper = styled.div<ElementTypes>`
	display: flex;
`

const MultiSelect = styled.div<ElementTypes>`
	position: relative;
	cursor: pointer;
`

const Button = styled.button<ElementTypes>`
	appearance: none;
	background: #ec7574;
	color: #fff;
	border: 0;
	padding: 13px 44px 13px 24px;
	border-radius: 25px;
	text-align: left;
	position: relative;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	cursor: pointer;
	outline: none;
	&:after {
		content: '';
		border-width: 6px;
		border-radius: 3px;
		border-style: solid;
		border-color: transparent;
		border-top-color: inherit;
		position: absolute;
		right: 20px;
		top: calc(50% + 3px);
		transform: translateY(-50%);
	}
`

const ListWrapper = styled.div<ListTypes>`
	position: absolute;
	z-index: 10;
	border-radius: 24px;
	visibility: hidden;
	background: #fff;
	overflow: hidden;
	box-shadow: 0 1px 4px rgba(150, 150, 150, 0.65);
	${(props) =>
		props.expanded === true &&
		css`
			visibility: visible;
		`}
`

const List = styled.ul<ElementTypes>`
	max-height: 50vh;
	list-style: none;
	padding: 0;
	margin: 0;
	border-radius: 24px;
	overflow-y: scroll;
	overflow-x: hidden;
`

const ListItem = styled.li<ElementTypes>`
	display: block;
	padding-left: 13px;
	max-width: 300px;
	width: 300px;
	&:hover,
	&:focus {
		outline: none;
		background: #f2f2f2;
	}
`

const Checkbox = styled.input<ElementTypes>`
	cursor: pointer;
`
const Text = styled.span<ElementTypes>`
	cursor: pointer;
	padding-left: 10px;
`

const Label = styled.label<ElementTypes>`
	padding-left: 15px;
	cursor: pointer;
	user-select: none;
	padding: 13px 24px;
	padding-left: 10px;
	width: 100%;
`

const Filter = styled.input<ElementTypes>`
	padding: 5px 13px;
	margin: 0;
	border: none;
	width: 100%;
	background: transparent;
	&:focus {
		outline: none;
	}
`

const Filterbox = styled.div<ElementTypes>`
	border: 1px solid black;
	border-radius: 15px;
	margin: 20px 24px 15px 24px;
`

function MultiSelectComponent() {
	const [toggleList, setToggleList] = useState<boolean>(true)
	const [search, setSearch] = useState('')

	const ref = useOutsideClick(() => {
		setToggleList(false)
	})

	const filteredList = useMemo(() => {
		if (search) {
			return listData.filter((item) => item.text.toLowerCase().indexOf(search.toLocaleLowerCase()) > -1)
		}
		return listData
	}, [search])

	function ToggleList() {
		setToggleList(!toggleList)
	}

	return (
		<Wrapper ref={ref}>
			<MultiSelect>
				<Button type="button" onClick={ToggleList} aria-haspopup="true">
					Select from Options
				</Button>
				<ListWrapper expanded={toggleList}>
					<Filterbox>
						<Filter type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)}></Filter>
					</Filterbox>

					<List role="listbox" aria-expanded="false">
						{filteredList.length > 0 ? (
							filteredList &&
							filteredList.map((item, index) => (
								<ListItem key={index} role="option">
									<Label>
										<Checkbox type="checkbox" name="Color" value={item.value} />
										<Text>{item.text}</Text>
									</Label>
								</ListItem>
							))
						) : (
							<></>
						)}
					</List>
				</ListWrapper>
			</MultiSelect>
		</Wrapper>
	)
}

export default MultiSelectComponent

import React, { useMemo, useState } from 'react'

import { css, styled } from './helpers/theme'
import { DataType, ElementTypes, ListItemTypes, ListTypes, ListWrapperTypes } from './helpers/types'
import { useOutsideClick } from './helpers/useOutsideClick'

const Wrapper = styled.div<ElementTypes>`
	display: flex;
	width: 100%;
`

const MultiSelect = styled.div<ElementTypes>`
	position: relative;
	cursor: pointer;
	width: 100%;
`

const Button = styled.button<ElementTypes>`
	width: 100%;
	text-align: left;
	appearance: none;
	background: #ec7574;
	color: #fff;
	border: 0;
	padding: 13px 44px 13px 24px;
	border-radius: 25px;
	position: relative;
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

const ListWrapper = styled.div<ListWrapperTypes>`
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

const List = styled.ul<ListTypes>`
	max-height: ${(props) => props.maxHeight || '50vh'};
	list-style: none;
	padding: 0;
	margin: 0;
	width: ${(props) => props.width || 'auto'};
	border-radius: 24px;
	overflow-y: scroll;
	overflow-x: hidden;
`

const ListItem = styled.li<ListItemTypes>`
	display: block;
	width: ${(props) => props.width || 'auto'};
	padding-left: 13px;
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

interface Interface {
	width: string
	maxHeight: string
	listData: DataType[]
	open?: boolean
}

function MultiSelectComponent(props: Interface) {
	const [toggleList, setToggleList] = useState<boolean>(props.open ? props.open : false)
	const [search, setSearch] = useState('')

	const ref = useOutsideClick(() => {
		setToggleList(false)
	})

	const filteredList = useMemo(() => {
		if (search) {
			return props.listData.filter((item) => item.text.toLowerCase().indexOf(search.toLocaleLowerCase()) > -1)
		}
		return props.listData
	}, [props.listData, search])

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

					<List maxHeight={props.maxHeight} width={props.width} role="listbox" aria-expanded={toggleList}>
						{filteredList.length > 0 ? (
							filteredList &&
							filteredList.map((item, index) => (
								<ListItem width={props.width} key={index} role="option">
									<Label>
										<Checkbox type="checkbox" name={item.value} value={item.value} />
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

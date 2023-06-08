import React, { useState } from 'react'

import { css, styled } from './helpers/theme'
import { CheckboxType, ElementTypes, ListItemTypes, ListTypes, ListWrapperTypes, SelectedType } from './helpers/types'
import { useEffectOnce } from './helpers/usehooks-ts'
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
	listData: CheckboxType[]
	open?: boolean
	checkAll?: boolean
	selected: SelectedType
}

function MultiSelectComponent(props: Interface) {
	const [toggleList, setToggleList] = useState<boolean>(props.open ? props.open : false)
	const [isCheckAll, setIsCheckAll] = useState<boolean>(false)
	const [checkboxes, SetCheckboxes] = useState<CheckboxType[]>(props.listData)

	useEffectOnce(() => {
		const CheckboxList = checkboxes.map((v) => ({
			...v,
			isChecked: props.selected.includes(v.value) ? true : false,
			visible: true,
		}))
		SetCheckboxes(CheckboxList)
	})

	const ref = useOutsideClick(() => {
		setToggleList(false)
	})

	function ToggleAllCheckboxes() {
		const new_checkboxes = checkboxes.map((item) => {
			if (!item.visible) {
				return {
					...item,
					isChecked: false,
				}
			} else {
				return {
					...item,
					isChecked: !isCheckAll,
				}
			}
		})
		SetCheckboxes(new_checkboxes)
		setIsCheckAll(!isCheckAll)
	}

	function FilterCheckboxes(value: string) {
		const new_checkboxes = checkboxes.map((item) => {
			if (item.text.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
				return {
					...item,
					visible: true,
				}
			} else {
				return {
					...item,
					visible: false,
					isChecked: false,
				}
			}
		})
		SetCheckboxes(new_checkboxes)
	}

	function handleCheck(itemValue: string) {
		const new_checkboxes = checkboxes.map((item) => {
			if (item.value === itemValue) {
				return {
					...item,
					isChecked: !item.isChecked,
				}
			}
			return item
		})
		SetCheckboxes(new_checkboxes)
	}

	return (
		<Wrapper ref={ref}>
			<MultiSelect>
				<Button type="button" onClick={() => setToggleList(!toggleList)} aria-haspopup="true">
					Select from Options
				</Button>
				<ListWrapper expanded={toggleList}>
					<Filterbox>
						<Filter type="text" name="filter" onChange={(e) => FilterCheckboxes(e.target.value)}></Filter>
					</Filterbox>

					<List maxHeight={props.maxHeight} width={props.width} role="listbox" aria-expanded={toggleList}>
						{props.checkAll && (
							<ListItem width={props.width} role="option">
								<Label>
									<Checkbox onClick={ToggleAllCheckboxes} type="checkbox" />
									<Text>{isCheckAll ? <b>Unheck All</b> : <b>Check All</b>}</Text>
								</Label>
							</ListItem>
						)}

						{checkboxes && checkboxes.length > 0 ? (
							checkboxes &&
							checkboxes.map(
								(item, index) =>
									item.visible && (
										<ListItem width={props.width} key={item.value} role="option">
											<Label>
												<Checkbox
													type="checkbox"
													checked={item.isChecked}
													onChange={() => handleCheck(item.value)}
													name={item.value}
													value={item.value}
												/>
												<Text>{item.text}</Text>
											</Label>
										</ListItem>
									)
							)
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

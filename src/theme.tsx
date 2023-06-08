import * as styledComponents from 'styled-components'

const {
	default: styled,
	css,
	createGlobalStyle,
	keyframes,
	ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<IThemeInterface>

export interface IThemeInterface {
	multiSelect: {
		backgroundColor: string
		textColor: string
		linkColor: string
		borderRadius: string
		transitionDuration: string
		innerPadding: string
		borderBottom: string
		hover: {
			backgroundColor: string
			textColor: string
		}
	}
}

export const multiSelectTheme = {
	multiSelect: {
		backgroundColor: '#E3DFDA',
		textColor: '#3D3B39',
		linkColor: '#3D3B39',
		borderRadius: '7px',
		transitionDuration: '0.5s',
		innerPadding: '0px',
		borderBottom: '1px solid rgba(0, 0, 0, 0.15)',
		hover: {
			backgroundColor: 'rgba(0, 0, 0, 0.1) !important',
			textColor: '#3D3B39',
		},
	},
}

export default styled
export { styled, css, createGlobalStyle, keyframes, ThemeProvider }

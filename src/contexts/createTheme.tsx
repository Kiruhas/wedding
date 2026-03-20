import { createTheme } from '@mui/material/styles'

const theme = createTheme({
	typography: {
		fontFamily: 'Inter, sans-serif', // общий шрифт
		h4: {
			fontFamily: 'Montserrat, sans-serif',
			fontWeight: 700,
			fontSize: '2rem'
		}
	}
})

export default theme

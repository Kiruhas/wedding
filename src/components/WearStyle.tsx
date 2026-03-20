import { Box, Typography } from '@mui/material'

const WearStyle = () => {
	return (
		<Box
			component='section'
			sx={{
				width: '100%',
				position: 'relative',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				backgroundImage: "url('/wedding/background-2.png')",
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				py: 8
			}}
		>
			<Typography
				variant='h3'
				sx={{
					fontFamily: 'SweetMavka, sans-serif',
					fontSize: {
						xs: '2rem',
						md: '3rem'
					},
					px: 6
				}}
			>
				Дресс-код
			</Typography>
			<Typography
				variant='body1'
				sx={{
					fontFamily: 'SweetMavka, sans-serif',
					textAlign: 'center',
					fontSize: {
						xs: '1.5rem',
						md: '1.8rem'
					},
					pt: 3,
					px: 4
				}}
			>
				ОТСУТСТВУЕТ
			</Typography>
			<Typography
				variant='body1'
				sx={{
					fontFamily: 'SweetMavka, sans-serif',
					textAlign: 'center',
					fontSize: {
						xs: '1.5rem',
						md: '1.8rem'
					},
					pt: 3,
					px: 4
				}}
			>
				Одевайтесь по погоде, чтобы было тепло и комфортно находиться на улице
			</Typography>
		</Box>
	)
}

export default WearStyle

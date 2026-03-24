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
			<Box
				sx={{
					position: 'absolute',
					width: '100%',
					height: '100%',
					backgroundImage: `
          url('/wedding/dresscode_1.png')
        `,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: `
          10% 5%
        `,
					backgroundSize: '80px 80px',
					opacity: 0.7,
					zIndex: 0
				}}
			/>
			<Box
				sx={{
					position: 'absolute',
					width: '100%',
					height: '100%',
					backgroundImage: `
          url('/wedding/dresscode_2.png')
        `,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: `
          115% 0%
        `,
					backgroundSize: '200px 110px',
					opacity: 0.8,
					zIndex: 0
				}}
			/>
			<Typography
				variant='h3'
				sx={{
					fontFamily: 'Cormorant Infant, serif',
					fontSize: {
						xs: '2rem',
						md: '3rem'
					},
					px: 6,
					zIndex: 1
				}}
			>
				Дресс-код
			</Typography>
			<Typography
				variant='body1'
				sx={{
					fontFamily: 'Cormorant Infant, serif',
					textAlign: 'center',
					fontSize: {
						xs: '1.5rem',
						md: '1.8rem'
					},
					pt: 3,
					px: 4,
					zIndex: 1
				}}
			>
				ОТСУТСТВУЕТ
			</Typography>
			<Typography
				variant='body1'
				sx={{
					fontFamily: 'Cormorant Infant, serif',
					textAlign: 'center',
					fontSize: {
						xs: '1.5rem',
						md: '1.8rem'
					},
					pt: 3,
					px: 4,
					zIndex: 1
				}}
			>
				Одевайтесь по погоде, чтобы было тепло и комфортно находиться на улице
			</Typography>
		</Box>
	)
}

export default WearStyle

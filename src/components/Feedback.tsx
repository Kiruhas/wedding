import { Box, Typography } from '@mui/material'

const Feedback = () => {
	return (
		<Box
			component='section'
			sx={{
				width: '100%',
				position: 'relative',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				backgroundImage: "url('/wedding/background-3.png')",
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				py: 4
			}}
		>
			<Box
				sx={{
					position: 'absolute',
					width: '100%',
					height: '100%',
					backgroundImage: `
          url('/wedding/camera.webp')
        `,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: `
          0% 40%
        `,
					backgroundSize: '90px 60px',
					opacity: 0.7,
					zIndex: 0
				}}
			/>
			<Typography
				variant='body1'
				sx={{
					fontFamily: 'Cormorant Infant, serif',
					textAlign: 'center',
					fontSize: {
						xs: '1.5rem',
						md: '1.8rem'
					},
					px: 4
				}}
			>
				На мероприятии не будет присутствовать фотограф и видеограф, поэтому любая инициатива с Вашей стороны только
				приветствуется!
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
					px: 4
				}}
			>
				Если у вас есть вопросы или предложения, то ждём обратной связи :)
			</Typography>
		</Box>
	)
}

export default Feedback

import { Box, Typography } from '@mui/material'

const Presents = () => {
	return (
		<Box
			component='section'
			sx={{
				width: '100%',
				position: 'relative',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				py: 4,
				backgroundImage: `
      linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)),
      url('/wedding/5000.png')
    `,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: '100% 100%'
			}}
		>
			<Box
				sx={{
					position: 'absolute',
					width: '100%',
					height: '100%',
					backgroundImage: `
          url('/wedding/present_flower.png')
        `,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: `
          10% 0%
        `,
					backgroundSize: '60px 60px',
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
          url('/wedding/present_no-alcohol.png')
        `,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: `
          90% 41%
        `,
					backgroundSize: '60px 60px',
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
          url('/wedding/present_smile.png')
        `,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: `
          5% 78%
        `,
					backgroundSize: '60px 60px',
					opacity: 0.7,
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
				Подарки
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
				Ваше присутствие в день нашей свадьбы - самый значимый подарок для нас! Нам не нужны пышные букеты, 1-3 цветка,
				с которыми ассоциируется наш союз – самый замечательный вариант.
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
				Также наша семья минимизировала количество алкоголя в жизни, поэтому мы будем рады любой другой альтернативе,
				которая необременительна для Вас и вашей семьи.
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
				Самое важное, что вам необходимо принести с собой - ваши улыбки и искренние эмоции.
			</Typography>
		</Box>
	)
}

export default Presents

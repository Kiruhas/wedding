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
				backgroundImage: "url('/wedding/background-3.png')",
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
				Подарки
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
				Ваше присутствие в день нашей свадьбы - самый значимый подарок для нас! Нам не нужны пышные букеты, 1-3 цветка,
				с которыми ассоциируется наш союз – самый замечательный вариант.
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
				Так же наша семья минимизировала количество алкоголя в жизни, поэтому мы будем рады любой другой альтернативе,
				которая необременительна для Вас и вашей семьи.
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
				Самое важное, что вам необходимо принести с собой - ваши улыбки и искренние эмоции.
			</Typography>
		</Box>
	)
}

export default Presents

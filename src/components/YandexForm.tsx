import { Box, Button, Typography } from '@mui/material'

const YandexForm = () => {
	return (
		<Box
			component='section'
			sx={{
				width: '100%',
				position: 'relative',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				backgroundImage: "url('/wedding/background-1.png')",
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				py: 4
			}}
		>
			<Box
				component='img'
				src={'/wedding/important.png'}
				alt='Важно'
				sx={{
					width: 50,
					height: 50,
					objectFit: 'contain',
					mb: 1
				}}
			/>
			<Typography
				variant='h6'
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
				Для точного определения количества гостей и предпочтений каждого - пройдите, пожалуйста, опрос
			</Typography>
			<Button
				variant='contained'
				href='https://forms.yandex.ru/u/69bcdf94eb6146541f4db1d2'
				sx={{
					my: 4
				}}
				target='_blank'
			>
				Пройти опрос
			</Button>
			<Box
				component='img'
				src={'/wedding/we.jpg'}
				alt='Оля и Кирилл'
				sx={{
					width: '90%',
					maxWidth: '500px',
					height: 'auto',
					borderRadius: '25%',
					mt: 2,
					boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
				}}
			/>
			<Typography
				variant='h6'
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
				Ваши Оля и Кирилл
			</Typography>
		</Box>
	)
}

export default YandexForm

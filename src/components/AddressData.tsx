import { Box, Typography } from '@mui/material'

const AddressData = () => {
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
				mt: 4,
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
				Дорогой Гость!
			</Typography>
			<Typography
				variant='h6'
				sx={{
					fontFamily: 'SweetMavka, sans-serif',
					textAlign: 'center',
					fontSize: {
						xs: '1.5rem',
						md: '2rem'
					},
					pt: 3,
					px: 4
				}}
			>
				Приглашаем Вас разделить вместе с нами радость создания нашей семьи.
			</Typography>
			<Typography
				variant='h4'
				sx={{
					fontFamily: 'SweetMavka, sans-serif',
					textAlign: 'center',
					fontSize: {
						xs: '2rem',
						md: '2.5rem'
					},
					pt: 8,
					px: 4
				}}
			>
				24.04.2026, 15:00
			</Typography>
			<Typography
				variant='h6'
				sx={{
					fontFamily: 'SweetMavka, sans-serif',
					textAlign: 'center',
					fontSize: {
						xs: '1.5rem',
						md: '2rem'
					},
					pt: 1,
					px: 4
				}}
			>
				Торжественная роспись
			</Typography>
			<Typography
				variant='h6'
				sx={{
					fontFamily: 'SweetMavka, sans-serif',
					textAlign: 'center',
					fontSize: {
						xs: '1rem',
						md: '1.5rem'
					},
					pt: 1,
					px: 4
				}}
			>
				Отдел № 1 Управления ЗАГС по Одинцовскому городскому округу, городским округам Власиха и Краснознаменск. ул.
				Маршала Жукова, 28
			</Typography>
			<Typography
				variant='h4'
				sx={{
					fontFamily: 'SweetMavka, sans-serif',
					textAlign: 'center',
					fontSize: {
						xs: '2rem',
						md: '2.5rem'
					},
					pt: 8,
					px: 4
				}}
			>
				25.04.2026, 14:00
			</Typography>
			<Typography
				variant='h5'
				sx={{
					fontFamily: 'SweetMavka, sans-serif',
					textAlign: 'center',
					fontSize: {
						xs: '1.8rem',
						md: '2rem'
					},
					pt: 1,
					px: 4
				}}
			>
				Свадебный фуршет-барбекю
			</Typography>
			<Typography
				variant='h6'
				sx={{
					fontFamily: 'SweetMavka, sans-serif',
					textAlign: 'center',
					fontSize: {
						xs: '1rem',
						md: '1.5rem'
					},
					pt: 1,
					px: 4
				}}
			>
				г. Одинцово, деревня Губкино, дом 15
			</Typography>
			<Typography
				variant='h6'
				sx={{
					fontFamily: 'SweetMavka, sans-serif',
					textAlign: 'center',
					fontSize: {
						xs: '1rem',
						md: '1.5rem'
					},
					pt: 1,
					px: 4
				}}
			>
				Именно здесь мы проведём семейный праздник
			</Typography>
		</Box>
	)
}

export default AddressData

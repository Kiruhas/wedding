import { Box, Typography } from '@mui/material'

const DICTIONARY: Record<number, string> = {
	1: 'Дорогие Родители!', // https://kiruhas.github.io/wedding/?qid=merry_wedding_2026&guest=1
	2: 'Дорогие Родители и Брат!', // https://kiruhas.github.io/wedding/?qid=merry_wedding_2026&guest=2
	3: 'Дорогие Дедушка и Бабушка!', // https://kiruhas.github.io/wedding/?qid=merry_wedding_2026&guest=3
	4: 'Дорогой Сергей!', // https://kiruhas.github.io/wedding/?qid=merry_wedding_2026&guest=4
	5: 'Дорогая Бабушка!', // https://kiruhas.github.io/wedding/?qid=merry_wedding_2026&guest=5
	6: 'Дорогие Сергей, Елена и Екатерина!', // https://kiruhas.github.io/wedding/?qid=merry_wedding_2026&guest=6
	7: 'Дорогие Антонина, Юлия и Василий!', // https://kiruhas.github.io/wedding/?qid=merry_wedding_2026&guest=7
	8: 'Дорогие Алексей и Виктория!', // https://kiruhas.github.io/wedding/?qid=merry_wedding_2026&guest=8
	9: 'Дорогие Сергей, Татьяна и Андрей!', // https://kiruhas.github.io/wedding/?qid=merry_wedding_2026&guest=9
	10: 'Дорогие Елена, Александр и Светлана!', // https://kiruhas.github.io/wedding/?qid=merry_wedding_2026&guest=10
	11: 'Дорогой Николай!', // https://kiruhas.github.io/wedding/?qid=merry_wedding_2026&guest=11
	12: 'Дорогая Алла!', // https://kiruhas.github.io/wedding/?qid=merry_wedding_2026&guest=12
	13: 'Дорогой Максим!', // https://kiruhas.github.io/wedding/?qid=merry_wedding_2026&guest=13
	14: 'Дорогие Роман и Виктория!' // https://kiruhas.github.io/wedding/?qid=merry_wedding_2026&guest=14
}

const AddressData = () => {
	const query = new URLSearchParams(window.location.search)
	const guestNumber = Number(query.get('guest'))

	const guest = guestNumber ? (DICTIONARY[guestNumber] ?? 'Дорогой Гость!') : 'Дорогой Гость!'

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
				variant='h4'
				sx={{
					textAlign: 'center',
					fontFamily: 'Cormorant Infant, serif',
					fontSize: {
						xs: '2rem',
						md: '3rem'
					},
					px: 6,
					zIndex: 1
				}}
			>
				{guest}
			</Typography>
			<Typography
				variant='h6'
				sx={{
					fontFamily: 'Cormorant Infant, serif',
					textAlign: 'center',
					fontSize: {
						xs: '1.5rem',
						md: '2rem'
					},
					pt: 3,
					px: 4,
					zIndex: 1
				}}
			>
				Приглашаем Вас разделить вместе с нами радость создания нашей семьи.
			</Typography>

			<Typography
				variant='h4'
				sx={{
					fontFamily: 'Cormorant Infant, serif',
					textAlign: 'center',
					fontSize: {
						xs: '2rem',
						md: '2.5rem'
					},
					pt: 8,
					px: 4,
					zIndex: 1
				}}
			>
				24.04.2026, 15:00
			</Typography>
			<Box
				component='img'
				src={'/wedding/rings.png'}
				alt='Кольца'
				sx={{
					width: 120,
					height: 120,
					objectFit: 'contain'
				}}
			/>
			<Typography
				variant='h6'
				sx={{
					fontFamily: 'Cormorant Infant, serif',
					textAlign: 'center',
					fontSize: {
						xs: '1.8rem',
						md: '2rem'
					},
					px: 4,
					zIndex: 1
				}}
			>
				Торжественная роспись
			</Typography>
			<Typography
				variant='h6'
				sx={{
					fontFamily: 'Cormorant Infant, serif',
					textAlign: 'center',
					fontSize: {
						xs: '1rem',
						md: '1.5rem'
					},
					pt: 1,
					px: 4,
					zIndex: 1
				}}
			>
				Отдел № 1 Управления ЗАГС по Одинцовскому городскому округу, городским округам Власиха и Краснознаменск. ул.
				Маршала Жукова, 28
			</Typography>
			<Typography
				variant='h4'
				sx={{
					fontFamily: 'Cormorant Infant, serif',
					textAlign: 'center',
					fontSize: {
						xs: '2rem',
						md: '2.5rem'
					},
					pt: 8,
					px: 4,
					zIndex: 1
				}}
			>
				25.04.2026, 14:00
			</Typography>
			<Box
				component='img'
				src={'/wedding/bbq.png'}
				alt='Кольца'
				sx={{
					width: 120,
					height: 120,
					objectFit: 'contain'
				}}
			/>
			<Typography
				variant='h5'
				sx={{
					fontFamily: 'Cormorant Infant, serif',
					textAlign: 'center',
					fontSize: {
						xs: '1.8rem',
						md: '2rem'
					},
					px: 4,
					zIndex: 1
				}}
			>
				Свадебный фуршет-барбекю
			</Typography>
			<Typography
				variant='h6'
				sx={{
					fontFamily: 'Cormorant Infant, serif',
					textAlign: 'center',
					fontSize: {
						xs: '1rem',
						md: '1.5rem'
					},
					pt: 1,
					px: 4,
					zIndex: 1
				}}
			>
				г. Одинцово, деревня Губкино, дом 15
			</Typography>
			<Typography
				variant='h6'
				sx={{
					fontFamily: 'Cormorant Infant, serif',
					textAlign: 'center',
					fontSize: {
						xs: '1rem',
						md: '1.5rem'
					},
					pt: 1,
					px: 4,
					zIndex: 1
				}}
			>
				Именно здесь мы проведём семейный праздник
			</Typography>
		</Box>
	)
}

export default AddressData

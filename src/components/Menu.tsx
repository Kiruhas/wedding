import { Box, Typography } from '@mui/material'

const Menu = () => {
	return (
		<Box
			component='section'
			sx={{
				minHeight: '100vh',
				width: '100%',
				position: 'relative',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				backgroundImage: "url('/background-2.png')",
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
				Меню
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
				Концепция нашего мероприятия 25.04.2026 - свадебный фуршет-барбекю. Вам будут предложены различные варианты
				закусок, свиной и куриный шашлыки, свежие овощи и фрукты, а в конце мероприятия – свадебные сладости.
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
				Вас ждут лёгкие напитки — вино, шампанское, пиво, а для тех, кто хочет сохранить в памяти каждое мгновение
				праздника, предлагаем б/а вино, б/а пиво, лимонады, соки, чай.
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
				Мы постарались выбрать напитки с небольшим градусом, чтобы исключить/уменьшить усталость раньше времени, сладкий
				сон в тарелке с шашлыком, буйство и драки, сопровождающие классические свадьбы. Если у вас есть свои вкусовые
				предпочтения, то можете захватить бутылочку любимого напитка с собой.
			</Typography>
		</Box>
	)
}

export default Menu

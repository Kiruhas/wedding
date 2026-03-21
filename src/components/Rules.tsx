import { Box, Typography } from '@mui/material'

const Rules = () => {
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
				backgroundImage: "url('/wedding/background-1.png')",
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
          url('/wedding/schedule.png')
        `,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					opacity: 0.3,
					zIndex: 0
				}}
			/>
			<Typography
				variant='h3'
				sx={{
					fontFamily: 'SweetMavka, sans-serif',
					fontSize: {
						xs: '2rem',
						md: '3rem'
					},
					px: 6,
					zIndex: 1
				}}
			>
				Атмосфера
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
					px: 4,
					zIndex: 1
				}}
			>
				Наша свадьба - современное торжество, поэтому мы отказались от стандартных конкурсов и традиций, которые кого‑то
				могут смущать или утомлять. В этот день не будет выкупов и краж молодожёнов, сбора денег с гостей, конкурсов с
				выпивкой, тостов по принуждению.
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
					px: 4,
					zIndex: 1
				}}
			>
				Мы предлагаем свободную атмосферу, где каждый сможет участвовать ровно столько, сколько хочется: танцевать,
				общаться, фотографироваться или просто наслаждаться вечером.
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
					px: 4,
					zIndex: 1
				}}
			>
				Будем благодарны, если вы воздержитесь от криков "Горько", ведь поцелуй — это знак выражения чувств, а настоящие
				чувства не могут быть по заказу.
			</Typography>
			{/* <Typography
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
				Понимаем, что для некоторых новая обстановка и большое количество человек может вызывать дискомфорт, поэтому мы
				постараемся сделать праздник комфортным для каждого.
			</Typography> */}
		</Box>
	)
}

export default Rules

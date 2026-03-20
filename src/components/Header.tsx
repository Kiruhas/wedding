import { CountdownSlide } from '@/components/CountdownSlide'
import { Box, Typography } from '@mui/material'

const Header = () => {
	return (
		<Box
			component='section'
			sx={{
				height: '100vh',
				width: '100%',
				position: 'relative',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-end',
				backgroundImage: "url('/main.png')",
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: {
					xs: 'cover',
					sm: 'contain'
				}
			}}
		>
			<Typography
				variant='h3'
				sx={{
					position: 'absolute',
					right: 24,
					top: 24,
					fontFamily: 'SweetMavka, sans-serif',
					fontSize: {
						xs: '2rem',
						md: '3rem'
					}
				}}
			>
				Кирилл и Оля
			</Typography>

			<Box
				sx={{
					position: 'absolute',
					top: '90px',
					left: '50%',
					transform: 'translateX(-50%)',
					textAlign: 'center',
					width: '90%',
					maxWidth: 600
				}}
			>
				<Typography
					variant='h6'
					sx={{
						fontFamily: 'SweetMavka, sans-serif'
					}}
				>
					24.04.2026
				</Typography>
				<Typography
					variant='h6'
					sx={{
						fontFamily: 'SweetMavka, sans-serif'
					}}
				>
					25.04.2026
				</Typography>
			</Box>

			<Box sx={{ pb: 4, px: { xs: 2, md: 4 } }}>
				<Typography
					variant='h6'
					sx={{
						fontFamily: 'SweetMavka, sans-serif',
						mb: 4
					}}
				>
					Праздник соединения двух любящих сердец
				</Typography>
				<CountdownSlide target='2026-04-24T15:00:00+03:00' />
			</Box>
		</Box>
	)
}

export default Header

import { Box, Button, IconButton, Typography } from '@mui/material'
import { useState } from 'react'
import ReactModal from 'react-modal'
import CloseIcon from '@mui/icons-material/Close'

const YandexForm = () => {
	const [isOpen, setIsOpen] = useState(false)

	const customStyles = {
		content: {
			inset: '20px',
			padding: '10px'
		}
	}

	const openModal = () => {
		setIsOpen(true)
	}
	const closeModal = () => {
		setIsOpen(false)
	}

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
					fontFamily: 'SweetMavka, sans-serif',
					textAlign: 'center',
					fontSize: {
						xs: '1.5rem',
						md: '1.8rem'
					},
					px: 4,
					zIndex: 1
				}}
			>
				Для точного определения количества гостей и предпочтений каждого - пройдите, пожалуйста, опрос
			</Typography>
			<Button
				variant='contained'
				onClick={openModal}
				sx={{
					my: 4,
					zIndex: 1
				}}
			>
				Пройти опрос
			</Button>
			<ReactModal
				isOpen={isOpen}
				onRequestClose={closeModal}
				style={customStyles}
				ariaHideApp={false}
			>
				<IconButton
					size='small'
					style={{
						position: 'absolute',
						top: 12,
						right: 12
					}}
					onClick={closeModal}
				>
					<CloseIcon fontSize='medium' />
				</IconButton>

				<iframe
					src='https://forms.yandex.ru/u/69bcdf94eb6146541f4db1d2?iframe=1'
					name='ya-form-69bcdf94eb6146541f4db1d2'
					width='100%'
				></iframe>
			</ReactModal>
		</Box>
	)
}

export default YandexForm

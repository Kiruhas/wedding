import { useEffect, useMemo, useState } from 'react'
import { Box, Paper, Typography } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'

type TimeLeft = {
	weeks: number
	days: number
	hours: number
	minutes: number
	seconds: number
}

type Props = {
	/** Передавай дату уже с таймзоной */
	target: string
}

const getTimeLeft = (targetDate: Date): TimeLeft => {
	const total = targetDate.getTime() - Date.now()

	if (total <= 0) {
		return { weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0 }
	}

	const seconds = Math.floor((total / 1000) % 60)
	const minutes = Math.floor((total / 1000 / 60) % 60)
	const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
	const daysTotal = Math.floor(total / (1000 * 60 * 60 * 24))

	const weeks = Math.floor(daysTotal / 7)
	const days = daysTotal % 7

	return { weeks, days, hours, minutes, seconds }
}

const pad = (num: number) => String(num).padStart(2, '0')

/* ===================== SLIDE UNIT ====================== */

type SlideUnitProps = {
	value: number
	label: string
	delay?: number
}

const SlideUnit: React.FC<SlideUnitProps> = ({ value, label, delay = 0 }) => {
	const padded = pad(value)

	return (
		<Box textAlign='center'>
			<Paper
				elevation={4}
				sx={{
					width: '100%',
					aspectRatio: '1 / 1.1', // одинаковая форма
					overflow: 'hidden',
					borderRadius: 3,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					fontSize: {
						xs: '24px',
						sm: '32px',
						md: '40px'
					},
					fontWeight: 700
				}}
			>
				<AnimatePresence mode='wait'>
					<motion.div
						key={padded}
						initial={{ y: -80, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: 80, opacity: 0 }}
						transition={{
							duration: 0.3,
							ease: 'easeInOut',
							delay
						}}
						style={{
							position: 'absolute'
						}}
					>
						{padded}
					</motion.div>
				</AnimatePresence>
			</Paper>

			<Typography
				mt={{ xs: 0.5, sm: 1 }}
				fontSize={{ xs: 10, sm: 12, md: 14 }}
				color='text.secondary'
			>
				{label}
			</Typography>
		</Box>
	)
}

/* ===================== MAIN ====================== */

export const CountdownSlide: React.FC<Props> = ({ target }) => {
	const targetDate = useMemo(() => new Date(target), [target])

	const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(targetDate))

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeLeft(getTimeLeft(targetDate))
		}, 1000)

		return () => clearInterval(interval)
	}, [targetDate])

	return (
		<Box
			sx={{
				width: '100%',
				display: 'grid',
				gridTemplateColumns: 'repeat(5, 1fr)', // 5 одинаковых колонок
				gap: { xs: 2, sm: 3, md: 5 }
			}}
		>
			{/* механическая задержка справа налево */}
			<SlideUnit
				value={timeLeft.weeks}
				label='Недель'
				delay={0.4}
			/>
			<SlideUnit
				value={timeLeft.days}
				label='Дней'
				delay={0.3}
			/>
			<SlideUnit
				value={timeLeft.hours}
				label='Часов'
				delay={0.2}
			/>
			<SlideUnit
				value={timeLeft.minutes}
				label='Минут'
				delay={0.1}
			/>
			<SlideUnit
				value={timeLeft.seconds}
				label='Секунд'
				delay={0}
			/>
		</Box>
	)
}

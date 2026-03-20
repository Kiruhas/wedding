import { Box, Typography } from '@mui/material'
import { PropsWithChildren } from 'react'

interface IProps extends PropsWithChildren {
	title?: string
}

const Section = ({ title, children }: IProps) => {
	return (
		<>
			<Box
				textAlign='center'
				sx={{ mt: 4, mb: 4 }}
			>
				{title && title.length ? (
					<Typography
						variant='h4'
						sx={{ mb: 2 }}
					>
						{title}
					</Typography>
				) : null}
				{children}
			</Box>
		</>
	)
}

export default Section

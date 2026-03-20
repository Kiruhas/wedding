import Section from '@/components/ui/Section'
import { Typography } from '@mui/material'

const Feedback = () => {
	return (
		<Section>
			<Typography variant='body1'>
				На мероприятии не будет присутствовать фотограф и видеограф, поэтому любая инициатива с Вашей стороны только
				приветствуется!
			</Typography>
			<Typography variant='body1'>Если у вас есть вопросы или предложения, то ждём обратной связи :)</Typography>
		</Section>
	)
}

export default Feedback

import AddressData from '@/components/AddressData'
import Feedback from '@/components/Feedback'
import Header from '@/components/Header'
import Map from '@/components/Map'
import Menu from '@/components/Menu'
import Presents from '@/components/Presents'
import Rules from '@/components/Rules'
import WearStyle from '@/components/WearStyle'
import YandexForm from '@/components/YandexForm'
import { Container } from '@mui/material'

function App() {
	const query = new URLSearchParams(window.location.search)
	const qid = query.get('qid')

	if (!qid || qid !== 'merry_wedding_2026') {
		return <>Неверная ссылка (</>
	}

	return (
		<>
			<Container
				maxWidth={false}
				sx={{
					position: 'relative',
					mb: 5,
					maxWidth: 800,
					width: '100%',
					mx: 'auto',
					p: 0
				}}
			>
				<Header />
				<AddressData />
				<Map />
				<Menu />
				<Presents />
				<Rules />
				<WearStyle />
			</Container>

			<Container
				maxWidth={false}
				sx={{
					position: 'relative',
					mb: 5,
					maxWidth: 800,
					width: '100%',
					mx: 'auto'
				}}
			>
				<Feedback />
				<YandexForm />
			</Container>
		</>
	)
}

export default App

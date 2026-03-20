import { Box } from '@mui/material'
import { Map as MapY, Placemark, YMaps } from '@pbe/react-yandex-maps'

const Map = () => {
	return (
		<Box textAlign='center'>
			<YMaps>
				<div>
					<MapY
						defaultState={{ center: [55.669536, 37.277923], zoom: 13 }}
						width='100%'
						height='400px'
					>
						<Placemark
							geometry={[55.679535, 37.263691]} // координаты метки
							properties={{
								iconCaption: 'Одинцовский ЗАГС №1' // подпись при клике
							}}
							options={{
								preset: 'islands#dotIcon' // стиль метки
							}}
						/>
						<Placemark
							geometry={[55.661736, 37.297923]} // координаты метки
							properties={{
								iconCaption: 'Одинцово, д.Губкино, дом 15' // подпись при клике
							}}
							options={{
								preset: 'islands#dotIcon' // стиль метки
							}}
						/>
					</MapY>
				</div>
			</YMaps>
		</Box>
	)
}

export default Map

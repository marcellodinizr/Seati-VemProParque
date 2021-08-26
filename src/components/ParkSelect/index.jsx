import React from "react";
import { ScrollView } from "react-native";
import { styles } from "./styles";
import { parks } from "../../utils/parks";
import { Park } from "../Park";

export function ParkSelect({ parkSelected, setPark, hasCheckBox = false }) {
	return (
		<ScrollView
			vertical
			style={styles.container}
			showsVerticalScrollIndicator={false}
		>
			{parks.map((park) => (
				<Park
					key={park.id}
					title={park.title}
					icon={park.icon}
					checked={park.id === parkSelected}
					onPress={() => setPark(park.id)}
					hasCheckBox={hasCheckBox}
				/>
			))}
		</ScrollView>
	);
}

import React from "react";
import { ScrollView } from "react-native";
import { styles } from "./styles";
import { parks } from "../../utils/parks";
import { Park } from "../Park";

export function ParkSelect({ setPark }) {
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
					onPress={() => setPark(park.id)}
				/>
			))}
		</ScrollView>
	);
}

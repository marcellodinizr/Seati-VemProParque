import React from "react";
import { ScrollView } from "react-native";
import { styles } from "./styles";
import { courts } from "../../utils/courts";
import { Court } from "../Court";

export function CourtSelect({ setCourt }) {
	return (
		<ScrollView
			vertical
			style={styles.container}
			showsVerticalScrollIndicator={false}
		>
			{courts.map((court) => (
				<Court
					key={court.id}
					title={court.title}
					icon={court.icon}
					onPress={() => setCourt(court.id)}
				/>
			))}
		</ScrollView>
	);
}

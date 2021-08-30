import React from "react";
import { ScrollView } from "react-native";
import { styles } from "./styles";
import { courts } from "../../utils/courts";
import { Court } from "../Court";

export function CourtSelect({ courtSelected, setCourt, hasCheckBox = false }) {
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
					checked={court.id === courtSelected}
					onPress={() => setCourt(court.id)}
					hasCheckBox={hasCheckBox}
				/>
			))}
		</ScrollView>
	);
}

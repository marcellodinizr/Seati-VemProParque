import React from "react";

import { View } from "react-native";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";

import { styles } from "./styles";

export function AppointmentSchedule() {
	return (
		<Background>
			<View style={styles.container}>
				<Header title="Agendamento" />
			</View>
		</Background>
	);
}

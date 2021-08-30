import React from "react";

import { View } from "react-native";
import { Background } from "../../components/Background";
import { CalendarSchedule } from "../../components/CalendarSchedule";
import { Header } from "../../components/Header";

import { styles } from "./styles";

export function AppointmentSchedule() {
	return (
		<Background>
			<View style={styles.container}>
				<Header title="Agendamento" />
				<View style={styles.content}>
					<CalendarSchedule />
				</View>
			</View>
		</Background>
	);
}

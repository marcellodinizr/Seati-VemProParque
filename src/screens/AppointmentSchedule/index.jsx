import React from "react";

import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Header } from "../../components/Header";
import { Background } from "../../components/Background";
import { CalendarSchedule } from "../../components/CalendarSchedule";

import { styles } from "./styles";
import { Button } from "../../components/Button";

export function AppointmentSchedule() {
	const navigation = useNavigation();

	function handleAppointmentRegistration() {
		navigation.navigate("AppointmentRegistration");
	}

	return (
		<Background>
			<View style={styles.container}>
				<Header title="Agendamento" />
				<View style={styles.content}>
					<CalendarSchedule />
				</View>
				<View style={styles.footer}>
					<Button title="Proximo" onPress={handleAppointmentRegistration} />
				</View>
			</View>
		</Background>
	);
}

import React, { useState } from "react";
import { View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

import { CourtSelect } from "../../components/CourtSelect";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import { styles } from "./styles";

export function AppointmentCourt() {
	const navigation = useNavigation();

	const [court, setCourt] = useState("");

	function handleAppointmentSchedule() {
		navigation.navigate("AppointmentSchedule");
	}

	return (
		<Background>
			<View style={styles.container}>
				<Header title="Selecione o Espaço" />
				<ScrollView>
					<CourtSelect setCourt={setCourt} courtSelected={court} />
				</ScrollView>

				<View style={styles.footer}>
					<Button title="Proximo" onPress={handleAppointmentSchedule} />
				</View>
			</View>
		</Background>
	);
}

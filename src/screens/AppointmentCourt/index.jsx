import React, { useState } from "react";
import { View } from "react-native";

import { ScrollView } from "react-native-gesture-handler";

import { CourtSelect } from "../../components/CourtSelect";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";

import { styles } from "./styles";

export function AppointmentCourt() {
	const [court, setCourt] = useState("");

	return (
		<Background>
			<View style={styles.container}>
				<Header title="Selecione o Espaço" />
				<ScrollView>
					<CourtSelect setCourt={setCourt} courtSelected={court} />
				</ScrollView>
			</View>
		</Background>
	);
}

import React, { useState } from "react";
import { View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

import { ParkSelect } from "../../components/ParkSelect";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";

import { styles } from "./styles";

export function AppointmentPark() {
	const navigation = useNavigation();

	const [park, setPark] = useState("");

	function handleAppointmentCourt() {
		navigation.navigate("AppointmentCourt");
	}

	return (
		<Background>
			<View style={styles.container}>
				<Header title="Selecione o Parque" />
				<ScrollView>
					<ParkSelect
						setPark={setPark}
						parkSelected={park}
						onPress={handleAppointmentCourt}
					/>
				</ScrollView>
			</View>
		</Background>
	);
}

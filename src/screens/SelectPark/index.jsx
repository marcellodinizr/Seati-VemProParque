import React, { useState } from "react";
import { View } from "react-native";

import { ParkSelect } from "../../components/ParkSelect";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";

import { styles } from "./styles";
import { ScrollView } from "react-native-gesture-handler";

export function SelectPark() {
	const [park, setPark] = useState("");

	return (
		<Background>
			<View style={styles.container}>
				<Header title="Selecione o Parque" />
				<ScrollView>
					<ParkSelect setPark={setPark} parkSelected={park} />
				</ScrollView>
			</View>
		</Background>
	);
}

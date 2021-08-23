import React, { useState } from "react";

import { View } from "react-native";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { ParkSelect } from "../../components/ParkSelect";

import { styles } from "./styles";

export function SelectPark() {
	const [park, setPark] = useState("");

	return (
		<Background>
			<View style={styles.container}>
				<Header title="Selecione o Parque" />

				<ParkSelect hasCheckBox setPark={setPark} parkSelected={park} />
			</View>
		</Background>
	);
}

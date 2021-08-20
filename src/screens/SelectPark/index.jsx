import React from "react";

import { Text, View } from "react-native";
import { Background } from "../../components/Background";

import { styles } from "./styles";

export function SelectPark() {
	return (
		<Background>
			<View style={styles.container}>
				<Text style={styles.content}>TESTE TESTE</Text>
			</View>
		</Background>
	);
}

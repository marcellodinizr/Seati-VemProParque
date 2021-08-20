import React from "react";

import { Text, View } from "react-native";
import { Background } from "../../components/Background";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

export function SelectPark() {
	return (
		<Background>
			<View style={styles.container}>
				<Text style={styles.content} colors={theme.colors.black}>
					TESTE TESTE
				</Text>
			</View>
		</Background>
	);
}

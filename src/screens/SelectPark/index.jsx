import React from "react";

import { Text, View } from "react-native";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

export function SelectPark() {
	return (
		<Background>
			<View style={styles.container}>
				<Header title="Selecione o Parque" />
				<Text style={styles.content} colors={theme.colors.black}>
					TESTE TESTE
				</Text>
			</View>
		</Background>
	);
}

import React from "react";

import { ScrollView, Text, TextInput, View } from "react-native";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";

import { styles } from "./styles";

export function AppointmentRegistration() {
	return (
		<Background>
			<View style={styles.container}>
				<Header title="Cadastramento" />
				<ScrollView>
					<View style={styles.content}>
						<View style={styles.header}>
							<Text style={styles.title}>Seus Dados</Text>
						</View>
						<View>
							<TextInput />
						</View>
					</View>
				</ScrollView>
			</View>
		</Background>
	);
}

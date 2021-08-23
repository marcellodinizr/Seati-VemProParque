import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import BackgroundSvg from "../../assets/background.svg";
import LogoSvg from "../../assets/logo.svg";

import { Button } from "../../components/Button";

import { styles } from "./styles";

export function SignIn() {
	const navigation = useNavigation();

	function handleSignIn() {
		navigation.navigate("SelectPark");
	}

	return (
		<View style={styles.container}>
			<BackgroundSvg style={styles.background} />

			<LogoSvg />

			<View style={styles.footer}>
				<Button title="Agende seu espaço" onPress={handleSignIn} />
			</View>
		</View>
	);
}

import React from "react";
import { StatusBar } from "react-native";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Play_400Regular } from "@expo-google-fonts/play";
import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";

import { Routes } from "./src/routes";

export default function App() {
	const [fontsLoaded] = useFonts({
		Nunito_600SemiBold,
		Nunito_700Bold,
		Play_400Regular,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<>
			<StatusBar
				barStyle="dark-content"
				backgroundColor="transparent"
				translucent
			/>

			<Routes />
		</>
	);
}

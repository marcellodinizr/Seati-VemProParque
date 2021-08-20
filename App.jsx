import React from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "react-native";
import AppLoading from "expo-app-loading";

import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { Play_400Regular } from "@expo-google-fonts/play";

import { SignIn } from "./src/screens/SignIn";
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

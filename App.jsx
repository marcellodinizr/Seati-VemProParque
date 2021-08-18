import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";

import { Play_400Regular } from "@expo-google-fonts/play";
import { SignIn } from "./src/screens/SignIn";

export default function App() {
	const [fontsLoaded] = useFonts({
		Nunito_600SemiBold,
		Nunito_700Bold,
		Play_400Regular,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return <SignIn />;
}

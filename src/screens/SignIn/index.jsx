import React from "react";

import { Image, ImageBackground, Text, View } from "react-native";
import SignInScreenImg from "../../assets/SignInScreen.png";
import { styles } from "./styles";

export function SignIn() {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={SignInScreenImg}
				style={styles.backgroundImage}
				resizeMode="stretch"
			>
				<View style={styles.content}>
					<Text style={styles.text}>TESTE TESTE TESTE</Text>
				</View>
			</ImageBackground>
		</View>
	);
}

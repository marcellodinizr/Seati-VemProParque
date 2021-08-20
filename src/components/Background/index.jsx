import React from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export function Background({ children }) {
	return (
		<LinearGradient
			style={styles.container}
			colors={[theme.colors.background, theme.colors.green]}
		>
			{children}
		</LinearGradient>
	);
}

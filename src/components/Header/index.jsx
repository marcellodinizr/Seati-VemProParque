import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export function Header({ title, action }) {
	const navigation = useNavigation();

	function handleGoBack() {
		navigation.goBack();
	}

	return (
		<View style={styles.container}>
			<BorderlessButton onPress={handleGoBack}>
				<Feather name="arrow-left" size={24} color={theme.colors.white} />
			</BorderlessButton>

			<Text style={styles.title}>{title}</Text>

			{action && <View>{action}</View>}
		</View>
	);
}

import React from "react";
import { Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { styles } from "./styles";

export function Park({ title, icon: Icon, ...rest }) {
	return (
		<RectButton {...rest}>
			<View style={styles.container}>
				<View style={styles.content}>
					<View />

					<Icon width={52} height={48} />

					<Text style={styles.title}>{title}</Text>
				</View>
			</View>
		</RectButton>
	);
}

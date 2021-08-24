import React from "react";
import { Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { styles } from "./styles";

export function Court({ title, icon: Icon, ...rest }) {
	return (
		<RectButton {...rest}>
			<View style={styles.container}>
				<View style={styles.content}>
					<View />

					<Icon width={62} height={57} />

					<Text style={styles.title}>{title}</Text>
				</View>
			</View>
		</RectButton>
	);
}

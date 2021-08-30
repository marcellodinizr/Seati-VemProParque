import React from "react";
import { Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export function Park({
	title,
	icon: Icon,
	checked = false,
	hasCheckBox = false,
	...rest
}) {
	return (
		<RectButton {...rest}>
			<View style={styles.container}>
				<View style={[styles.content, { opacity: checked ? 1 : 0.8 }]}>
					<Icon width={52} height={48} />

					<Text
						style={[
							styles.title,
							{ color: checked ? theme.colors.on : theme.colors.green },
						]}
					>
						{title}
					</Text>
				</View>
			</View>
		</RectButton>
	);
}

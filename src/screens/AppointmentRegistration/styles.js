import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	header: {
		textAlign: "center",
		alignItems: "center",
		marginTop: 25,
	},

	title: {
		fontSize: 24,
		fontFamily: theme.fonts.title600,
	},
});

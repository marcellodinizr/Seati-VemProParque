import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 56,
		backgroundColor: theme.colors.green,
		borderRadius: 15,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},

	title: {
		flex: 1,
		color: theme.colors.white,
		fontSize: 18,
		textAlign: "center",
		fontFamily: theme.fonts.title600,
	},
});

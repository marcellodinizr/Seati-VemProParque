import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},

	content: {
		flexDirection: "row",
		width: "100%",
		height: 70,
		alignItems: "center",
		paddingLeft: 10,
	},

	title: {
		fontFamily: theme.fonts.title700,
		color: theme.colors.green,
		fontSize: 22,
		marginLeft: 20,
	},
});

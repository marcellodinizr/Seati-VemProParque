import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	background: {
		position: "absolute",
		width: "100%",
		height: "100%",
	},

	logo: {
		marginTop: 40,
	},

	footer: {
		width: "90%",
		marginTop: 250,

		marginBottom: getBottomSpace(),
	},
});

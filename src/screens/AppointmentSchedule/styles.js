import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	footer: {
		marginTop: 420,
		marginHorizontal: 20,
		width: "90%",
		paddingBottom: 120,
		paddingTop: 20,
		marginBottom: getBottomSpace(),
	},
});

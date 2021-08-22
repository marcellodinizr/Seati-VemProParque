import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		height: Dimensions.get("screen").height,
		backgroundColor: theme.colors.background,
	},
});

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { SignIn } from "../screens/SignIn";
import { SelectPark } from "../screens/SelectPark";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
	return (
		<Navigator
			screenOptions={{
				headerShown: false,
				cardStyle: {
					backgroundColor: "transparent",
				},
			}}
		>
			<Screen name="SignIn" component={SignIn} />
			<Screen name="SelectPark" component={SelectPark} />
		</Navigator>
	);
}

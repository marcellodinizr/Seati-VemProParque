import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { SignIn } from "../screens/SignIn";
import { AppointmentPark } from "../screens/AppointmentPark";
import { AppointmentCourt } from "../screens/AppointmentCourt";

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
			<Screen name="AppointmentPark" component={AppointmentPark} />
			<Screen name="AppointmentCourt" component={AppointmentCourt} />
		</Navigator>
	);
}

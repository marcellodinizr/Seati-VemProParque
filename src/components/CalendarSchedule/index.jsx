import React from "react";
import { View } from "react-native";
import { Calendar } from "react-native-calendario";

import { styles } from "./styles";

export function CalendarSchedule() {
	const [date, setDate] = useState(new Date());

	const onChange = (date) => {
		setDate(date);
	};

	return (
		<View style={styles.container}>
			<Calendar onChange={this.onChange} value={this.state.date} />
		</View>
	);
}

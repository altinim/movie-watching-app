import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: string;
}) {
	return <FontAwesome size={25} style={{ margin: 15 }} {...props} />;
}
const GoBackButton: React.FC = () => {
	const navigation = useNavigation();

	const handleGoBack = () => {
		navigation.goBack();
	};

	return (
		<TouchableOpacity onPress={handleGoBack}>
			<TabBarIcon name="arrow-left" color="gray" />
		</TouchableOpacity>
	);
};

export default GoBackButton;

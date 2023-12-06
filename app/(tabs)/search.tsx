import React, { useState } from "react";
import { Text } from "../../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import { StyleSheet, Touchable, TouchableOpacity, View } from "react-native";
type Props = {};
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import GoBackButton from "../../components/GoBackButton";
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: string;
}) {
	return <FontAwesome size={25} style={{ marginBottom: -3 }} {...props} />;
}
const search = (props: Props) => {
	const navigation = useNavigation();
	const [input, setInput] = useState<string>("");

	const handleChange = (text: string) => {
		setInput(text);
	};
	const handleClear = () => {
		setInput("");
	};

	const handleGoBack = () => {
		navigation.goBack();
	};
	return (
		<>
			<SafeAreaView style={styles.container}>
				<TouchableOpacity onPress={handleGoBack}></TouchableOpacity>
				<GoBackButton></GoBackButton>
				<View style={styles.inputContainer}>
					<TextInput
						placeholder="Search for movies"
						style={styles.input}
						onChangeText={handleChange}
						value={input}
						autoFocus={true}
					></TextInput>
					<TouchableOpacity
						style={styles.close}
						onPress={handleClear}
					>
						{input && <TabBarIcon name="close" color="gray" />}
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</>
	);
};
const styles = StyleSheet.create({
	container: {},
	inputContainer: {
		position: "relative",
		margin: 15,
	},
	input: {
		padding: 15,
		borderWidth: 1,
		borderColor: "gray",
		borderRadius: 25,
		color: "white",
	},
	close: {
		position: "absolute",
		right: 20,
		top: 10,
	},
});
export default search;

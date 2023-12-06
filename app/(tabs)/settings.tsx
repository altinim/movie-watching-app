import { Pressable, SectionList, StyleSheet, TextInput } from "react-native";
import { Text, View } from "../../components/Themed";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: string;
}) {
	return <FontAwesome size={28} {...props} />;
}

export default function TabTwoScreen() {
	return (
		<View style={styles.container}>
			<SectionList
				sections={[
					{
						title: "Profile Settings",
						data: [
							{ name: "Avatar", icon: "user" },
							{ name: "Username", icon: "user-circle" },
							{ name: "Email", icon: "envelope" },
						],
					},
					{
						title: "App Preferences",
						data: [
							{ name: "Theme", icon: "lightbulb-o" },
							{ name: "Language", icon: "language" },
							{ name: "Notification", icon: "bell" },
						],
					},
					{
						title: "Security",
						data: [
							{ name: "Change Password", icon: "lock" },
							{ name: "Two-Factor Authentication", icon: "lock" },
						],
					},
					{
						title: "Privacy",
						data: [
							{ name: "Public Profile", icon: "globe" },
							{
								name: "Data Sharing Preferences",
								icon: "database",
							},
						],
					},
				]}
				renderItem={({ item }) => (
					<View style={styles.item}>
						<TabBarIcon
							name={item.icon}
							color="#fff"
							style={styles.icon}
						/>
						<Text>{item.name}</Text>
					</View>
				)}
				renderSectionHeader={({ section }) => (
					<Text style={styles.sectionHeader}>{section.title}</Text>
				)}
				keyExtractor={(item) => `basicListEntry-${item.name}`}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
	sectionHeader: {
		paddingHorizontal: 10,
		paddingVertical: 5,
		fontSize: 20,
		fontWeight: "bold",
		borderBottomWidth: 1,
		backgroundColor: "#242424",
	},
	icon: {
		marginRight: 10,
	},
	item: {
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
		backgroundColor: "#181818",
		borderBottomWidth: 1,
	},
	itemText: {
		fontSize: 18,
		color: "#",
	},
});

import { StyleSheet } from "react-native";
export const formStyle = StyleSheet.create({
	container: {
		backgroundColor: "#181818",
	},
	textInput: {
		borderBottomWidth: 1,
		borderColor: "#808080",
		minWidth: 100,
		margin: 10,
		minHeight: 35,
		color: "white",
		padding: 10,
		borderRadius: 7,
	},
	header: {
		textAlign: "center",
		fontSize: 25,
		margin: 25,
		fontWeight: "bold",
		color: "white",
	},
	fullName: {
		flexDirection: "row",
		justifyContent: "space-between",
		flexWrap: "wrap",
	},
	button: {
		backgroundColor: "#007AFF",
		textAlign: "center",
		color: "black",
		borderRadius: 7,
		minHeight: 35,
		padding: 5,
		minWidth: 100,
		marginHorizontal: 15,
		marginVertical: 10,
		fontWeight: 700,
	},
	textLabel: {
		color: "white",
		marginHorizontal: 15,
		marginTop: 10,
		fontWeight: "bold",
	},
	text: {
		color: "white",
		marginVertical: 10,
		textAlign: "center",
	},

	link: { color: "skyblue", padding: 15 },
});

import { StyleSheet } from "react-native";
export const movieStyles = StyleSheet.create({
	header: {
		fontWeight: "800",
		fontSize: 20,
		marginVertical: 15,
		color: "white",
		textAlign: "center",
		shadowColor: "black",
	},
	search: {
		position: "absolute",
		right: 20,
		top: 15,
	},
	container: {
		flex: 1,
		paddingHorizontal: 15,
	},
	listContainer: {
		paddingBottom: 16,
	},
	movieItem: {
		flexDirection: "column",
		marginBottom: 20,
		backgroundColor: "#222",
		borderRadius: 8,
		overflow: "hidden",
	},
	movieImage: {
		width: "100%",
		height: 250,
		resizeMode: "cover",
	},
	movieDetails: {
		padding: 15,
	},
	title: {
		fontSize: 25,
		fontWeight: "900",
		marginBottom: 8,
		color: "#fff",
	},
	genre: {
		color: "#61dafb",
		marginBottom: 8,
		fontWeight: 700,
	},
	extract: {
		color: "#DCDCDC",
	},
	icon: { alignContent: "center" },
	actionButtons: {
		flexDirection: "row",
		justifyContent: "space-between",
		gap: 10,
		marginHorizontal: 15,
	},
	pressable: {
		padding: 5,
		borderRadius: 8,
		alignItems: "center",
		flex: 1,
		flexDirection: "row",
		gap: 5,
	},
});

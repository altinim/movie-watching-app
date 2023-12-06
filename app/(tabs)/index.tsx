import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import Welcome from "../../components/Welcome";
const image = {
	uri: "https://www.bhmpics.com/downloads/netflix-background/11.s3-news-tmp-10557-netflixa--default--1280.jpg",
};

export default function TabOneScreen() {
	return (
		<>
			<ImageBackground
				source={image}
				resizeMode="cover"
				style={styles.image}
			>
				<SafeAreaView style={styles.container}>
					<View style={styles.overlay} />
					<Welcome />
				</SafeAreaView>
			</ImageBackground>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		flex: 1,
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(0, 0, 0, 0.8)",
	},
});

import React, { useEffect, useState } from "react";
import { Movie } from "./Movie/Movie";
import { getMovies } from "../src/services/api/movies";
import {
	ActivityIndicator,
	FlatList,
	ScrollView,
	Image,
	View,
	StyleSheet,
} from "react-native";
import { Text } from "./Themed";
import { Link } from "expo-router";
import { TabBarIcon } from "../app/(tabs)/_layout";
import { movieStyles } from "./Movie/MovieStyle";
import { TouchableOpacity } from "react-native-gesture-handler";
type Props = {};
interface MovieItemProps {}

const TVShows: React.FC<MovieItemProps> = () => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState<Movie[]>([]);

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const movies: Movie[] = await getMovies();
				setData(movies);
				setLoading(false);
			} catch (error: any) {
				console.log(error.message);
			}
		};
		fetchMovies();
	}, []);

	const renderItem = ({ item }: { item: Movie }) => {
		return (
			<TouchableOpacity style={styles.movie}>
				<Image source={{ uri: item.thumbnail }} style={styles.image} />
			</TouchableOpacity>
		);
	};

	const renderWatchedItems = ({ item }: { item: Movie }) => {
		return (
			<TouchableOpacity style={styles.movie}>
				<Image
					source={{ uri: item.thumbnail }}
					style={[styles.image]}
				/>
				<View style={styles.overlay} />
				<TabBarIcon
					name="play"
					color="white"
					style={styles.play}
				></TabBarIcon>
				<Text style={styles.movieTitle}>{item.title}</Text>
			</TouchableOpacity>
		);
	};
	return (
		<>
			<ScrollView>
				{isLoading ? (
					<ActivityIndicator size="large" color="#ffffff" />
				) : (
					<>
						<Text style={movieStyles.header}>ALTINIUM MOVIES </Text>
						<Link
							href={"/(tabs)/search"}
							style={movieStyles.search}
						>
							<TabBarIcon name="search" color="#fff" />
						</Link>
						<Text style={styles.heading}>Continue watching</Text>

						<ScrollView
							horizontal={true}
							style={styles.scroll}
							showsHorizontalScrollIndicator={false}
							nestedScrollEnabled={false}
						>
							<FlatList
								data={data}
								renderItem={renderWatchedItems}
								contentContainerStyle={styles.list}
							/>
						</ScrollView>
						<Text style={styles.heading}>Suggested</Text>

						<ScrollView
							horizontal={true}
							style={styles.scroll}
							showsHorizontalScrollIndicator={false}
							nestedScrollEnabled={false} // Add this line
						>
							<FlatList
								data={data}
								renderItem={renderItem}
								contentContainerStyle={styles.listReverse}
							/>
						</ScrollView>
						<Text style={styles.heading}>Top TV Shows Today</Text>

						<ScrollView
							horizontal={true}
							style={styles.scroll}
							showsHorizontalScrollIndicator={false}
						>
							<FlatList
								data={data}
								renderItem={renderItem}
								contentContainerStyle={styles.list}
							/>
						</ScrollView>
					</>
				)}
			</ScrollView>
		</>
	);
};
const styles = StyleSheet.create({
	list: { flexDirection: "row-reverse", marginHorizontal: 15 },
	listReverse: { flexDirection: "row", marginHorizontal: 15 },
	image: { width: 120, height: 200, borderRadius: 10 },
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(0, 0, 0, 0.6)",
		borderRadius: 10,
	},
	play: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: [{ translateX: -13 }, { translateY: -18 }],
		shadowColor: "black",
		shadowOpacity: 1,
	},
	heading: {
		color: "white",
		margin: 15,
		fontWeight: "700",
		fontSize: 20,
	},
	scroll: {},
	movieTitle: {
		fontWeight: "800",
		position: "absolute",
		bottom: 0,
		backgroundColor: "rgba(0,0,0,0.6)",
		width: "100%",
		height: 50,
		fontSize: 17,
		fontWeight: "700",
	},
	movie: { marginLeft: 10 },
});
export default TVShows;

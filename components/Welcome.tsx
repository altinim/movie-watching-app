import React, { useEffect, useState } from "react";
import { Text } from "./Themed";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import MovieItem from "./Movie/Movie";
import { movieStyles } from "./Movie/MovieStyle";
import { getMovies } from "../src/services/api/movies";
import { Movie } from "./Movie/Movie";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";

interface WelcomeProps {}

function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: string;
}) {
	return <FontAwesome size={25} style={{ marginBottom: -3 }} {...props} />;
}

const Welcome: React.FC<WelcomeProps> = () => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState<Movie[]>([]);

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const movies = await getMovies();
				setData(movies);
				setLoading(false);
			} catch (error: any) {
				console.log(error.message);
			}
		};
		fetchMovies();
	}, []);

	const renderItem = ({ item }: { item: Movie }) => (
		<MovieItem movie={item} />
	);

	return (
		<View style={[movieStyles.container, { flex: 1 }]}>
			{isLoading ? (
				<ActivityIndicator size="large" color="#ffffff" />
			) : (
				<>
					<Text style={movieStyles.header}>ALTINIUM MOVIES </Text>
					<Link href={"/(tabs)/search"} style={movieStyles.search}>
						<TabBarIcon name="search" color="#fff" />
					</Link>
					<FlatList
						data={data}
						keyExtractor={({ title }) => title}
						renderItem={renderItem}
						contentContainerStyle={movieStyles.listContainer}
					/>
				</>
			)}
		</View>
	);
};
const styles = StyleSheet.create({});
export default Welcome;

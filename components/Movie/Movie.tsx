import { Ionicons } from "@expo/vector-icons";
import { formStyle } from "../../app/styling/form";
import { movieStyles } from "./MovieStyle";
import { Image, Text, Pressable, View } from "react-native";
export type Movie = {
	id: string;
	title: string;
	year: number;
	cast: string[];
	thumbnail: string;
	extract: string;
	genres: string[];
};

interface MovieItemProps {
	movie: Movie;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => (
	<View style={movieStyles.movieItem}>
		<Image
			style={movieStyles.movieImage}
			source={{ uri: movie.thumbnail }}
		/>
		<View style={movieStyles.movieDetails}>
			<Text style={movieStyles.title}>{movie.title}</Text>
			<Text
				style={[
					movieStyles.extract,
					{
						marginVertical: 5,
						color: "gray",
						fontWeight: "bold",
						letterSpacing: 0.7,
					},
				]}
			>
				4.78/5.0
			</Text>
			<Text style={movieStyles.genre}>{movie.genres.join(" | ")}</Text>
			<Text style={movieStyles.extract}>{movie.extract}</Text>
		</View>
		<View style={movieStyles.actionButtons}>
			<Pressable style={movieStyles.pressable}>
				<Ionicons name="ios-add" size={32} color="white" />
				<Text style={formStyle.text}>Add to List</Text>
			</Pressable>
			<Pressable style={movieStyles.pressable}>
				<Ionicons name="ios-film" size={32} color="white" />
				<Text style={formStyle.text}>Watch Trailer</Text>
			</Pressable>
		</View>
		<Pressable
			style={[
				formStyle.button,
				{ flexDirection: "row", justifyContent: "center" },
			]}
		>
			<Ionicons
				style={movieStyles.icon}
				name="ios-play"
				size={32}
				color="white"
			/>
			<Text style={formStyle.text}>Watch</Text>
		</Pressable>
	</View>
);

export default MovieItem;

import { Link } from "expo-router";
import React from "react";
import { formStyle } from "../app/styling/form";
import {
	Text,
	Pressable,
	TextInput,
	View,
	StyleSheet,
	Button,
} from "react-native";

type Props = {};

const SignIn = (props: Props) => {
	return (
		<View style={[formStyle.container, { flex: 1 }]}>
			<Text style={formStyle.header}>Sign In</Text>
			<Text style={formStyle.textLabel}>Email</Text>

			<TextInput
				inputMode="email"
				style={formStyle.textInput}
				placeholder="Enter your email"
			></TextInput>
			<Text style={formStyle.textLabel}>Password</Text>
			<TextInput
				style={formStyle.textInput}
				secureTextEntry={true}
				placeholder="Enter your password"
			></TextInput>
			<View style={formStyle.button}>
				<Pressable onPress={() => alert("Hi")}>
					<Text style={formStyle.text}>Sign In</Text>
				</Pressable>
			</View>
			<Text style={formStyle.text}>
				Don't have an acount?{" "}
				<Link style={formStyle.link} href="/signup">
					Sign up
				</Link>
			</Text>
		</View>
	);
};

export default SignIn;

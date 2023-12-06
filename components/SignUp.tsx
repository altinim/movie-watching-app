import { Link } from "expo-router";
import React from "react";
import { View, TextInput, StyleSheet, Button, Pressable } from "react-native";
import { Text } from "./Themed";

import { formStyle } from "../app/styling/form";
type Props = {};
export const SignUp = (props: Props) => {
	return (
		<View style={[formStyle.container, { flex: 1 }]}>
			<Text style={formStyle.header}>Create an account</Text>
			<Text style={formStyle.textLabel}>Full Name</Text>
			<View style={formStyle.fullName}>
				<TextInput
					style={[formStyle.textInput]}
					placeholder="Enter your first name"
				></TextInput>
				<TextInput
					style={[formStyle.textInput, { flex: 1 }]}
					placeholder="Enter your last name"
				></TextInput>
			</View>
			<Text style={formStyle.textLabel}>Email</Text>
			<TextInput
				style={formStyle.textInput}
				placeholder="Enter your email "
			></TextInput>
			<Text style={formStyle.textLabel}>Password</Text>
			<TextInput
				style={formStyle.textInput}
				placeholder="Enter your pasword "
			></TextInput>
			<Text style={formStyle.textLabel}>Confirm Password</Text>
			<TextInput
				style={formStyle.textInput}
				placeholder="Confirm your password"
			></TextInput>

			<View style={formStyle.button}>
				<Pressable onPress={() => alert("Hi")}>
					<Text style={formStyle.text}>Sign Up</Text>
				</Pressable>
			</View>
			<Text style={formStyle.text}>
				Already have an account?
				<Link href="/signin" style={formStyle.link}>
					Sign in
				</Link>
			</Text>
		</View>
	);
};

export default SignUp;

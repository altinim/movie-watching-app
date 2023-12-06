import React from "react";
import SignIn from "../../components/SignIn";
import { SafeAreaView } from "react-native";

type Props = {};

const account = (props: Props) => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<SignIn />
		</SafeAreaView>
	);
};

export default account;

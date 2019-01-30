import React from "react";
import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	FlatList
} from "react-native";

import CommonHeader from "./partial/CommonHeader";
import GlobalStyles from '../assets/styles/GlobalStyles';
import HorizontalFlatList from '../components/HorizontalFlatList';
// import {
// 	AdMobBanner,
// 	AdMobInterstitial,
// 	PublisherBanner,
// 	AdMobRewarded,
//   } from 'react-native-admob';
// import {advertize} from '../constants/advertize';




export default class StudyScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			name : 'study'
		}
	}
	static navigationOptions = {
		header: null
	};

	render() {
		return (
			<SafeAreaView style={GlobalStyles.droidSafeArea}>
			<View style={styles.container}>
				<CommonHeader title="Study" />
				<View>
					<HorizontalFlatList/>
				</View>
				{/* <View>
					<AdMobBanner
					adSize="fullBanner"
					adUnitID={advertize.bottom_banner.ad_unit_id}
					testDevices={[AdMobBanner.simulatorId]}
					onAdFailedToLoad={error => console.error(error)}
					/>
				</View> */}
			</View>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		elevation: 0,
		backgroundColor: "#fff"
	}
});

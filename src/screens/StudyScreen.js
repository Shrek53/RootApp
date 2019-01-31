import React from "react";
import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	FlatList,
	Dimensions
} from "react-native";

import CommonHeader from "./partial/CommonHeader";
import GlobalStyles from '../assets/styles/GlobalStyles';
import HorizontalFlatList from '../components/HorizontalFlatList';
import {
	AdMobBanner,
	AdMobInterstitial,
	PublisherBanner,
	AdMobRewarded,
  } from 'react-native-admob';
import {advertize} from '../constants/advertize';
var { width, height } = Dimensions.get('window')



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
				<View style={styles.horizontal_flat_list_view}>
					<HorizontalFlatList/>
				</View>
				<View style={styles.bottom_ad_banner_view}>
					<AdMobBanner
					// adSize="banner"
					adSize="{500,30}"
					// adUnitID={advertize.bottom_banner.ad_unit_id}
					adUnitID={'ca-app-pub-3940256099942544/6300978111'}
					// testDevices={[AdMobBanner.simulatorId]}
					testDevices={['EMULATOR']}
					onAdFailedToLoad={error => console.error(error)}
					/>
					<Text>ad above this</Text>
				</View>
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
	},
	horizontal_flat_list_view:{
		flex:1
	},
	bottom_ad_banner_view:{
		flex:1,
		alignItems:'center',
		justifyContent:'center',
		bottom:10,
		backgroundColor:'#efefef'
	}
});

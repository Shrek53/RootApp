import React, {Component} from 'react';
import {View,Text,Image, StyleSheet, FlatList} from 'react-native';
import {horizontalFlatListData} from '../data/HorizontalFlatListData';
import Theme from '../constants/Theme';



class HorizontalFlatListItem  extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <View style={styles.flat_list_item}>
                <Text style={styles.flat_list_item_text}>{this.props.item.item.title}</Text>
            </View>
        )
    }
}

export default class HorizontalFlatList extends Component {

    render(){
        return(
            <View style={styles.container}>
                {/* <Text style={styles.dummy_text}>Horizontal</Text> */}
                <View>
                    <FlatList   
                        style={styles.flat_list} 
                        horizontal={true}
                        data={horizontalFlatListData}
                        renderItem={(item,index)=>{
                            return(
                                <HorizontalFlatListItem item={item} index={index} parentFlatList={this} >

                                </HorizontalFlatListItem>
                            );
                        }}
                        keyExtractor={(item,index)=>item.title}
                    >

                    </FlatList>
                </View>
            </View>
        )        
    }
    
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',      
    },

    dummy_text:{
        backgroundColor: 'green'
    },
    flat_list:{
        // backgroundColor: 'red',
        
    },
    flat_list_item:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:Theme.Global.Blue,
        width: 150,
        height: 150,
        borderRadius:10,
        borderWidth:2,
        borderColor:'gray',
        margin:4
    },
    flat_list_item_text:{
        color:'white',
        fontSize : 18,
        padding: 10,
    }
});
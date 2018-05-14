import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLOR_MAIN_TEXT} from '../consts';

type Props = {
    productsQuantity: number;
}
export const Filters = (props: Props) => {
   return (
       <View style={styles.container}>
           <Text style={styles.filters}>FILTERS</Text>
           <Text style={styles.quantity}>Products quantity: {props.productsQuantity}</Text>
       </View>
   )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    filters: {
        fontSize: 16,
        color: COLOR_MAIN_TEXT,
    },
    quantity: {
        color: COLOR_MAIN_TEXT
    }
});
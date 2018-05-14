import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLOR_PRICE_DISCOUNT, COLOR_PRICE_REGULAR} from '../consts';

type Props = {
    final: string;
    hasDiscount: boolean;
    regular: string;
}
export const PriceSection = (props: Props) => {
    return (
        <View style={styles.container}>
            {props.hasDiscount && <>
                <Text style={styles.discount}>{props.final}</Text>
                <Text style={styles.regular}>{props.regular}</Text>
            </>}
            {!props.hasDiscount && <Text style={styles.final}>{props.final}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    discount: {
        fontSize: 18,
        color: COLOR_PRICE_DISCOUNT,
        margin: 15,
        marginLeft: 5,
        marginRight: 5
    },
    final: {
        fontSize: 18,
        color: COLOR_PRICE_REGULAR,
        margin: 10
    },
    regular: {
        fontSize: 12,
        color: COLOR_PRICE_REGULAR,
        textDecorationLine: 'line-through',
        margin: 10
    }
});

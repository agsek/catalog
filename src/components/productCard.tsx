import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {CatalogProduct} from '../../common/lib/models';
import {PriceSection} from './priceSection';
import {COLOR_MAIN_TEXT} from '../consts';

type Props = {
    product: CatalogProduct
}
export const ProductCard = (props: Props) => {
    const {
        finalPrice,
        finalPriceAsString,
        regularPrice,
        regularPriceAsString,
        photo,
        title
    } = props.product;
    return (
        <View style={styles.container}>
            <Image source={{uri: photo.front}}
                   style={styles.photo} />
            <PriceSection hasDiscount={finalPrice !== regularPrice}
                          final={finalPriceAsString}
                          regular={regularPriceAsString} />
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
    container: {
        margin: 5,
        marginBottom: 10
    },
    photo: {
        height: (screenWidth * 4) / 3,
        width: screenWidth - 10
    },
    title: {
        color: COLOR_MAIN_TEXT,
        fontSize: 24,
        textAlign: 'center'
    }
});
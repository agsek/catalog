// Import libraries for making a component
import React from 'react';
import {Text, View} from 'react-native';
import {Catalog} from '../../common/lib/models';
import {COLOR_MAIN_BACKGROUND} from '../consts';

export const Header = (props: Catalog) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.categoryName}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: COLOR_MAIN_BACKGROUND,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        borderBottomColor: '#ecebe8',
        borderBottomWidth: 1,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

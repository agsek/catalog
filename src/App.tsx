import React from 'react';
import {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import {Provider} from 'react-redux';
import {Catalog, Header} from './components/';
import {store} from '../common/lib/store/';
import {COLOR_MAIN_BACKGROUND} from './consts';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <Header />
                    <Catalog />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_MAIN_BACKGROUND
    }
});

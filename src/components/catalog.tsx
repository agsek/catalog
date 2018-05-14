import React from 'react';
import {Component} from 'react';
import {Dimensions, FlatList} from 'react-native';
import {ProductCard} from './productCard';
import {CatalogProps} from '../types/catalog';
import {Filters} from './filters';

export class Catalog extends Component<CatalogProps> {
    componentDidMount() {
        this.props.setCatalogData({
            categoryBaseUrl: '',
            categoryId: 3829,
            categoryName: 'Płaszcze kurtki',
            productsApiUrl: 'http://m.gpos.lppdev.pl/api/',
            storeId: 1,
            websiteUrl: 'http://reserved.gpos.lppdev.pl/'
        });
        this.props.catalogRequestPage(this.props.page + 1);
    }

    render() {
        return (
            <>
                <Filters productsQuantity={this.props.productsQuantity}/>
                <FlatList data={this.props.products}
                          renderItem={({item}) => <ProductCard product={item} />}
                          keyExtractor={(item, index) => index.toString()}
                          onEndReachedThreshold={Dimensions.get('screen').height}
                          onEndReached={() => {
                              this.props.catalogRequestPage(this.props.page + 1);
                          }} />
            </>

    );
    }
}

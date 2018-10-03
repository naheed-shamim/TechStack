import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
    render() {
        const { rowTitleStyle } = styles;

        return (
            <CardSection>
                <Text style={rowTitleStyle}>
                    {this.props.library.title}
                </Text>
            </CardSection>
        );
    }
}

const styles = {

    rowTitleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }

};

export default ListItem;

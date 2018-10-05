import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

    renderDescription() {
        const { library, selectedLibraryId } = this.props;

        if (library.id === selectedLibraryId) {
            console.log('Matched');
            return (
                <Text>{library.description}</Text>  
            );
        }
    }

    render() {
        const { rowTitleStyle } = styles;
        const { id, title } = this.props.library;

        return (
            <TouchableOpacity
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={rowTitleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = {

    rowTitleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }

};

const mapStateToProps = state => {
    return { selectedLibraryId: state.selectedLibraryId };
};

export default connect(mapStateToProps, actions)(ListItem);

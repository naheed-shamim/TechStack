import React, { Component } from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    UIManager,
    LayoutAnimation, 
    Platform, 
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

    constructor() {
        super();
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { library, isExpanded } = this.props;

        if (isExpanded) {
            console.log('Matched');
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>
                    {library.description}</Text>
                </CardSection>
            );
        }
    }

    render() {

        
        const { rowTitleStyle } = styles;
        const { id, title } = this.props.library;

        return (
            <TouchableWithoutFeedback
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
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {

    rowTitleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }

};

const mapStateToProps = (state, ownProps) => {

    const isExpanded = state.selectedLibraryId === ownProps.library.id;

    return { isExpanded };
};

export default connect(mapStateToProps, actions)(ListItem);

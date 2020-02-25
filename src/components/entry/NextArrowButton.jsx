import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import {
    TouchableHighlight,
    StyleSheet,
    Text,
    View,
} from 'react-native-web';

import {Icon} from 'framework7-react';

import colors from '../../css/colour.js';

const buttonSize = 60;
const buttonWrapperPadding = 0;


export default class NextArrowButton extends Component {
    render() {
        const { disabled, handleNextButton } = this.props;
        const opacityStyle = disabled ? 0.2 : 0.6;
        return (
            <View style={styles.buttonWrapper}>
                <TouchableHighlight
                    style={[{ opacity: opacityStyle }, styles.button]}
                    onPress={handleNextButton}
                    disabled={disabled}
                >
                    <Icon
                        f7={"chevron_right"}
                        size={"32px"}
                        color={"blue"}
                    />
                </TouchableHighlight>
            </View>
        );
    }
}

NextArrowButton.propTypes = {
    disabled: PropTypes.bool,
    handleNextButton: PropTypes.func,
};

const styles = {
    buttonWrapper: {
        alignItems: 'flex-end',
        right: 20,
        bottom: 20,
        paddingTop: buttonWrapperPadding,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: buttonSize,
        height: buttonSize,
        backgroundColor: colors.white,
    },
    icon: {
        marginRight: -2,
        marginTop: -2,
    },
};
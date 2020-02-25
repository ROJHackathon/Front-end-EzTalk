import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Easing,
    Animated,
} from 'react-native-web';

import {Icon} from 'framework7-react';

import colors from '../../css/colour.js';

export default class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positionValue: new Animated.Value(-60),
        };
        this.closeNotification = this.closeNotification.bind(this);
        this.animateNotification = this.animateNotification.bind(this);
    }


    render() {
        const {
            type, firstLine, secondLine, showNotification,
        } = this.props;
        showNotification ? this.animateNotification(0) : this.animateNotification(-60);
        const { positionValue } = this.state;
        return (
            <Animated.View style={[{ marginBottom: positionValue }, styles.wrapper]}>
                <View style={styles.errorMessageContainer}>
                    <View style={styles.errorMessage}>
                        <Text style={styles.errorText}>
                            {type}
                        </Text>
                        <Text>
                            {firstLine}
                        </Text>
                    </View>
                    <Text style={styles.errorMessage}>
                        {secondLine}
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.closeButton}
                    onPress={this.closeNotification}
                >
                    <Icon
                        f7={"multiply"}
                        size={"20px"}
                        color={colors.lightGray}
                    />
                </TouchableOpacity>
            </Animated.View>
        );
    }


    animateNotification(value) {
        const { positionValue } = this.state;
        Animated.timing(
            positionValue,
            {
                toValue: value,
                duration: 300,
                velocity: 3,
                tension: 2,
                friction: 8,
                easing: Easing.in,
            },
        ).start();
    }

    closeNotification() {
        this.props.handleCloseNotification();
    }

}



Notification.propTypes = {
    showNotification: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    firstLine: PropTypes.string,
    secondLine: PropTypes.string,
    handleCloseNotification: PropTypes.func,
};

const styles = {
    wrapper: {
        flex: 1,
        backgroundColor: colors.white,
        height: 60,
        padding: 10,
    },
    notificationContent: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    errorText: {
        color: colors.darkOrange,
        marginRight: 5,
        fontSize: 14,
        marginBottom: 2,
    },
    errorMessage: {
        flexDirection: 'row',
        flex: 1,
        marginBottom: 2,
        fontSize: 14,
    },
    errorMessageContainer: {
        flexDirection: 'row',
        flex: 1,
        marginBottom: 2,
    },
    closeButton: {
        position: 'absolute',
        right: 10,
        top: 10,
        zIndex: 999,
    },
};
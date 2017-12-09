import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { View } from 'react-native';
import AppStyles from '../styles/styles';

import Home from '../components/Home';

import { toggleColor } from '../../actions/colors';

const Container = ({ dispatch, colors }) => (
  <View style={AppStyles.container}>
    <Home
      onPress={() => dispatch(toggleColor())}
      color={colors.color}
    />
  </View>
);

Container.propTypes = {
  dispatch: PropTypes.func.isRequired,
  colors: PropTypes.shape({ color: PropTypes.string.isRequired }).isRequired,
};

const select = state => state;
export default connect(select)(Container);
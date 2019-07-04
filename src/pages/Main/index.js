import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OrdersActions from 'store/ducks/orders';

import { Container } from './styles';


class Main extends Component {
  static propTypes = {
    loadOrdersRequest: PropTypes.func.isRequired,
    orders: PropTypes.shape({
    }).isRequired,
  }

  componentDidMount() {
    const { loadOrdersRequest } = this.props;
    loadOrdersRequest();
  }

  render() {
    const { orders } = this.props;
    return (
      <Container>
        {JSON.stringify(orders)}
      </Container>
    );
  }
}

const mapStateToProps = ({ orders }) => ({
  orders,
});

const mapDispatchToProps = dispatch => bindActionCreators(OrdersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);

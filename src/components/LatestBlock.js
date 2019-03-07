import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from './Spinner';
import LatestBlockItem from './LatestBlockItem';
import { getLatestBlock } from '../actions/blockActions';

class LatestBlock extends Component {
  componentDidMount() {
    this.props.getLatestBlock();
  }

  render() {
    const { info, isLoading, err } = this.props;
    let len = Object.keys(info).length;
    let content = null;
    if (len) {
      content = (
        <div>
          <LatestBlockItem data={info} />
        </div>
      );
    }
    if (!len && isLoading) {
      content = <Spinner />;
    }
    return (
      <div>
        {err ? (
          <h4 className="text-center">Network Error</h4>
        ) : (
          <div>{content}</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    info: state.block.latest_block.info,
    isLoading: state.block.latest_block.isLoading,
    err: state.block.latest_block.err
  };
};

export default connect(mapStateToProps, { getLatestBlock })(LatestBlock);

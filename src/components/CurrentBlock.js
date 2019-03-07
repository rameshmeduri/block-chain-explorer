import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from './Spinner';
import CurrentBlockItem from './CurrentBlockItem';
import Transactions from './Transactions';
import { getCurrentBlock } from '../actions/blockActions';

class CurrentBlock extends Component {
  state = {
    blockId: '0000000000000bae09a7a393a8acded75aa67e46cb81f7acaa5ad94f9eacd103'
  };

  onSubmit = (e) => {
    e.preventDefault();
    let id = this.state.blockId;
    if (id) {
      this.props.getCurrentBlock(id);
    }
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { info, tx, isLoading, err } = this.props;

    let len = Object.keys(info).length;
    let content = null;
    if (len) {
      content = (
        <div>
          <CurrentBlockItem data={info} />
          <Transactions data={tx} />
        </div>
      );
    }
    if (!len && isLoading) {
      content = <Spinner />;
    }
    return (
      <div>
        <div className="card card-body mb-4 p-4">
          <h4 className="text-center">Search Block</h4>
          <form onSubmit={this.onSubmit}>
            <div className="row">
              <div className="col-2" />
              <div className="col-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Block Id"
                    name="blockId"
                    value={this.state.blockId}
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div className="col-4">
                <button type="submit" className="btn btn-secondary btn-sm">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>

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
    info: state.block.curr_block.info,
    tx: state.block.curr_block.tx,
    isLoading: state.block.curr_block.isLoading,
    err: state.block.curr_block.err
  };
};

export default connect(mapStateToProps, { getCurrentBlock })(CurrentBlock);

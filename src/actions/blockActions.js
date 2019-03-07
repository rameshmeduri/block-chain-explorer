import axios from 'axios';
import {
  SET_CURRENT_BLOCK_LOADING,
  SET_CURRENT_BLOCK_ITEM,
  GET_CURRENT_BLOCK_ERROR,
  SET_LATEST_BLOCK_LOADING,
  SET_LATEST_BLOCK_ITEM,
  GET_LATEST_BLOCK_ERROR
} from './types';

const CURR_BLOCK_API =
  'https://cors-anywhere.herokuapp.com/https://blockchain.info/rawblock';
const LATEST_BLOCK_API =
  'https://cors-anywhere.herokuapp.com/https://blockchain.info/latestblock';

const getCurrentBlock = (id) => (dispatch) => {
  dispatch({ type: SET_CURRENT_BLOCK_LOADING, payload: true });
  axios
    .get(`${CURR_BLOCK_API}/${id}`)
    .then((res) => {
      let o = res.data;
      let info = {
        hash: o.hash,
        ver: o.ver,
        prev_block: o.prev_block,
        next_block: o.next_block[0],
        mrkl_root: o.mrkl_root,
        time: o.time,
        bits: o.bits,
        fee: o.fee,
        nonce: o.nonce,
        n_tx: o.n_tx,
        size: o.size,
        block_index: o.block_index,
        main_chain: o.main_chain,
        height: o.height,
        received_time: o.received_time,
        relayed_by: o.relayed_by
      };

      dispatch({ type: SET_CURRENT_BLOCK_ITEM, payload: { info, tx: o.tx } });
    })
    .catch((err) => {
      dispatch({ type: GET_CURRENT_BLOCK_ERROR, payload: err });
    });
};

const getLatestBlock = () => (dispatch) => {
  dispatch({ type: SET_LATEST_BLOCK_LOADING, payload: true });
  axios
    .get(`${LATEST_BLOCK_API}`)
    .then((res) => {
      let o = res.data;
      let info = {
        hash: o.hash,
        time: o.time,
        block_index: o.block_index,
        height: o.height,
        txIndexes: o.txIndexes.length
      };

      dispatch({ type: SET_LATEST_BLOCK_ITEM, payload: { info, tx: o.tx } });
    })
    .catch((err) => {
      dispatch({ type: GET_LATEST_BLOCK_ERROR, payload: err });
    });
};

export { getCurrentBlock, getLatestBlock };

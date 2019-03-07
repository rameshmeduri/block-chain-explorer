import {
  SET_CURRENT_BLOCK_LOADING,
  SET_CURRENT_BLOCK_ITEM,
  GET_CURRENT_BLOCK_ERROR,
  SET_LATEST_BLOCK_LOADING,
  SET_LATEST_BLOCK_ITEM,
  GET_LATEST_BLOCK_ERROR
} from '../actions/types';

const initialState = {
  curr_block: { info: {}, tx: [], isLoading: false, err: null },
  latest_block: { info: {}, isLoading: false, err: null }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_BLOCK_LOADING: {
      let blk = {
        ...state.curr_block,
        isLoading: true
      };
      return {
        ...state,
        curr_block: blk
      };
    }

    case SET_CURRENT_BLOCK_ITEM: {
      let blk = {
        isLoading: false,
        info: action.payload.info,
        tx: action.payload.tx
      };
      return {
        ...state,
        curr_block: blk
      };
    }

    case GET_CURRENT_BLOCK_ERROR: {
      let blk = {
        ...state.curr_block,
        err: action.payload
      };
      return {
        ...state,
        curr_block: blk
      };
    }

    case SET_LATEST_BLOCK_LOADING: {
      let blk = {
        ...state.latest_block,
        isLoading: true
      };
      return {
        ...state,
        latest_block: blk
      };
    }

    case SET_LATEST_BLOCK_ITEM: {
      let blk = {
        isLoading: false,
        info: action.payload.info
      };
      return {
        ...state,
        latest_block: blk
      };
    }

    case GET_LATEST_BLOCK_ERROR: {
      let blk = {
        ...state.latest_block,
        err: action.payload
      };
      return {
        ...state,
        latest_block: blk
      };
    }

    default:
      return state;
  }
}

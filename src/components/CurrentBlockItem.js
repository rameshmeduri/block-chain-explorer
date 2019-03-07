import React from 'react';

//hash ver prev_block next_block mrkl_root time bits fee nonce n_tx size block_index main_chain height received_time relayed_by

const CurrentBlockItem = (props) => {
  const {
    hash,
    ver,
    prev_block,
    next_block,
    mrkl_root,
    main_chain,
    height
  } = props.data;
  return (
    <div className="card card-body mb-4 p-4">
      <h4 className="text-center">Block Info</h4>
      <table className="table table-bordered table-sm table-hover">
        <tbody>
          <tr>
            <th>hash</th>
            <td>{hash}</td>
          </tr>
          <tr>
            <th>ver</th>
            <td>{ver}</td>
          </tr>
          <tr>
            <th>prev_block</th>
            <td>{prev_block}</td>
          </tr>
          <tr>
            <th>next_block</th>
            <td>{next_block}</td>
          </tr>
          <tr>
            <th>mrkl_root</th>
            <td>{mrkl_root}</td>
          </tr>
          <tr>
            <th>main_chain</th>
            <td>{main_chain}</td>
          </tr>
          <tr>
            <th>height</th>
            <td>{height}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CurrentBlockItem;

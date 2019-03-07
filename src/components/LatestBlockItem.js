import React from 'react';

const LatestBlockItem = (props) => {
  const { hash, time, block_index, height, txIndexes } = props.data;
  return (
    <div className="card card-body mb-4 p-4">
      <h4 className="text-center">Latest Block Info</h4>
      <table className="table table-bordered table-sm table-hover">
        <tbody>
          <tr>
            <th>hash</th>
            <td>{hash}</td>
          </tr>
          <tr>
            <th>time</th>
            <td>{time}</td>
          </tr>
          <tr>
            <th>block_index</th>
            <td>{block_index}</td>
          </tr>
          <tr>
            <th>height</th>
            <td>{height}</td>
          </tr>
          <tr>
            <th>txIndexes</th>
            <td>{txIndexes}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LatestBlockItem;

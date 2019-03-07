import React from 'react';

//"lock_time ver size inputs weight time tx_index vin_sz hash vout_sz relayed_by out"

const Transactions = (props) => {
  const arr = props.data;
  return (
    <div className="card card-body mb-4">
      <h4 className="text-center">Block Transactions</h4>
      <table className="table table-bordered table-sm table-hover blockchain-table">
        <thead>
          <tr>
            <th>hash</th>
            <th>ver</th>
            <th>size</th>
            <th>weight</th>
            <th>time</th>
            <th>tx_index</th>
            <th>vin_sz</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((obj, i) => {
            let { hash, ver, size, weight, time, tx_index, vin_sz } = obj;
            return (
              <tr key={i}>
                <td>{hash}</td>
                <td>{ver}</td>
                <td>{size}</td>
                <td>{weight}</td>
                <td>{time}</td>
                <td>{tx_index}</td>
                <td>{vin_sz}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;

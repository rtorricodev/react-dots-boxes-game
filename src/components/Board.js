import React, { Component } from 'react';


class Board extends Component {
    render() {
        return (
            <div>
                <h1 id="board-size">4x4</h1>
                <table>
                    <tr>
                        <th><input type="checkbox"/></th>
                        <th><input type="checkbox"/></th>
                        <th><input type="checkbox"/></th>
                        <th><input type="checkbox"/></th>
                    </tr>
                    <tr>
                        <th><input type="checkbox"/></th>
                        <th><input type="checkbox"/></th>
                        <th><input type="checkbox"/></th>
                        <th><input type="checkbox"/></th>
                    </tr>
                    <tr>
                        <th><input type="checkbox"/></th>
                        <th><input type="checkbox"/></th>
                        <th><input type="checkbox"/></th>
                        <th><input type="checkbox"/></th>
                    </tr>
                    <tr>
                        <th><input type="checkbox"/></th>
                        <th><input type="checkbox"/></th>
                        <th><input type="checkbox"/></th>
                        <th><input type="checkbox"/></th>
                    </tr>
                </table>
            </div>
        );
    }
}
  
export default Board;
  
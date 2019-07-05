import React from 'react';
import './css/OpenRoomItem.scss';
import { observer } from 'mobx-react';

// OpenRoom 한개의 목록 값 (미완성)
const OpenRoomItem = observer(
    class OpenRoomItem extends React.Component {
        render() {
            return (
            <div className="OpenRoomItem">
                <div className="OpenRoomDesc">
                    <div className="name">
                        Welcome Jacarand
                    </div>
                    <div className="tag">
                        Comming Soon OpenWorld : ~ 07.31 
                    </div>
                </div>
                <div className="OpenRoomPer">
                    <div>People</div>
                    <div>?</div>
                </div>
            </div>
            );
        }
    }
)

export default OpenRoomItem;
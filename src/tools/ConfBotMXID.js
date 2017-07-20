/**
 * Created by t3chg on 20/07/2017.
 */
import React, {Component} from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Divider from 'muicss/lib/react/divider';
import Container from 'muicss/lib/react/container';

export default class ConfBotMXID extends Component {
    constructor(props) {
        super(props);

        this.handleChangedRoomID = this.handleChangedRoomID.bind(this);
        this.handleChangedUserPrefix = this.handleChangedUserPrefix.bind(this);
        this.handleChangedDomain = this.handleChangedDomain.bind(this);
    }

    state = {
        roomId: '',
        userPrefix: 'fs_',
        domain: 'matrix.org',
    };

    getConferenceUserIdForRoom() {
        if (!this.state.roomId) return '';
        const base64RoomId = window.btoa(this.state.roomId).replace(/=/g, "");
        return "@" + this.state.userPrefix + base64RoomId + ":" + this.state.domain;
    }

    handleChangedRoomID(event) {
        console.log(1, event);
        this.setState({ roomId: event.target.value });
    }

    handleChangedUserPrefix(event) {
        console.log(2, event);
        this.setState({ userPrefix: event.target.value });
    }

    handleChangedDomain(event) {
        console.log(3, event);
        this.setState({ domain: event.target.value });
    }

    render() {
        const mxid = this.getConferenceUserIdForRoom();

        return (<Container>
            <Form>
                <legend>Conference Bot MXID Generator</legend>
                <Input label="Room ID"
                       onChange={this.handleChangedRoomID}
                       floatingLabel={true}
                       required={true}
                       name="name"
                       value={this.state.roomId} />

                <Input label="user-prefix"
                       onChange={this.handleChangedUserPrefix}
                       floatingLabel={true}
                       required={true}
                       name="user-prefix"
                       value={this.state.userPrefix} />

                <Input label="domain"
                       onChange={this.handleChangedDomain}
                       floatingLabel={true}
                       required={true}
                       name="domain"
                       value={this.state.domain} />

                <Divider />
                {
                    mxid
                    ? <p>This allows you to run the following command `<code>/ban {mxid}</code>` to disable VoIP Conferencing for a given Room.</p>
                    : <p>Enter values above to see the Conf Bot's MXID.</p>
                }

            </Form>
        </Container>);
    }
}
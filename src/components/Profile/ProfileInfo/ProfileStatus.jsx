import React from 'react';


class ProfileStatus extends React.Component {


    state = {
        editMode: false,
        status: this.props.status
    }

    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactiveEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <div>
            {
                (!this.state.editMode)
                    ? <div onDoubleClick={this.activeEditMode}><span>{this.props.status || 'No status'}</span></div>
                    : <div><input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactiveEditMode}
                                  value={this.state.status}/></div>
            }

        </div>
    }

}

export default ProfileStatus;
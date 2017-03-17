import React from 'react'
import { Table } from 'antd'
import { connect } from 'react-redux'
import { loadList } from '../actions/actions'


class List extends React.Component {
    componentDidMount() {
        const { dispatch, user } = this.props
        loadList(dispatch)(user)
    }

    render() {
        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="#">{text}</a>,
        }, {
            title: 'CreateDate',
            dataIndex: 'createDate',
            key: 'createDate',
        }, {
            title: 'versionID',
            dataIndex: 'versionID',
            key: 'versionID',
        }];
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            onSelect: (record, selected, selectedRows) => {
                console.log(record, selected, selectedRows);
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
                console.log(selected, selectedRows, changeRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User',    // Column configuration not to be checked
            }),
        };
        const {entities,entities:{result} } = this.props.list
        let dataSource = [];
        for(let key in result) dataSource.push(result[key])
        
        return (
            <div className="agz-table-list">
                <Table rowSelection={rowSelection} dataSource={dataSource}
                     rowKey="id" columns={columns} bordered={true} />
            </div>
        )
    }
}


List.propTypes = {
    list: React.PropTypes.object.isRequired,
    user: React.PropTypes.object.isRequired
}

export default connect((state) => {
    return {
        list: state.component, user: state.user
    }
})(List)
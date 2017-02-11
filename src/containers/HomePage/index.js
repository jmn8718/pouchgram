import React, { Component } from 'react';
import PouchDB from 'pouchdb';
import { fromJS, List } from 'immutable';

import DocumentsList from '../../components/DocumentsList';
import AddButton from '../../components/AddButton';
import UploadDialog from '../../components/UploadDialog';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      db: undefined,
      total_rows: 0,
      rows: new List(),
      errors: undefined,
      files: undefined,
      openAddDialog: false,
    };
  }

  componentWillMount() {
    this.setState({
      db: new PouchDB('testdb'),
    });
  }

  componentDidMount() {
    this.updateFromDb();
  }

  updateFromDb = () => {
    this.state.db.allDocs({include_docs: true, descending: true, attachments: true, binary:true}, (errors, docs) => {
      console.log(errors)
      console.log(docs)
      if (errors) {
        this.setState({ errors });
      }
      this.setState({
        total_rows: docs.total_rows,
        rows: fromJS(docs.rows.map((row) => {
          if (row.doc._attachments) {
            const newRow = Object.assign({}, row, { file: URL.createObjectURL(row.doc._attachments.file.data)})
            console.log(newRow)
            return newRow
          }
          return row
        })),
      });
    });
  }

  addFile = (event, files) => {
    this.setState({ files: event.target.files });
  }

  onAddButtonClick = () => {
    this.setState({ openAddDialog: true });
  }

  onClickUpload = () => {
    const file = this.state.files[0];
    const todoWithAt = {
      _id: new Date().toISOString(),
      title: file.name,
      _attachments: {
        file: {
          content_type: file.type,
          data: file
        }
      }
    }
    this.state.db.put(todoWithAt)
      .then((doc) => {
        console.log(doc);
        this.updateFromDb();
        this.onClickCancel();
        // TODO add scroll to top
      })
      .catch((error) => {
        console.error(error);
        this.onClickCancel();
      });
  }

  onClickCancel = () => {
    this.setState({
      openAddDialog: false,
      files: undefined,
    });
  }

  render() {
    return (
      <div>
        <DocumentsList data={this.state.rows} />
        <AddButton onClick={this.onAddButtonClick} />
        <UploadDialog openDialog={this.state.openAddDialog} onClickCancel={this.onClickCancel} onClickUpload={this.onClickUpload}>
          {/* TODO add preview and message*/}
          <input onChange={this.addFile} type="file" />
        </UploadDialog>
      </div>
    );
  }
}

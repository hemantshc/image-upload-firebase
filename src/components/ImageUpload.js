import React, { Component } from 'react';
import {storage} from '../firebase'

export default class ImageUpload extends Component {
    constructor(props){
        super(props);
        this.state = { 
            image : null,
            url:'',
            progress: 0
        }
        this.handlerChange = this
        .handlerChange
        .bind(this);
        this.handleUpload = this.handleUpload
        .bind(this);
    }

    handlerChange = e =>{
        if(e.target.files[0]){
            const image = e.target.files[0];
            this.setState(() =>( {image}));

        }
    }

    handleUpload = () => {
        const {image} = this.state;
       const uploadTask = storage.ref(`images/${image.name}`).put(image);
       uploadTask.on('state_changed', 
       (snapshot) => {
            //Progress function....
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100);
            this.setState({progress});

       }, (error) => {
           //error function...
            console.log(error);
       }, () => {
           //complete function...
           storage.ref('images').child(image.name).getDownloadURL()
           .then(url => {
                console.log(url);
                this.setState({url});
            })

       });
    }

  render() {
      const style = {
          height:'100vh',
          display:'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
          
      }
    return (
      <div style={style}>
        <progress value={this.state.progress} max='100' />
        <br/>
        <input type="file" onChange={this.handlerChange} />
        <button onClick={this.handleUpload} >Upload</button>
        <br/>
        <img style={{width:400,height:300}} src={this.state.url || 'https://via.placeholder.com/400X300'} 
        alt="Uploaded images" />
      </div>
    )
  }
}

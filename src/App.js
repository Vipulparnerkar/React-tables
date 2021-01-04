

import { Component } from 'react';
import ReactTable from 'react-table-6'
 import "react-table-6/react-table.css";

class App extends Component {
  constructor(){
    super();

    this.state={
      posts:[],
    }
    
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/posts",{
      method:"GET",  
    }).then(rs => rs.json()).then(posts =>{
      this.setState({posts:posts})
     
    })
  }
  onClick = (e)=>{
    console.log(e.target.getAttribute('data-item'));

  }
  

  render(){
    const onRowClick = (state,rowInfo,column,instance)=>{
      return{
        onClick: e =>{
          alert(rowInfo.original.title);
          
        }
      }
    
    }
    const columns = [
      {
        Header:"UserID",
        accessor:"userId"
      },
      {
        Header:"ID",
        accessor:"id"
      },
      {
        Header:"Title",
        accessor:"title"
      },
      {
        Header:"Content",
        accessor:"body"
      },
      
    ]
    
    return (
       <div className="App">
         {/* <table>
           <thead>
             <tr>
               <th>ID</th>
               <th>Title</th>

              

             </tr>
           </thead>
       <tbody>{
            
           this.state.posts.map((data,index )=>(
              <tr onClick={this.onClick} data-item={data.id}style={{backgroundColor:"red"} }>
              <td >{data.id}</td>
               <td>{data.title}</td>
             </tr>
            ))
            
          }
          

          </tbody> 

        </table> */}
        

        <ReactTable columns={columns} data={this.state.posts} getTdProps={onRowClick}>
          
          </ReactTable>        
       
      </div>
    );

  }
 
}

export default App;

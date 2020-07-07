import React from 'react';
import Item from '../Item/Item'
import './ItemList.css'

class ItemsList extends React.Component {
    constructor(props){
        super(props);
        this.state = { items: this.props.data.items,objItems:this.props.data.objItems};
                 
        this.filterList = this.filterList.bind(this);
    }
    // фильтрация списка
    filterList(e){
        var filteredList = this.props.data.items.filter(function(item){
            return item.toLowerCase().search(e.target.value.toLowerCase())!== -1;
        });
        // обновление состояния
      
        
      
        this.setState({items: filteredList});

        if(this.state.items.length < 5){
            this.setState({objItems:"demo"})
        }
        else{
            this.setState({objItems:"newdemo"})
        }
       
    }

    
     
    render() {
     

       
        return(
            <div>         
                <h2>{this.props.data.title}</h2>
                <input placeholder="Поиск" onChange={this.filterList} />
                <ul className={this.state.objItems}>
                    {
                        this.state.items.map(function(item){
                            return <Item  name={item} />
                        })
                    }
                </ul>
            </div>);
    }
  }

  export default ItemsList
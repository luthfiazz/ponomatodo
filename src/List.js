import React, {Component} from "react";


class List extends Component{
    constructor(){
        super();
        this.state = {
            id:"",
            task:"",
            items:[]
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    


onChange = event =>{
this.setState({task: event.target.value});
}

onSubmit=event=>{
    event.preventDefault();
    this.setState({
        task:"",
    items: [...this.state.items, this.state.task]
    });
};
onEdit = (val,event) =>{
    event.preventDefault();

    var data = [...this.state.items];
    data.filter(function(items, index){
        if(index === val){
            data.splice(index, 1);
        }
        return true;
    });
    this.setState({items:[...data]});
};

onDelete = (val,event) =>{
    event.preventDefault();

    var data = [...this.state.items];
    data.filter(function(items, index){
        if(index === val){
            data.splice(index, 1);
        }
        return true;
    });
    this.setState({items:[...data]});
};

    render () {
        return (<div>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <input
                    type="text"
                    className="form-control"
                    id="aktivitas"
                    placeholder="masukkan Aktifitas"
                    value={this.state.task}
                    onChange={this.onChange.bind(this)}
                    />
                </div>
                <button type="submit" 
                className="btn btn-outline-primary btn-block"
                onClick={this.onSubmit.bind(this)}>
                    Tambah
                </button>
            </form>
            <table className="table mt-3">
                    <tr>
                        <th className="text-left">Aktifitas</th>
                        <th className="text-right">Action</th>
                    </tr>
                    {this.state.items.map((item,index)=>(
                    <tr>
                        <td key={index} className="text-left">
                        {item}
                        </td>
                        <td className="text-right">
                        <button 
                        href=""
                        className="btn btn-outline-danger btn-sm"
                        onClick={this.onDelete.bind(this,index)}
                        >
                            Hapus
                        </button>
                        <button 
                        href=""
                        className="btn btn-outline-success btn-sm mx-2"
                        onClick={this.onEdit.bind(this,index)}
                        >
                            Ubah
                        </button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
        );
    }
}
    




export default List;
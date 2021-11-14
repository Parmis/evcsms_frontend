import react, {Component} from "react";

import axios from "axios";

class Stations extends Component{

    state = {
        stations: [],
        loading: true,
    }
    async componentDidMount(){
        const res= await axios.get("http://127.0.0.1:8000/api/station")

        console.log(res.data);

        if(res.data.status === 200){
            this.setState({
                stations: res.data.stations,
                loading:false,
            })
        }
    }

    render(){

        var stations_html_table = "";
        if(this.state.loading){
            stations_html_table = <tr><td colspan="5">Loading...</td></tr>
        }else{
            stations_html_table = this.state.stations.map((item)=>{
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{(item.company_id>0)? item.company.name: 'No Company'}</td>
                        <td>{item.longitude}</td>
                        <td>{item.latitude}</td>
                    </tr>
                );
            });
        }
       
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h3>Stations:</h3>
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Company Name</th>
                                            <th>Longitude</th>
                                            <th>Latitude</th>
                                        </tr>
                                        {stations_html_table}
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Stations;
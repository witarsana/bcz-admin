import React,{Component,useState} from 'react'
// component
import TableAction from './TableAction';

class Table extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          setting: this.props.setting,
          data: this.props.data,
          dataManipulate : [],
          dataFilter :[],
          view: this.props.viewact,
          edit: this.props.editact,
          delete: this.props.deleteact,
          showRows : 5,
          search : '',
          totalData : 0,
          totalPage : 0,
          curentPage : 1,
          start : 1,
          until : 1,
        };
    }

        
    componentWillMount() {       
        this.processDataShow();
    }

    componentDidUpdate(prevProps){
        if(prevProps.data !== this.props.data) {
            this.processDataShow();
            this.setState({dataFilter: this.props.data});
        }  
    }

    processDataShow =()=>{
        //get total data
        
        this.state.dataFilter = this.props.data;
        
        this.state.totalData = this.state.dataFilter.length;
        //get total page
        this.state.totalPage= Math.ceil(this.state.dataFilter.length/this.state.showRows);
        this.state.curentPage = 1;
        this.showDataByPage(1,this.state.dataFilter);
    }

    showDataByPage = (curentPage,dataProcess) => {
        this.state.start = (curentPage -1) * this.state.showRows;
        this.state.until = this.state.start + (this.state.showRows-1);
        if (this.state.until>(this.state.totalData-1)){
            this.state.until = this.state.totalData-1;
        }

        this.state.dataManipulate = [];
        this.state.dataManipulate = dataProcess.filter((dt,idx)=> idx>=this.state.start  && idx<=this.state.until);
        this.forceUpdate();
    }

    nextClick = ()=>{
        let page = this.state.curentPage +1;
        if (page>this.state.totalPage){
            page = this.state.totalPage;
        }   
        this.state.curentPage = page;
        this.showDataByPage(this.state.curentPage,this.state.dataFilter);
    }

    backClick = ()=>{
        let page = this.state.curentPage -1;
        if (page<1){
            page = 1;
        }   
        this.state.curentPage = page;
        this.showDataByPage(this.state.curentPage,this.state.dataFilter);
    }

    updateSearch = (e) =>{
        this.state.search = e.target.value;
        this.searchAction();
    }

    searchAction = ()=>{
        this.state.dataFilter = this.props.data.filter(dt=> 
            dt.username.toLowerCase().indexOf(this.state.search.toLowerCase())!== -1 
            || dt.firstname.toLowerCase().indexOf(this.state.search.toLowerCase())!== -1 
            || dt.lastname.toLowerCase().indexOf(this.state.search.toLowerCase())!== -1 
        )
        this.state.totalData = this.state.dataFilter.length;
        //get total page
        this.state.totalPage= Math.ceil(this.state.dataFilter.length/this.state.showRows);
        this.showDataByPage(1,this.state.dataFilter);
    }

    
    render(){
        return (
            <div className="w-full overflow-x-auto"> 
            <span className="filter-table flex justify-center sm:justify-center md:justify-end xl:justify-end items-center mt-2">
                <input onChange={this.updateSearch} placeholder="Type something..." className="border shadow-inner text-gray-700 text-sm rounded-tl focus:outline-none rounded-bl px-2 py-2 w-56 h-8 " />
                <button onClick={this.searchAction} className="h-8 btn-search flex shadow-inner text-gray-300 w-10 rounded-tr focus:outline-none rounded-br bg-blue-500">
                    <svg className="fill-current m-auto" width="20" height="20" viewBox="0 0 24 24">
                        <g fill="">
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                        </g>
                    </svg>
                </button>
            </span>
            <table className="text-gray-700 mt-2 shadow-inner  w-full border border-gray-200 text-sm border-collapse rounded ">
                <thead>
                  <tr>
                    <th className="py-4 font-semibold px-2 md:px-6 xl:px-6 bg-gray-100 border-b border-t border-gray-200">#</th>
                    {
                        this.state.setting.map((set,id) => (
                            <th key={id} className="py-4 font-semibold px-2 md:px-6 xl:px-6 bg-gray-100 border-b border-t border-gray-200">{set.title}</th>
                        ))
                    }
                    <th className="py-4 font-semibold px-2 md:px-6 xl:px-6 bg-gray-100 border-b border-t border-gray-200">Action</th> 
                  </tr>
                </thead>
                <tbody>
                    {
                        this.state.dataManipulate.length>0? (
                            this.state.dataManipulate.map((dm,idx) =>(
                                
                                <tr key={idx}>
                                    <td className="text-center font-bold px-6 py-4 border-b border-gray-200">{idx+1}</td>
                                    {
                                        this.state.setting.map((st,ids)=>(
                                            <td key={ids} className="text-center px-6 py-4 border-b border-gray-200">{dm[st.field]}</td>
                                        ))
                                    }
                                    
                                    <td className="text-center px-6 py-4 border-b border-gray-200 flex justify-center">
                                    <TableAction id={dm.id} viewAct={this.state.view} editAct={this.state.edit} deleteAct = {this.state.delete} />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td className="text-center px-6 py-4 border-b border-gray-200" colSpan={this.state.setting.length+2}><center>Data Not Available</center></td>
                            </tr>
                        )
                    }
                    
                    
                </tbody>
            </table>
            <span className="page-indicator mt-2 flex justify-between items-center font-bold text-xs text-gray-700">
                <p>{this.state.start + 1} - {this.state.until+ 1 } from {this.state.totalData}</p>
                <span className="page-navigation flex">
                    <a  onClick={this.backClick} className={this.state.curentPage===1 || this.state.dataManipulate.length==0? 'text-gray-200' : 'cursor-pointer'}>
                        <svg className="fill-current"  width="30" height="30" viewBox="0 0 48 48"><title>Prev Page</title>
                            <g fill="">
                                <path d="M30.83 14.83L28 12 16 24l12 12 2.83-2.83L21.66 24z"></path>
                            </g>
                        </svg>
                    </a>
                    <a onClick={this.nextClick} className={this.state.curentPage>=this.state.totalPage? 'text-gray-200':'cursor-pointer'}>
                    <svg className="fill-current" width="30" height="30" viewBox="0 0 48 48"><title>Next Page</title>
                        <g fill="">
                            <path d="M20 12l-2.83 2.83L26.34 24l-9.17 9.17L20 36l12-12z"></path>
                        </g>
                    </svg>
                    </a>
                </span>
            </span>       
        </div>
        )
    }
}

export default Table;

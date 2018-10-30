
const initState ={
    projects:[
        {id:'1',title:'Help me', content:'Hello'},
        {id:'2',title:'Help me', content:'Hello1'},
        {id:'3',title:'Help me', content:'Hello2'}
    ]
};


const projectReducer = (state = initState, action) =>{
    switch(action.type){
        case "CREATE_PROJECT":
        console.log('project Created')
    }    
    return state;
}

export default projectReducer;
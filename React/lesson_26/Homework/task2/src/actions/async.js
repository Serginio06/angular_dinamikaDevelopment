export const asyncGetTasks = () => dispatch=> {

    setTimeout (()=> {


        fetch('data.json').then(resp=>resp.json()).then(resp=>{

            dispatch({
                type:"GET-TASKS-SUCCESS",
                payload:resp
            })

        });

    }, 2000)
};



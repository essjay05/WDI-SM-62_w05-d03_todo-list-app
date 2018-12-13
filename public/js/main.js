function showFullList() {
    axios.get('/api/todolist')
        .then(res => {
            let list = res.data.toDoList;
            console.log(res.data.toDoList);
            let output = $('#completeList');
            console.log(output);
            output.html('');
            list.forEach( i => {
                output.append(`
                <div class="row">
            
                    <div class="liItem">
                        <li class="col">${i.listItem}</li>
                    </div>
                    
                    <!-- TO-DO-LIST BUTTONS: TOGGLE & DELETE -->
                    <!-- COMPLETE/INCOMPLETE BUTTON -->
                        <button type="button" class="btn-light btn-primary col" data-toggle="button" aria-pressed="false" autocomplete="off">
                                ${i.complete}
                        </button>
                        
                    <!-- DELETE BUTTON -->
                    <button type="button" class="btn-dark btn-primary col" data-toggle="button" aria-pressed="false" autocomplete="off">
                            x DELETE
                    </button>
                </div>
                `)
            })
        })
};
showFullList();
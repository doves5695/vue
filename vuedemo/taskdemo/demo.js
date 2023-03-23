var list = [{
    title : '吃饭',
    checked : false
},{
    title : '喝水',
    checked : false
}]
// var list =[];
new Vue ({
    el : '.main',
    data : {
        list : list,
        todo : '',
        editingTodo : '',
        deforeTodp:''
    },
    computed : {
        getChecked : function () {
            return list.filter(function (todo){return !todo.checked}).length;
        }
    },
    methods : {
        addTodo : function () {
            // console.log(value);
            this.list.push({
                title: this.todo,
                checked : false
            })
            this.todo = '';
        },
        deleteTodo : function (todo) {
            var index = this.list.indexOf(todo);
            // console.log(index);
            this.list.splice(index,1);
        },
        editTodo : function (todo) {
            // console.log(todo);
            this.editingTodo = todo;
            this.beforeTodo = todo.title;
        },
        editedTodo : function () {
            this.editingTodo = ''
        },
        cancelTodo : function () {
            todo.title = this.beforeTodo;
            this.beforeTodo = '';
            this.editingTodo = '';
        }
    },
    directives : {
        focus : {
            update(el,binding) {
                // console.log(11);
                if(binding.value) {
                    el.focus();
                }
            }
        }
    }
})
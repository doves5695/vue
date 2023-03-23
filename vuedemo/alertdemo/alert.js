Vue.component('modal',{
    template : `
    <div class="modal">
        <div class="modal-header">
            <h4>{{title}}</h4>
        </div>
        <div class="modal-content">
            <slot name='content'>
                <div>这是弹窗的内容</div>
            </slot>
        </div>
        <div class="modal-footer">
            <slot name='footer'>
                <input type="button" value="确定" class="btn blue" @click="Okhandle"> 
                <input type="button" value="取消" class="btn" @click="canclehandle">
            </slot>
        </div>
    </div>`,
    props : {
        title : {
            type : String,
            default : '这是默认值'
        }
    },
    methods : {
        Okhandle : function () {
            this.$emit('ok');
        },
        canclehandle : function () {
            this.$emit('cancle');
        }
    }

})

new Vue ({
    el : '#app',
    methods : {
        parentOk : function () {
            alert('成功');
        },
        parentCancle : function () {
            alert('失败');
        }
    }
})
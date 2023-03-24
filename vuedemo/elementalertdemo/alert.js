Vue.component('alert',{
    template : ` <div class="alert" :class="[alertClass]">
                        <slot name="iconSlot>
                            <i class="icon" :class="[iconClass]" v-if="showIcon"></i>
                        </slot>
                            <div class="content">
                                <slot name="contentSlot">
                                    <span class="message">{{title}}</span>
                                </slot>
                            </div>
                        <i class="closebtn icon-close" v-if="closeable" @click="closebtn"></i>
                 </div>`,
     props : {
        title : {
            type : String,
            default : '这是信息'
        },
        type : {
            type : String,
            default : 'info'
        },
        closeable : {
            type : Boolean,
            default : true
        },
        showIcon : {
            type : Boolean,
            default : true
        }
     },
     computed : {
        alertClass () {
            return  "alert-" + this.type;
        },
        iconClass () {
            return "icon-" + this.type;
        },
     },
     methods : {
        closebtn() {
            this.$emit("close")
        }
     }
})

new Vue ({
    el : '#app',
    methods : {
        closebtn () {
            alert('hello');
        }
    }
})



//自定义事件就是,用户vue一个实例,然后告诉用户有一个close事件,它通过点击子组件中的i(也就是button),触发子组件的closebtn,并且产生一个自定义的close事件,父组件也触发事件
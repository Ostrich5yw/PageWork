import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state=sessionStorage.getItem('state')?JSON.parse(sessionStorage.getItem('state')):{                           //全局state对象，在任意组件中都可以通过this.$store.state.stu获取该数据
  StudentBean:{
        stu_id:'',
        stu_realname:'',
        stu_name:'',
        stu_password:'',
        stu_signinyear:'',
        stu_autorization:'',
        stu_mobilephone:'',
        stu_email:'',
        college_id:'',
        class_id:'',
        school_id:'',
        appearance:''
  },
    TeacherBean:{
        tea_id:'',
        tea_realname:'',
        tea_name:'',
        tea_password:'',
        tea_autorization:'',
        tea_mobilephone:'',
        tea_email:'',
        college_id:'',
        class_id:'',
        school_id:'',
        appearance:''
    },
}
const getters={                           //实时监听state的最新状态，这里的getters可以认为是计算属性
  getStu(state){
    return state.StudentBean;                //组件中我们可以通过this.$store.getters.getStu
  },
    getTea(state){
        return state.TeacherBean;
    },
}
const mutations={
  updataStu(state, StuBean){        //定义改变state值的方法，这是唯一可以改变state值的方式
    state.StudentBean = StuBean;            //在组件中可以通过this.$store.commit("updateStu", stu)的方式调用mutations
  },
    updataTea(state, TeaBean){        //定义改变state值的方法，这是唯一可以改变state值的方式
        state.TeacherBean = TeaBean;            //在组件中可以通过this.$store.commit("updateStu", stu)的方式调用mutations
    }
}
const actions={
  asyncupdateStu(context, StuBean){             //可以异步执行mutations中的值
    context.commit('updataStu',StuBean);       //在组件中通过this.$store.dispatch('asyncupdateStu',stu)来调用actions
  },
    asyncupdateTea(context, TeaBean){             //可以异步执行mutations中的值
        context.commit('updataTea',TeaBean);       //在组件中通过this.$store.dispatch('asyncupdateStu',stu)来调用actions
    }
}
export default new Vuex.Store({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  // modules: {
  // }
  state,getters,mutations,actions
})

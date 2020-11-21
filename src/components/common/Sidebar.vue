<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            :collapse="collapse"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            router
        >
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu
                                v-if="subItem.subs"
                                :index="subItem.index"
                                :key="subItem.index"
                            >
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item
                                    v-for="(threeItem,i) in subItem.subs"
                                    :key="i"
                                    :index="threeItem.index"
                                >{{ threeItem.title }}</el-menu-item>
                            </el-submenu>
                            <el-menu-item
                                v-else
                                :index="subItem.index"
                                :key="subItem.index"
                            >{{ subItem.title }}</el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import bus from '../common/bus';
import store from "../../store";
export default {
    data() {
        return {
            collapse: false,

        };
    },
    computed: {
        onRoutes() {
            return this.$route.path.replace('/', '');
        },
        items(){            //根据登录类型，选择是教师的sidebar还是学生的sidebar
            return store.state.TeacherBean.tea_name === ''?[
                {
                    icon: 'el-icon-s-home',
                    index: 'dashboard',
                    title: '个人首页'
                },
                {
                    icon: 'el-icon-user-solid',
                    index: 'table',
                    title: '辅导员通知'
                },
                {
                    icon: 'el-icon-office-building',
                    index: 'tabs',
                    title: '校园要闻'
                },
                {
                    icon: 'el-icon-s-promotion',
                    index: '3',
                    title: '请假',
                    subs: [
                        {
                            index: 'form',
                            title: '请假单填写'
                        },
                        {
                            index: 'upload',
                            title: '销假/续假'
                        },
                        {
                            index: '3-2',
                            title: '请假历史',
                            subs: [
                                {
                                    index: 'editor',
                                    title: '富文本编辑器'
                                },
                                {
                                    index: 'markdown',
                                    title: 'markdown编辑器'
                                }
                            ]
                        }
                    ]
                },
                {
                    icon: 'el-icon-picture-outline',
                    index: 'icon',
                    title: '自定义图标'
                },
                {
                    icon: 'el-icon-pie-chart',
                    index: 'charts',
                    title: 'schart图表'
                },
                {
                    icon: 'el-icon-rank',
                    index: '6',
                    title: '拖拽组件',
                    subs: [
                        {
                            index: 'drag',
                            title: '拖拽列表'
                        },
                        {
                            index: 'dialog',
                            title: '拖拽弹框'
                        }
                    ]
                },
                {
                    icon: 'el-icon-lx-global',
                    index: 'i18n',
                    title: '国际化功能'
                },
                {
                    icon: 'el-icon-lx-warn',
                    index: '7',
                    title: '错误处理',
                    subs: [
                        {
                            index: 'permission',
                            title: '权限测试'
                        },
                        {
                            index: '404',
                            title: '404页面'
                        }
                    ]
                },
                {
                    icon: 'el-icon-lx-redpacket_fill',
                    index: '/PersonalInformation',
                    title: '个人信息'
                }
            ]:[                                                 //显示教师或者学生的sidebar
                {
                    icon: 'el-icon-s-home',
                    index: 'dashboard',
                    title: '个人首页'
                },
                {
                    icon: 'el-icon-user-solid',
                    index: 'table',
                    title: '辅导员通知'
                },
                {
                    icon: 'el-icon-office-building',
                    index: 'tabs',
                    title: '校园要闻'
                },
                {
                    icon: 'el-icon-s-promotion',
                    index: '3',
                    title: '请假',
                    subs: [
                        {
                            index: 'form',
                            title: '请假单填写'
                        },
                        {
                            index: 'upload',
                            title: '销假/续假'
                        },
                        {
                            index: '3-2',
                            title: '请假历史',
                            subs: [
                                {
                                    index: 'editor',
                                    title: '富文本编辑器'
                                },
                                {
                                    index: 'markdown',
                                    title: 'markdown编辑器'
                                }
                            ]
                        }
                    ]
                },
                {
                    icon: 'el-icon-lx-redpacket_fill',
                    index: '/PersonalInformation',
                    title: '个人信息'
                }
            ]
        }
    },
    created() {
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', msg => {
            this.collapse = msg;
            bus.$emit('collapse-content', msg);
        });
    }
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>

<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card shadow="hover" class="mgb20" style="height:252px;">
                    <div class="user-info">
                        <img src="../../assets/img/img.jpg" class="user-avator" alt />
                        <div class="user-info-cont">
                            <div class="user-info-name">{{name}}</div>
                            <div>{{role}}</div>
                        </div>
                    </div>
                    <div class="user-info-list">
                        上次登录时间：
                        <span>2019-11-01</span>
                    </div>
                    <div class="user-info-list">
                        上次登录地点：
                        <span>东莞</span>
                    </div>
                </el-card>
                <el-card shadow="hover" style="height:352px;">
                    <div slot="header" class="clearfix">
                        <span>语言详情</span>
                    </div>Vue
                    <el-progress :percentage="71.3" color="#42b983"></el-progress>JavaScript
                    <el-progress :percentage="24.1" color="#f1e05a"></el-progress>CSS
                    <el-progress :percentage="13.7"></el-progress>HTML
                    <el-progress :percentage="5.9" color="#f56c6c"></el-progress>
                </el-card>
            </el-col>
            <el-col :span="16">
                <el-row :gutter="20" class="mgb20">
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-1">
                                <i class="el-icon-lx-people grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">1234</div>
                                    <div>用户访问量</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-2">
                                <i class="el-icon-lx-notice grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">321</div>
                                    <div>系统消息</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-3">
                                <i class="el-icon-lx-goods grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">5000</div>
                                    <div>数量</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-card shadow="hover" style="height:503px;">
                    <div slot="header" class="clearfix" style="text-align:center">
                        <span>课程表</span>
                    </div>
                    <div class="body" style="width: 100%;height: 400px">
                    <table border="1px" width="90%" style="height: 300px;position: relative;left: 45px;top: 50px">
                        <tbody>
                        <tr>
                            <th colspan="2"></th>
                            <th>星期一</th>
                            <th>星期二</th>
                            <th>星期三</th>
                            <th>星期四</th>
                            <th>星期五</th>
                            <th>星期六</th>
                            <th>星期日</th>
                        </tr>
                        <tr>
                            <th rowspan="2">上午</th>
                            <td>9:00-10:30</td>
                            <td>语文</td>
                            <td>数学</td>
                            <td>历史</td>
                            <td>化学</td>
                            <td>英语</td>
                            <td>地理</td>
                            <td>政治</td>
                        </tr>
                        <tr>
                            <td>11:00-11:30</td>
                            <td>语文</td>
                            <td>数学</td>
                            <td>历史</td>
                            <td>化学</td>
                            <td>英语</td>
                            <td>地理</td>
                            <td>政治</td>
                        </tr>
                        <tr>
                            <th colspan="9">中午(11:30-14:00)</th>
                        </tr>
                        <tr>
                            <th rowspan="2">下午</th>
                            <td>14:00-16:30</td>
                            <td>语文</td>
                            <td>数学</td>
                            <td>历史</td>
                            <td>化学</td>
                            <td>英语</td>
                            <td>地理</td>
                            <td>政治</td>
                        </tr>
                        <tr>
                            <td>17:00-17:30</td>
                            <td>语文</td>
                            <td>数学</td>
                            <td>历史</td>
                            <td>化学</td>
                            <td>英语</td>
                            <td>地理</td>
                            <td>政治</td>
                        </tr>
                        <tr>
                            <th colspan="9">休息</th>
                        </tr>
                        <tr>
                            <th>晚上</th>
                            <td>19:30-21:00</td>
                            <td>语文</td>
                            <td>数学</td>
                            <td>历史</td>
                            <td>化学</td>
                            <td>英语</td>
                            <td>地理</td>
                            <td>政治</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
<!--                    <div class="user_skills"style="background-image: url('../../assets/img/blackboard.jpg')">-->
<!--                    <el-table :show-header="true" :data="tableData" style="width:100%;" border >-->
<!--                        <el-table-column prop="date" label="" width="40">-->
<!--                        </el-table-column>-->
<!--                        <el-table-column prop="time" label="节次" width="36">-->
<!--                        </el-table-column>-->
<!--                        <el-table-column prop="date1" label="星期一" style="width:10%">-->
<!--                        </el-table-column>-->
<!--                        <el-table-column prop="date2" label="星期二" style="width:10%">-->
<!--                        </el-table-column>-->
<!--                        <el-table-column prop="date3" label="星期三" style="width:10%">-->
<!--                        </el-table-column>-->
<!--                        <el-table-column prop="date4" label="星期四" style="width:10%">-->
<!--                        </el-table-column>-->
<!--                        <el-table-column prop="date5" label="星期五" style="width:10%">-->
<!--                        </el-table-column>-->
<!--                        <el-table-column prop="date5" label="星期六" style="width:10%">-->
<!--                        </el-table-column>-->
<!--                        <el-table-column prop="date5" label="星期日" style="width:10%">-->
<!--                        </el-table-column>-->
<!--                    </el-table>-->
<!--                    </div>-->
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-card shadow="hover">
                    <schart ref="bar" class="schart" canvasId="bar" :options="options"></schart>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card shadow="hover">
                    <schart ref="line" class="schart" canvasId="line" :options="options2"></schart>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Schart from 'vue-schart';
import bus from '../common/bus';
export default {
    name: 'dashboard',
    data() {
        return {
            name: localStorage.getItem('ms_username'),
            data: [
                {
                    name: '2018/09/04',
                    value: 1083
                },
                {
                    name: '2018/09/05',
                    value: 941
                },
                {
                    name: '2018/09/06',
                    value: 1139
                },
                {
                    name: '2018/09/07',
                    value: 816
                },
                {
                    name: '2018/09/08',
                    value: 327
                },
                {
                    name: '2018/09/09',
                    value: 228
                },
                {
                    name: '2018/09/10',
                    value: 1065
                }
            ],
            options: {
                type: 'bar',
                title: {
                    text: '最近一周各品类销售图'
                },
                xRorate: 25,
                labels: ['周一', '周二', '周三', '周四', '周五'],
                datasets: [
                    {
                        label: '家电',
                        data: [234, 278, 270, 190, 230]
                    },
                    {
                        label: '百货',
                        data: [164, 178, 190, 135, 160]
                    },
                    {
                        label: '食品',
                        data: [144, 198, 150, 235, 120]
                    }
                ]
            },
            options2: {
                type: 'line',
                title: {
                    text: '最近几个月各品类销售趋势图'
                },
                labels: ['6月', '7月', '8月', '9月', '10月'],
                datasets: [
                    {
                        label: '家电',
                        data: [234, 278, 270, 190, 230]
                    },
                    {
                        label: '百货',
                        data: [164, 178, 150, 135, 160]
                    },
                    {
                        label: '食品',
                        data: [74, 118, 200, 235, 90]
                    }
                ]
            }
        };
    },
    components: {
        Schart
    },
    computed: {
        role() {
            return this.name === 'admin' ? '超级管理员' : '普通用户';
        }
    },
    // created() {
    //     this.handleListener();
    //     this.changeDate();
    // },
    // activated() {
    //     this.handleListener();
    // },
    // deactivated() {
    //     window.removeEventListener('resize', this.renderChart);
    //     bus.$off('collapse', this.handleBus);
    // },
    methods: {
        changeDate() {
            const now = new Date().getTime();
            this.data.forEach((item, index) => {
                const date = new Date(now - (6 - index) * 86400000);
                item.name = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
            });
        }
        // handleListener() {
        //     bus.$on('collapse', this.handleBus);
        //     // 调用renderChart方法对图表进行重新渲染
        //     window.addEventListener('resize', this.renderChart);
        // },
        // handleBus(msg) {
        //     setTimeout(() => {
        //         this.renderChart();
        //     }, 200);
        // },
        // renderChart() {
        //     this.$refs.bar.renderChart();
        //     this.$refs.line.renderChart();
        // }
    }
};
</script>


<style scoped>
  .body{
      background: url("../../assets/img/blackboard.jpg") no-repeat 0px 0px;
      background-size: 100% 100%;
  }
    table{
        border-collapse: collapse;
        /*width: 800px;*/
        /*height: 400px;*/
        /*margin: 220px 0 0 440px;*/
        border-color: yellow;
    }
    td{
        color: aqua;
    }
    th{
        text-align: center;
        color: greenyellow;
    }
.el-row {
    margin-bottom: 20px;
}

.grid-content {
    display: flex;
    align-items: center;
    height: 100px;
}

.grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
}

.grid-num {
    font-size: 30px;
    font-weight: bold;
}

.grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
}

.grid-con-1 .grid-con-icon {
    background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
    background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
    background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
    color: rgb(242, 94, 67);
}

.user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
}

.user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
}

.user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}

.user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
}

.user-info-list span {
    margin-left: 70px;
}

.mgb20 {
    margin-bottom: 20px;
}

.todo-item {
    font-size: 14px;
}

.todo-item-del {
    text-decoration: line-through;
    color: #999;
}

.schart {
    width: 100%;
    height: 300px;
}
</style>

<template>
    <div>
      <input type="button" value="新建" class="btn btn-default addnewcfgroup" @click="addNewCfGroup">
        <div class="row-fluid form-wrapper">
          <div class="span12"><!-- 组件 -->
            <div class="row-fluid table tabletable">
              <table class="table table-hover table-cfgroups" id="table_value">
          <thead>
            <tr class="fixedHead">
              <th class="span2 sortable">
                集群名
              </th>
              <th class="span3 sortable">
                <!--<span class="line"></span>-->
                创建时间
              </th>
              <th class="span3">
                <!--<span class="line"></span>-->
                更新时间
              </th>
              <th class="span2 sortable">
                <!--<span class="line"></span>-->状态
              </th>
              <th class="span2">
                <!--<span class="line"></span>-->操作
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="first">
            <td style="display:none"></td>
            <td>
              abc
            </td>
            <td>
              2018-04-10 15:07:08
            </td>
            <td>
              2018-04-10 15:07:08
            </td>
            <td>
              待部署
            </td>
            <td>
              <!--<input type="button" class="btn btn-flat primary" value="详情" @click="cfGroupsDetail">-->
              <span><i class="icon icon-pencil" @click="showCfGroupsDetail"></i></span>
              <span><i class="icon el-icon-close" @click="removeCfItem"></i></span>
            </td>
          </tr>
            <tr class="first">
              <td style="display:none"></td>
              <td>
                abc
              </td>
              <td>
                2018-04-10 15:07:08
              </td>
              <td>
                2018-04-10 15:07:08
              </td>
              <td>
                待部署
              </td>
              <td>
                <!--<input type="button" class="btn btn-flat primary" value="详情" @click="cfGroupsDetail">-->
                <span><i class="icon icon-pencil" @click="showCfGroupsDetail"></i></span>
                <span><i class="icon el-icon-close" @click="removeCfItem"></i></span>
              </td>
            </tr>
            <tr class="first">
              <td style="display:none"></td>
              <td>
                abc
              </td>
              <td>
                2018-04-10 15:07:08
              </td>
              <td>
                2018-04-10 15:07:08
              </td>
              <td>
                待部署
              </td>
              <td>
                <!--<input type="button" class="btn btn-flat primary" value="详情" @click="cfGroupsDetail">-->
                <span><i class="icon icon-pencil" @click="showCfGroupsDetail"></i></span>
                <span><i class="icon el-icon-close" @click="removeCfItem"></i></span>
              </td>
            </tr>
            <tr class="first">
              <td style="display:none"></td>
              <td>
                abc
              </td>
              <td>
                2018-04-10 15:07:08
              </td>
              <td>
                2018-04-10 15:07:08
              </td>
              <td>
                待部署
              </td>
              <td>
                <!--<input type="button" class="btn btn-flat primary" value="详情" @click="cfGroupsDetail">-->
                <span><i class="icon icon-pencil" @click="showCfGroupsDetail"></i></span>
                <span><i class="icon el-icon-close" @click="removeCfItem"></i></span>
              </td>
            </tr>
            <tr class="first">
              <td style="display:none"></td>
              <td>
                abc
              </td>
              <td>
                2018-04-10 15:07:08
              </td>
              <td>
                2018-04-10 15:07:08
              </td>
              <td>
                待部署
              </td>
              <td>
                <!--<input type="button" class="btn btn-flat primary" value="详情" @click="cfGroupsDetail">-->
                <span><i class="icon icon-pencil" @click="showCfGroupsDetail"></i></span>
                <span><i class="icon el-icon-close" @click="removeCfItem"></i></span>
              </td>
            </tr>
            <tr class="first">
              <td style="display:none"></td>
              <td>
                abc
              </td>
              <td>
                2018-04-10 15:07:08
              </td>
              <td>
                2018-04-10 15:07:08
              </td>
              <td>
                待部署
              </td>
              <td>
                <!--<input type="button" class="btn btn-flat primary" value="详情" @click="cfGroupsDetail">-->
                <span><i class="icon icon-pencil" @click="showCfGroupsDetail"></i></span>
                <span><i class="icon el-icon-close" @click="removeCfItem"></i></span>
              </td>
            </tr>
            <tr class="first">
              <td style="display:none"></td>
              <td>
                abc
              </td>
              <td>
                2018-04-10 15:07:08
              </td>
              <td>
                2018-04-10 15:07:08
              </td>
              <td>
                待部署
              </td>
              <td>
                <!--<input type="button" class="btn btn-flat primary" value="详情" @click="cfGroupsDetail">-->
                <span><i class="icon icon-pencil" @click="showCfGroupsDetail"></i></span>
                <span><i class="icon el-icon-close" @click="removeCfItem"></i></span>
              </td>
            </tr>
            <tr class="first">
              <td style="display:none"></td>
              <td>
                abc
              </td>
              <td>
                2018-04-10 15:07:08
              </td>
              <td>
                2018-04-10 15:07:08
              </td>
              <td>
                待部署
              </td>
              <td>
                <!--<input type="button" class="btn btn-flat primary" value="详情" @click="cfGroupsDetail">-->
                <span><i class="icon icon-pencil" @click="showCfGroupsDetail"></i></span>
                <span><i class="icon el-icon-close" @click="removeCfItem"></i></span>
              </td>
            </tr>
            <tr class="first">
              <td style="display:none"></td>
              <td>
                abc
              </td>
              <td>
                2018-04-10 15:07:08
              </td>
              <td>
                2018-04-10 15:07:08
              </td>
              <td>
                待部署
              </td>
              <td>
                <!--<input type="button" class="btn btn-flat primary" value="详情" @click="cfGroupsDetail">-->
                <span><i class="icon icon-pencil" @click="showCfGroupsDetail"></i></span>
                <span><i class="icon el-icon-close" @click="removeCfItem"></i></span>
              </td>
            </tr>
            <tr class="first">
              <td style="display:none"></td>
              <td>
                abc
              </td>
              <td>
                2018-04-10 15:07:08
              </td>
              <td>
                2018-04-10 15:07:08
              </td>
              <td>
                待部署
              </td>
              <td>
                <!--<input type="button" class="btn btn-flat primary" value="详情" @click="cfGroupsDetail">-->
                <span><i class="icon icon-pencil" @click="showCfGroupsDetail"></i></span>
                <span><i class="icon el-icon-close" @click="removeCfItem"></i></span>
              </td>
            </tr>
            <tr class="first">
              <td style="display:none"></td>
              <td>
                abc
              </td>
              <td>
                2018-04-10 15:07:08
              </td>
              <td>
                2018-04-10 15:07:08
              </td>
              <td>
                待部署
              </td>
              <td>
                <!--<input type="button" class="btn btn-flat primary" value="详情" @click="cfGroupsDetail">-->
                <span><i class="icon icon-pencil" @click="showCfGroupsDetail"></i></span>
                <span><i class="icon el-icon-close" @click="removeCfItem"></i></span>
              </td>
            </tr>
          </tbody>
        </table>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'c-f_-groups',
      methods: {
        showCfGroupsDetail: function () {
          this.$router.push('/cfGroupsDetail')
        },
        removeCfItem: function () {
          var msg = '您确定删除吗？'
          if (confirm(msg) === true) {
          }
        },
        addNewCfGroup: function () {
          this.$router.push('/deploy')
        }
      }
    }
</script>

<style scoped>
  .addnewcfgroup {
    background: #56AD56;
    color:#fff;
    width:80px;
    margin: 10px 0 0 10px;
  }
  div.row-fluid.table.tabletable{
    margin-top: 10px;
    margin-left: 10px;
  }
  .table-cfgroups thead{
    /*background: #888;*/
    text-align: center;
  }
  .table-cfgroups thead tr th{
    height:20px;
    padding:4px 0;
    text-align: center;
  }
  .table-cfgroups tbody td{
    text-align: center;
  }
  .icon{
    font-size: 18px;
    padding: 0 2px;
    cursor: pointer;
  }
  .icon-pencil{
    color:#A5C4D6;
  }
  .el-icon-close{
    color:#AA2735;
  }
  .fixedHead{
  }
</style>

<template>
    <div>
      <input type="button" value="新建" class="btn btn-default">
      <div class="table-cfgroups-container">
        <table class="table table-hover table-cfgroups">
          <thead>
            <tr>
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
              <input type="button" class="btn btn-flat primary" value="详情">
              <input type="button" class="btn btn-flat danger" value="删除">
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
                <input type="button" class="btn btn-flat primary" value="详情">
                <input type="button" class="btn btn-flat danger" value="删除">
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
                <input type="button" class="btn btn-flat primary" value="详情">
                <input type="button" class="btn btn-flat danger" value="删除">
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
                <input type="button" class="btn btn-flat primary" value="详情">
                <input type="button" class="btn btn-flat danger" value="删除">
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
                <input type="button" class="btn btn-flat primary" value="详情">
                <input type="button" class="btn btn-flat danger" value="删除">
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
</template>

<script>
    export default {
      name: 'c-f_-groups'
    }
</script>

<style scoped>
  div.table-cfgroups-container{
    margin-top:20px;
    padding:0 10px 0 4px;
  }
  .table-cfgroups thead{
    background: #888;
    text-align: center;
  }
  .table-cfgroups thead tr th{
    height:20px;
    padding:4px 10px;
    text-align: center;
  }
  .table-cfgroups tbody td{
    text-align: center;
  }
</style>

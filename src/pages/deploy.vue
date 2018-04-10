<template>
  <!-- main container -->
  <div>
    <div class="container-fluid">
      <div id="pad-wrapper">

        <div class="row-fluid">
          <div class="span12">
            <div id="fuelux-wizard" class="wizard row-fluid">
              <ul class="wizard-steps">
                <li data-target="#step1" class="active">
                  <span class="step">1</span>
                  <span class="title">基础配置</span>
                </li>
                <li data-target="#step2">
                  <span class="step">2</span>
                  <span class="title">组件配置</span>
                </li>
                <li data-target="#step3">
                  <span class="step">3</span>
                  <span class="title">完成</span>
                </li>

              </ul>
            </div>
            <div class="step-content">
              <div class="step-pane active" id="step1">
                <div class="row-fluid form-wrapper">
                  <div class="container" style="margin-left: 100px;">
                    <form class="new_user_form inline-input" id="myForm"/>
                      <div class="span12 field-box">
                        <label>directorUuid:</label>
                        <input class="span4" type="text" name="add-directorUuid"/>
                      </div>

                      <div class="span12 field-box">
                        <label>CF版本:</label>
                        <input class="span4" type="text" name="add-version"/>

                      </div>

                      <div class="span12 field-box">
                        <label>集群名称:</label>
                        <input class="span4" type="text" name="add-CFName"/>

                      </div>

                      <div class="span12 field-box">
                        <label>集群域名:</label>
                        <input class="span4" type="text" name="add-CFDomain"/>

                      </div>

                      <div class="span12 field-box">
                        <label>componentDomain:</label>
                        <input class="span4" type="text" name="add-compDomain"/>

                      </div>

                      <div class="span12 field-box">
                        <label>runningtimeDomain:</label>
                        <input class="span4" type="text" name="add-runDomain"/>

                      </div>

                      <div class="span12 field-box">
                        <label>networkId:</label>
                        <input class="span4" type="text" name="add-networkId"/>

                      </div>

                    </form>


                  </div>
                </div>
              </div>
              <div class="step-pane" id="step2">
                <div class="row-fluid form-wrapper">
                  <div class="span10">
                    <!-- 组件 -->
                    <div class="row-fluid table tabletable">
                      <table class="table table-hover" id="table_value">
                        <thead>
                        <tr>
                          <th class="span4 sortable">
                            组件名称
                          </th>
                          <th class="span3 sortable">
                            <span class="line"></span>CPU核数
                          </th>

                          <th class="span3">
                            <span class="line"></span>内存
                          </th>

                          <th class="span3">
                            <span class="line"></span>networkId
                          </th>

                          <th class="span4">
                            <span class="line"></span>是否超分
                          </th>
                          <th class="span4">
                            <span class="line"></span>虚拟机数
                          </th>
                        </tr>
                        </thead>
                        <tbody>
                        <!-- row -->
                        <tr class="first">
                          <td>nats</td>
                          <td>--</td>
                          <td>--</td>
                          <td>--</td>
                          <td>--</td>
                          <td>--</td>

                        </tr>

                        <tr class="first">
                          <td>ccng</td>
                          <td>
                            <el-input-number v-model="num1" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>
                          <td>
                            <el-input-number v-model="num1" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>
                          <td>
                            <input class="span10" type="text" name="add-runDomain" placeholder="pass_Vlar"/>
                          </td>
                          <td>
                            <el-switch
                              v-model="value2"
                              active-color="#13ce66"
                              inactive-color="#ff4949">
                            </el-switch>
                          </td>
                          <td>
                            <el-input-number v-model="num1" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>

                        </tr>

                        <tr class="first">
                          <td>consul</td>
                          <td>--</td>
                          <td>--</td>
                          <td>--</td>
                          <td>--</td>
                          <td>--</td>

                        </tr>

                        <!-- row -->

                        </tbody>
                      </table>
                      <!--<hr/>
                      {{devices}}-->
                    </div>

                  </div>
                </div>
              </div>
              <div class="step-pane" id="step3">
                <div class="row-fluid form-wrapper">
                  <div class="span8">

                  </div>
                </div>
              </div>

            </div>
            <div class="wizard-actions">
              <button type="button" disabled="" class="btn-glow primary btn-prev">
                <i class="icon-chevron-left"></i> 上一步
              </button>
              <button type="button" class="btn-glow primary btn-next" data-last="Finish">
                下一步 <i class="icon-chevron-right"></i>
              </button>
              <button type="button" class="btn-glow success btn-finish" @click="submit()">
                完成
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>

</template>

<script>
  /* eslint-disable */

  export default{
    data(){
      return{
        num1: 1,
        value1: true,
        value2: true
      }
    },created(){


    },
    mounted: function(){
      this.$nextTick(function () {
        var $wizard = $('#fuelux-wizard'),
          $btnPrev = $('.wizard-actions .btn-prev'),
          $btnNext = $('.wizard-actions .btn-next'),
          $btnFinish = $(".wizard-actions .btn-finish");

        $wizard.wizard().on('finished', function(e) {
          // wizard complete code
        }).on("changed", function(e) {
          var step = $wizard.wizard("selectedItem");
          // reset states
          $btnNext.removeAttr("disabled");
          $btnPrev.removeAttr("disabled");
          $btnNext.show();
          $btnFinish.hide();

          if (step.step === 1) {
            $btnPrev.attr("disabled", "disabled");
          } else if (step.step === 3) {
            $btnNext.hide();
            $btnFinish.show();
          }
        });

        $btnPrev.on('click', function() {
          $wizard.wizard('previous');
        });
        $btnNext.on('click', function() {
          $wizard.wizard('next');
        });

      })

    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    },
    computed: {

    }

  }

</script>
<style>
.tabletable{
  height: 450px;
}
</style>

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
                  <div class="span8">

                  </div>
                </div>
              </div>
              <div class="step-pane" id="step2">
                <div class="row-fluid form-wrapper">
                  <div class="span11">


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

    },
    computed: {

    }

  }

</script>
<style>

</style>

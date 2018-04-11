<template>
    <div>
      <div class="container-fluid">
        <div id="pad-wrapper">
          <div class="row-fluid">
            <el-tabs v-model="activeName">
              <el-tab-pane label="基本配置" name="first">
                <div class="row-fluid form-wrapper">
                  <div class="container">
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
                  </div>
                  <div class="btn-action-part">
                    <input type="button" value="部署" class="btn btn-default btn-actions">
                    <input type="button" value="保存配置" class="btn btn-default btn-actions">
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="组件配置" name="second">
                <div class="row-fluid form-wrapper">
                  <div class="span12"><!-- 组件 -->
                    <div class="row-fluid table tabletable" style="margin-top: 0;">
                      <table class="table table-hover" id="table_value">
                        <thead>
                          <tr>
                            <th class="span2 sortable">
                              组件名称
                            </th>
                            <th class="span2 sortable">
                              <span class="line"></span>CPU核数
                            </th>
                            <th class="span2">
                              <span class="line"></span>内存
                            </th>
                            <th class="span2">
                              <span class="line"></span>networkId
                            </th>
                            <th class="span2">
                              <span class="line"></span>是否超分
                            </th>
                            <th class="span2">
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
                            <el-input-number v-model="num2" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
                            <el-input-number v-model="num3" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>

                        </tr>
                        <tr class="first">
                          <td>ccng</td>
                          <td>
                            <el-input-number v-model="num1" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>
                          <td>
                            <el-input-number v-model="num2" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
                            <el-input-number v-model="num3" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>

                        </tr>
                        <tr class="first">
                          <td>ccng</td>
                          <td>
                            <el-input-number v-model="num1" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>
                          <td>
                            <el-input-number v-model="num2" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
                            <el-input-number v-model="num3" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>

                        </tr>
                        <tr class="first">
                          <td>ccng</td>
                          <td>
                            <el-input-number v-model="num1" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>
                          <td>
                            <el-input-number v-model="num2" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
                            <el-input-number v-model="num3" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>

                        </tr>
                        <tr class="first">
                          <td>ccng</td>
                          <td>
                            <el-input-number v-model="num1" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>
                          <td>
                            <el-input-number v-model="num2" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
                            <el-input-number v-model="num3" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>

                        </tr>
                        <tr class="first">
                          <td>ccng</td>
                          <td>
                            <el-input-number v-model="num1" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>
                          <td>
                            <el-input-number v-model="num2" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
                            <el-input-number v-model="num3" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>

                        </tr>
                        <tr class="first">
                          <td>ccng</td>
                          <td>
                            <el-input-number v-model="num1" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>
                          <td>
                            <el-input-number v-model="num2" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
                            <el-input-number v-model="num3" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>

                        </tr>
                        <tr class="first">
                          <td>ccng</td>
                          <td>
                            <el-input-number v-model="num1" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>
                          <td>
                            <el-input-number v-model="num2" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
                            <el-input-number v-model="num3" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>

                        </tr>
                        <tr class="first">
                          <td>ccng</td>
                          <td>
                            <el-input-number v-model="num1" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>
                          <td>
                            <el-input-number v-model="num2" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
                            <el-input-number v-model="num3" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>

                        </tr>
                        <tr class="first">
                          <td>ccng</td>
                          <td>
                            <el-input-number v-model="num1" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>
                          <td>
                            <el-input-number v-model="num2" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
                            <el-input-number v-model="num3" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>

                        </tr>
                        <tr class="first">
                          <td>ccng</td>
                          <td>
                            <el-input-number v-model="num1" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>
                          <td>
                            <el-input-number v-model="num2" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
                            <el-input-number v-model="num3" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>

                        </tr>
                        <tr class="first">
                          <td>ccng</td>
                          <td>
                            <el-input-number v-model="num1" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>
                          <td>
                            <el-input-number v-model="num2" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
                            <el-input-number v-model="num3" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>

                        </tr>
                        <tr class="first">
                          <td>ccng</td>
                          <td>
                            <el-input-number v-model="num1" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>
                          <td>
                            <el-input-number v-model="num2" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
                            <el-input-number v-model="num3" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>

                        </tr>
                        <tr class="first">
                          <td>ccng</td>
                          <td>
                            <el-input-number v-model="num1" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>
                          <td>
                            <el-input-number v-model="num2" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
                            <el-input-number v-model="num3" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>

                        </tr>
                        <tr class="first">
                          <td>ccng</td>
                          <td>
                            <el-input-number v-model="num1" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>
                          <td>
                            <el-input-number v-model="num2" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
                            <el-input-number v-model="num3" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>

                        </tr>
                        <tr class="first">
                          <td>ccng</td>
                          <td>
                            <el-input-number v-model="num1" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>
                          <td>
                            <el-input-number v-model="num2" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
                            <el-input-number v-model="num3" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>

                        </tr>
                        <tr class="first">
                          <td>ccng</td>
                          <td>
                            <el-input-number v-model="num1" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>
                          <td>
                            <el-input-number v-model="num2" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
                            <el-input-number v-model="num3" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>

                        </tr>
                        <tr class="first">
                          <td>ccng</td>
                          <td>
                            <el-input-number v-model="num1" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>
                          <td>
                            <el-input-number v-model="num2" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
                            <el-input-number v-model="num3" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>

                        </tr>
                        <tr class="first">
                          <td>ccng</td>
                          <td>
                            <el-input-number v-model="num1" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>
                          <td>
                            <el-input-number v-model="num2" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
                            <el-input-number v-model="num3" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>

                        </tr>
                        <tr class="first">
                          <td>ccng</td>
                          <td>
                            <el-input-number v-model="num1" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>
                          <td>
                            <el-input-number v-model="num2" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
                            <el-input-number v-model="num3" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>

                        </tr>
                        <tr class="first">
                          <td>ccng</td>
                          <td>
                            <el-input-number v-model="num1" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>
                          <td>
                            <el-input-number v-model="num2" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
                            <el-input-number v-model="num3" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>

                        </tr>
                        <tr class="first">
                          <td>ccng</td>
                          <td>
                            <el-input-number v-model="num1" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>
                          <td>
                            <el-input-number v-model="num2" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
                            <el-input-number v-model="num3" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>

                        </tr>
                        <tr class="first">
                          <td>ccng</td>
                          <td>
                            <el-input-number v-model="num1" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>
                          <td>
                            <el-input-number v-model="num2" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
                            <el-input-number v-model="num3" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>

                        </tr>
                        <tr class="first">
                          <td>ccng</td>
                          <td>
                            <el-input-number v-model="num1" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>
                          <td>
                            <el-input-number v-model="num2" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
                            <el-input-number v-model="num3" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>

                        </tr>
                        <tr class="first">
                          <td>ccng</td>
                          <td>
                            <el-input-number v-model="num1" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>
                          <td>
                            <el-input-number v-model="num2" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
                            <el-input-number v-model="num3" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>

                        </tr>
                        <tr class="first">
                          <td>ccng</td>
                          <td>
                            <el-input-number v-model="num1" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>
                          <td>
                            <el-input-number v-model="num2" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
                            <el-input-number v-model="num3" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>

                        </tr>
                        <tr class="first">
                          <td>ccng</td>
                          <td>
                            <el-input-number v-model="num1" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>
                          <td>
                            <el-input-number v-model="num2" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
                            <el-input-number v-model="num3" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>

                        </tr>
                        <tr class="first">
                          <td>ccng</td>
                          <td>
                            <el-input-number v-model="num1" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </td>
                          <td>
                            <el-input-number v-model="num2" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
                            <el-input-number v-model="num3" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
                    <div class="btn-action-part">
                      <input type="button" value="部署" class="btn btn-default btn-actions">
                      <input type="button" value="保存配置" class="btn btn-default btn-actions">
                    </div>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="部署日志" name="third">
                <div class="row-fluid form-wrapper">
                  <div class="span12">
                    <div class="row-fluid table tabletable" style="margin-top: 0;">
                      <table class="table table-hover table_value">
                        <thead>
                          <tr>
                            <th class="span4 sortable">
                              序号
                            </th>
                          <th class="span4 sortable">
                            <span class="line"></span>
                            创建时间
                          </th>
                          <th class="span4">
                            <span class="line"></span>
                            操作
                          </th>
                        </tr>
                        </thead>
                        <tbody>
                        <!-- row -->
                        <tr class="first">
                          <td>0</td>
                          <td>--</td>
                          <td>
                            <span>
                              下载
                            </span>
                          </td>
                        </tr>
                        <tr class="first">
                          <td>1</td>
                          <td></td>
                          <td>
                            <span>
                              下载
                            </span>
                          </td>
                        </tr>
                        <tr class="first">
                          <td>2</td>
                          <td>--</td>
                          <td>
                            <span>
                              下载
                            </span>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                      <!--<hr/>
                      {{devices}}-->
                    </div>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          activeName: 'first',
          num1: 1,
          num2: 1,
          num3: 1,
          value1: true,
          value2: true
        }
      },
      methods: {
        handleChange (value) {
          console.log(value)
        }
      }
    }
</script>

<style scoped>
  .table tr td,.table th {
    text-align: center;
  }
  .btn-action-part{
    float: right;
    margin-right: 10px;
  }
  .btn-actions {
    background: #56AD56;
    color:#fff;
    margin: 10px 0 0 10px;
    font-weight: 300;
  }
  .field-box label{
    text-align: right;
    padding-right: 20px;
  }
</style>

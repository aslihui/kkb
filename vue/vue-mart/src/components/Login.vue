<template>
  <div>
    <cube-form
      :model="model"
      :schema="schema"
      :immediate-validate="false"
      :options="options"
      @validate="validateHandler"
      @submit="submitHandler"
      @reset="resetHandler">
    </cube-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        validity: {},
        valid: undefined,
        model: {
          checkboxValue: false,
          checkboxGroupValue: [],
          inputValue: '',
          radioValue: '',
          rateValue: 0,
          selectValue: 2018,
          switchValue: true,
          textareaValue: '',
          uploadValue: []
        },
        schema: {
          groups: [
            {
              legend: '登录',
              fields: [
               
                {
                  type: 'input',
                  modelKey: 'inputValue',
                  label: '用户名：',
                  props: {
                    placeholder: '请输入'
                  },
                  rules: {
                    required: true
                  },
                  // validating when blur
                  trigger: 'blur'
                },
                {
                  type: 'input',
                  modelKey: 'inputPwd',
                  label: '密码：',
                  props: {
                    placeholder: '请输入',
                    type: "password"
                  },
                  rules: {
                    required: true
                  },
                  // validating when blur
                  trigger: 'blur'
                }
               
              ]
            }
          ]
        },
        options: {
          scrollToInvalidField: true,
          layout: 'standard' // classic fresh
        }
      }
    },
    methods: {
      submitHandler(e) {
        e.preventDefault()
        console.log('submit', e)
      },
      validateHandler(result) {
        this.validity = result.validity
        this.valid = result.valid
        console.log('validity', result.validity, result.valid, result.dirty, result.firstInvalidFieldIndex)
      },
      resetHandler(e) {
        console.log('reset', e)
      }
    }
}
</script>

<style scoped>

</style>
import { Assistant, RuleDefinition, ViolationSeverity } from '@sketch-hq/sketch-assistant-types'

const errorRule: RuleDefinition = {
  rule: async (context) => {
    context.utils.report({
      message: 'Uh oh, something definitely looks wrong here',
    })
  },
  name: 'severity-levels-example/error',
  title: 'Error violation',
  description: 'Emits an error violation',
}

const warningRule: RuleDefinition = {
  rule: async (context) => {
    context.utils.report({
      message: "This isn't critical but it might need your attention",
    })
  },
  name: 'severity-levels-example/warning',
  title: 'Warning violation',
  description: 'Emits a warning violation',
}

const infoRule: RuleDefinition = {
  rule: async (context) => {
    context.utils.report({
      message: 'This message is of purely informational value, no action required',
    })
  },
  name: 'severity-levels-example/info',
  title: 'Info violation',
  description: 'Emits an info violation',
}

const assistant: Assistant = async () => {
  return {
    name: 'severity-levels-example',
    rules: [errorRule, warningRule, infoRule],
    config: {
      rules: {
        [errorRule.name]: { active: true, severity: ViolationSeverity.error },
        [warningRule.name]: { active: true, severity: ViolationSeverity.warn },
        [infoRule.name]: { active: true, severity: ViolationSeverity.info },
      },
    },
  }
}

export default assistant

import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import EntryPoint from '../EntryPoint.vue'

describe('EntryPoint', () => {
  it('renders properly', () => {
    const wrapper = mount(EntryPoint, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})

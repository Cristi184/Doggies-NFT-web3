import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SearchComponent from '../SearchComponent.vue'

describe('SearchComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(SearchComponent, { props: { msg: 'The Doggies Explorer' } })
    expect(wrapper.text()).toContain('The Doggies Explorer')
  })
})

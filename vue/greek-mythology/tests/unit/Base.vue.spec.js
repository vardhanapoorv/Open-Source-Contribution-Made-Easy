import { shallowMount } from '@vue/test-utils'
import Base from '@/components/Base.vue'
import GreekGods from '../../public/greek-gods.json'


describe('Base.vue', () => {
  it('imports gods from the JSON properly', () => {
    const wrapper = shallowMount(Base)
    expect(wrapper.vm.gods).toBe(GreekGods)
  })
})

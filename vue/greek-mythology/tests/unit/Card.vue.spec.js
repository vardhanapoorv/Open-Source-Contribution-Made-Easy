import { shallowMount } from '@vue/test-utils'
import Card from '@/components/Card.vue'

describe('Card.vue', () => {
  it('displays god.name and god.desc passed to it as props', () => {
    const god = {
      name: 'Zeus',
      desc: 'Greek god'
    }
    
    const wrapper = shallowMount(Card, {
      propsData: { god }
    })

    expect(
      wrapper.find(".card-title")
      .text()
    )
    .toMatch(god.name)

    expect(
      wrapper.find(".card-text")
      .text()
    )
    .toMatch(god.desc)
  })
})

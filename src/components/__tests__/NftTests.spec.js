import {describe, it, expect} from 'vitest'

import {mount} from '@vue/test-utils'
import SearchComponent from '../SearchComponent.vue'
import NftComponent from "@/components/NftComponent.vue";


const mockData = {
    "image_url": "https://contracts.sandbox.game/snoopdogg/1.jpg",
    "external_url": "https://www.sandbox.game/en/model-viewer/064206f2-f98c-40ce-9243-908fdbe6a353",
    "name": "Doggy #0001",
    "description": "**Doggy #0001**\n\nHigh-flying, dapper Super Snoop. 'Makes you feel the way you need to feel'.\n\n⚡️ Learn more about The Sandbox and create your account today: [https://www.sandbox.game](https://www.sandbox.game) ⚡️",
    "attributes": [
        {
            "trait_type": "Special Edition",
            "value": ""
        },
        {
            "trait_type": "Special Snoop",
            "value": ""
        },
        {
            "trait_type": "Mouth Accessory",
            "value": ""
        },
        {
            "trait_type": "Hair",
            "value": "Long in the Back"
        },
        {
            "trait_type": "Head",
            "value": "Human"
        },
        {
            "trait_type": "Left Hand Accessory",
            "value": ""
        },
        {
            "trait_type": "Eyes",
            "value": "Golden Frame Sunglasses"
        },
        {
            "trait_type": "Pants",
            "value": "Black Pants"
        },
        {
            "trait_type": "Shoes",
            "value": "Pure White Shoes"
        },
        {
            "trait_type": "Upper Body Clothing",
            "value": "T shirt Sky Blue"
        },
        {
            "trait_type": "Type",
            "value": "Human"
        },
        {
            "trait_type": "Mouth",
            "value": "Clean-shaven Calm"
        },
        {
            "trait_type": "Hat",
            "value": "Jeans Hat"
        },
        {
            "trait_type": "Body Accessory",
            "value": ""
        }
    ],
    "animation_url": "https://www.sandbox.game/model-viewer-light/?assetId=064206f2-f98c-40ce-9243-908fdbe6a353",
    "iframe_url": "https://www.sandbox.game/model-viewer-light/?assetId=064206f2-f98c-40ce-9243-908fdbe6a353",
    "owner": "0xff00D4fd6Dcd4599FEA5BEd04cd4790D10E7cccc"
}


describe('NftComponent', () => {
    it('renders an error message when there is an error', async () => {
        const wrapper = mount(NftComponent, {
            props: {
                tokenId: -1,
                error: true,
                data: {},
                contract:null,
            }
        });

        await wrapper.vm.$nextTick();
        expect(wrapper.find('h1').text()).toBe('Please choose another Token Id.');
    });
    it('show data from the contract', async () => {
        const wrapper = mount(NftComponent, {
            props: {
                tokenId: 1234,
                error: false,
                data: mockData,
                contract:null,
            }
        });

        await wrapper.vm.$nextTick();
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('#title').element.textContent).toBe('Title: Doggy #0001');
        expect(wrapper.find('#owner').element.textContent).toBe('Owner: 0xff00D4fd6Dcd4599FEA5BEd04cd4790D10E7cccc');
        expect(wrapper.find('#description').element.textContent).toBe('**Doggy #0001**\n\nHigh-flying, dapper Super Snoop. \'Makes you feel the way you need to feel\'.\n\n⚡️ Learn more about The Sandbox and create your account today: [https://www.sandbox.game](https://www.sandbox.game) ⚡️');
    })


});

describe('SearchComponent', () => {
    it('renders properly', () => {
        const wrapper = mount(SearchComponent, {props: {msg: 'The Doggies Explorer'}})
        expect(wrapper.text()).toContain('The Doggies Explorer')
    })
})

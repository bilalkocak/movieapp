import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from "./Button";

Enzyme.configure({adapter: new Adapter()});

describe('Button', () => {
    it("component renders correctly", () => {
        const wrapper = shallow(<Button text={'test'} />);

        expect(wrapper.find(".button").exists()).toBe(true);
    });

    it("backGround props run correctly", () => {
        const wrapper = shallow(<Button text={'test'} isBackgroundRed={true}/>);

        expect(wrapper.find(".redButton").exists()).toBe(true);
    });

    it("text props run correctly", () => {
        const wrapper = shallow(<Button text={'test'}/>);

        expect(wrapper.find(".button").text()).toBe("test");
    });

});

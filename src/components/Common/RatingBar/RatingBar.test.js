import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RatingBar from "./RatingBar";

Enzyme.configure({adapter: new Adapter()});

describe('RatingBar', () => {
    it("component renders correctly", () => {
        const wrapper = shallow(<RatingBar width={'50'} rate={7.8}/>);

        expect(wrapper.find(".movieRatingBar").exists()).toBe(true);
    });

    it("progress percentage correctly", () => {
        const wrapper = shallow(<RatingBar width={'50'} rate={7.8}/>);

        expect(wrapper.find(".movieRatingBar").children().prop('style').width).toBe('78%');
    })
});

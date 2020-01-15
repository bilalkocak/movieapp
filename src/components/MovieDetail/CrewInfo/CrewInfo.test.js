import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CrewInfo from "./CrewInfo";

Enzyme.configure({adapter: new Adapter()});

const actors = ['test1', "test2", "test3"];
const writers = ['test1', "test2", "test3"];
const directors = ['test1'];

describe('CrewInfo', () => {

    const wrapper = shallow(<CrewInfo writers={actors} actors={writers} directors={directors}/>);

    it("component renders correctly", () => {

        expect(wrapper.find(".movieCrew").exists()).toBe(true);
    });

    it("href value correctly ", () => {

        expect(wrapper.find(".movieCrew").children().first().find('a').last().props().href).toBe("https://www.google.com/search?q=test1");
    });

    it("item count correctly ", () => {

        expect(wrapper.find(".movieCrew").children().last().find('a').length).toBe(3)
    });

});

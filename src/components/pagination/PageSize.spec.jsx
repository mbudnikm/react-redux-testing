import React from 'react';

import { shallow } from 'enzyme'

import { PageSize } from "./PageSize";


// integracyjne
// jeśli wybrane np. size 15 to liczba elementów wyśiwtlanych w TableContainer <= 10

// unitowe
// [low] czy się wyświetliły te które przekazaliśmy
// jak kliknę dany rozmiar, to czy się zmieni
// default size, sprawdzenie klasy CSS jaki rozmiar obecnie
// callback wywoływany po kliknięciu w rozmiar inny niż aktualny
// callback nie wywołany po kliknięciu w aktualny rozmiar
// sprawdzenie 

expect.extend({
    toContainAll: (actual, expectedItems) => {

        const pass = expectedItems.every(el => actual.includes(el))
        const message = () => `Nie miało tak być... Otrzymano ${actual} A miało być ${expectedItems}`

        return { pass, message }
    }
})

describe('PageSize', () => {
    it('', () => {
        const sizes = [10, 25, 50]
        const wrapper = shallow(<PageSize availableSizes={sizes} />)

        // console.log(wrapper.debug())
        expect(wrapper.text()).toContainAll(sizes)
    });

    it('should invoke callback function when clicked', () => {
        const spy = jest.fn()
        const sizes = [10, 25, 50]
        const wrapper = shallow(<PageSize 
            availableSizes={sizes}
            onChange={spy} />)
        
        // click!

        const btn = wrapper.find('span').filterWhere(node => node.text().includes(25))
        btn.simulate('click')

        console.log(wrapper.find('span').filterWhere(node => node.text().includes(25)).debug())

        expect(spy).toHaveBeenCalledTimes(1)
        expect(spy).toHaveBeenCalledWith(25)
    });
});
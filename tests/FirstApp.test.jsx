import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


describe('Pruebas de <FirstApp/>', () => {

    // test('Debe hacer match con el snapshot', () => {
        
    //     const title = 'Hola Taradis!';
    //     const {container} = render(<FirstApp title={title}/>);
        
    //     expect(container).toMatchSnapshot();
    // });

    test('Debe mostrar el título en un h1', () => {
        const title = 'Hola Taradis!';
        const {container , getByText , getByTestId } = render(<FirstApp title={title}/>);
        expect(getByText(title)).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);
        
        expect(getByTestId('test-title').innerHTML).toContain('Hola Taradis!');
    });

    test('Debe mostrar el subtitulo enviado por props',() => {
        const title = 'Hola Taradis!';
        const subtitle = 'Como estan?'
        const { getAllByText } = render(
        <FirstApp 
            title={title}
            subtitle={subtitle}
        />);
        expect(getAllByText(subtitle).length).toBe(2);
    })
});
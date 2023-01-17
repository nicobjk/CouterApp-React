import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";


describe('Pruebas en 08-imp-exp', () => { 

    test('getHeoreById debe retornar un héroe por ID', () => { 

        const id = 1;
        const hero = getHeroeById( id );
        
        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });


    test('getHeoreById debe retornar undefined si no existe el heroe', () => { 

        const id = 100;
        const hero = getHeroeById( id );
        //console.log(hero);
        
        expect( hero ).toBeFalsy(); //sirve para evaluar si es null, undefined o false
    });

    // Tarea
    // Debe retornar un arreglo con los héroes de DC
    // Length === 3
    // toEqual al arreglo filtrado

    // Debe retornar un arreglo con los héroes de Marvel
    // Length === 2

    test('getHeroesByOwner debe retornar un arreglo con los héroes de DC' , () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        //console.log(heroes)        

        expect ( heroes.length ).toBe ( 3 );
        expect( heroes ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);
    })

    test('getHeroesByOwner debe retornar un arreglo con los héroes de Marvel' , () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        //console.log(heroes)        

        expect ( heroes.length ).toBe ( 2 );
        // la siguiente sería la forma corretcta, por si se agrega un héroe o algo cambia
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));
    })




})
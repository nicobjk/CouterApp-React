import { usContext } from "../../src/base-pruebas/06-deses-obj"; 


describe('Pruebas en 06-Desestructuracion', () => { 
    test('usContex debe retornar un objeto', () => { 
        const testUser = {
            nombreClave: 'Nico',
            anios: 31,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        };

        const user = usContext( testUser );

        console.log(user)

        expect( testUser ).toEqual( {
            nombreClave: 'Nico',
            anios: 31,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            } 
        });
    });
});



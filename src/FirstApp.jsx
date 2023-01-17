import PropTypes from 'prop-types';
// //const getResult = () => {
//     return ('Hola Taradas!!!')
// };
// Si no hay ninguna dependencia, colocar las funciones fuera del funtional component. 

//const newMessage = [1,2,3,4,5];

export const FirstApp = ( {title , subtitle , name} ) => {
    return (
        <>
            {/*para mostrar una funcion:
            <h1>{ getResult() }</h1> */}
            
            {/*para mostrar datos de un objeto es necesario el JSON.stringify.
            <code>{ JSON.stringify( newMessage ) }</code>*/} 

            <h1 data-testid="test-title"> { title } </h1>
            <p>{ subtitle }</p>
            <p>{ subtitle }</p>
            <p>{ name }</p>  
        </>
    )
}

FirstApp.propTypes = {
    subtitle: PropTypes.string,
    title: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    name: 'Nicolás Bojko',
    subtitle: 'No hay subtítulo!',
    //title: 'No hay título!',
}
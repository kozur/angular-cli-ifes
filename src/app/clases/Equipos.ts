import { Jugador } from "app/clases/Jugador";

export class Equipo {
    id = 0;
    nombreEquipo = '';
    ciudad = '';
    jugadores : Jugador[];
}

export const equipos : Equipo[] = [{
    id:1,
    nombreEquipo:'Boca Juniors',
    ciudad:'Buenos Aires',
    jugadores:[{
        nombre:'Marcos',
        apellido:'Rojo'
    },{
        nombre:'Picante',
        apellido:'Pereyra'
    }]
},{
    id:2,
    nombreEquipo:'Deportivo Roca',
    ciudad:'General Roca',
    jugadores:[{
        nombre:'Juan',
        apellido:'Perez'
    }]
},{
    id:20,
    nombreEquipo:'Belgrano',
    ciudad:'Cordoba',
    jugadores:[{
        nombre:'Jose',
        apellido:'Olave'
    }]
}]


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

import { Equipo, equipos } from '../clases/Equipos';

@Injectable()
export class EquipoService {

    delayMs = 500;

    getEquipos(): Observable<Equipo[]> {
        return of(equipos).delay(this.delayMs); // simula delay
    }
}

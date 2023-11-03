import { Injectable } from '@angular/core';
import { Libro } from './interfaces/libro';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private libros: Libro[];

  constructor() {

    this.libros = [
      {id: 1,
        titulo: "El Quijote",
        autor: "Machado",
        editorial: "Sanitas",
        fechaPublicacion: new Date("1956-12-05")
      },
      {id: 2,
        titulo: "Shin-Chan",
        autor: "Juan Carlos",
        editorial: "Almunia",
        fechaPublicacion: new Date("2022-12-25")
      },
      {id: 3,
        titulo: "El Antiguo",
        autor: "Paz",
        editorial: "BBDD",
        fechaPublicacion: new Date("1756-12-05")
      },
    ];

  }

  obtenerLibro(idLibro: number) {
    
    let libroVacio: Libro = {
      id: 0,
      titulo: "",
      autor: "",
      editorial: "",
      fechaPublicacion: new Date()
    };
    
    this.libros.forEach(libro =>{

      if(idLibro===libro.id) libroVacio = libro;

    })

    return libroVacio;

  }

}

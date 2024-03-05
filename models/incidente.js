class Reporte {
    // ...
  }
  
  class Incidente {
    static contador = 0;
  
    constructor(tipo, descripcion, impacto, medidasMitigacion, estadoResolucion) {
      this.tipo = tipo;
      this.descripcion = descripcion;
      this.impacto = impacto;
      this.medidasMitigacion = medidasMitigacion;
      this.estadoResolucion = estadoResolucion;
      this.reportes = new Array();
      this.id = -1;
    }
  
    addReporte(reporte) {
      this.reportes.push(reporte);
      Incidente.contador++;
      reporte.Id = Incidente.contador;
    }
  
    // ... Resto de los métodos
  }
  
  module.exports = { Incidente, Reporte };  
  class Informe {
      // ...
  }

  class Incidencia {
    static autoIdInforme = 0;
    static autoId = 0;
    
    constructor(tipo, descripcion, impacto, medidasMitigacion, estadoResolucion) {
      this.tipo = tipo;
      this.descripcion = descripcion;
      this.impacto = impacto;
      this.medidasMitigacion = medidasMitigacion;
      this.estadoResolucion = estadoResolucion;
      this.informes = new Array();
      this.id = Incidencia.autoId++;
    }
  
    addInforme(informe) {
      this.informes.push(informe);
      Incidencia.contador++;
      informe.id = Incidencia.autoIdInforme++;
    }
  
    // ... Resto de los métodos
  }
  
  module.exports = { Incidencia, Informe };  
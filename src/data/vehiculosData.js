import dmax from "../assets/dmax.png";
import colorado from "../assets/colorado.png";
import silverado from "../assets/silverado.png";
import trailblazer from "../assets/trailblazer.png";
import tracker from "../assets/tracker.png";
import tahoe from "../assets/tahoe.png";
import suburban from "../assets/suburban.png";
import sparkEUV from "../assets/sparkEUV.png";
import n400Pasajeros from "../assets/n400Pasajeros.png"; // Ajustado con guion
import n400 from "../assets/n400.png";
import groove from "../assets/groove.png";
import captivaHibrida from "../assets/captivaHibrida.png";
import captivaEV from "../assets/captivaEV.png";
import captiva from "../assets/captiva.png";

const vehiculosData = {

    Camionetas: [

        {
 id:1,

 nombre:"Chevrolet D-Max",

 imagen:dmax,

 descripcion:
 "Potencia, resistencia y tecnología para superar cualquier camino.",


 precio:"Desde $32.990",


 motor:"3.0 Turbo Diesel",

 potencia:"188 HP",

 transmision:
 "Automática de 6 velocidades",


 combustible:"Diésel",


 traccion:"4x4",


 seguridad:[
   "6 airbags",
   "Control electrónico de estabilidad",
   "Frenos ABS"
 ],


 equipamiento:[
   "Pantalla multimedia",
   "Apple CarPlay",
   "Android Auto",
   "Cámara de reversa"
 ]

},
      
                {
            id: 2,
            nombre: "Chevrolet Colorado",
            imagen: colorado,
            descripcion: "Lista para cualquier desafío.",
            precio: "Desde $44.990",
            motor: "2.8 Turbo Diesel",
            potencia: "204 HP",
            transmision: "Automática de 6 velocidades",
            combustible: "Diésel",
            tracción: "4x4",
            seguridad: [
                "6 airbags",
                "Alerta de colisión frontal",
                "Frenado autónomo de emergencia",
                "Frenos ABS"
            ],
            equipamiento: [
                "Pantalla MyLink de 11 pulgadas",
                "Apple CarPlay inalámbrico",
                "Android Auto inalámbrico",
                "Cargador inalámbrico de smartphone"
            ]
        },
        {
            id: 3,
            nombre: "Chevrolet Silverado",
            imagen: silverado,
            descripcion: "La pickup más poderosa.",
            precio: "Desde $89.990",
            motor: "5.3 V8 EcoTec3",
            potencia: "355 HP",
            transmision: "Automática de 10 velocidades",
            combustible: "Gasolina",
            tracción: "4x4 con caja de transferencia",
            seguridad: [
                "6 airbags",
                "Alerta de punto ciego",
                "Asistente de permanencia en carril",
                "Cámara de visión 360 grados"
            ],
            equipamiento: [
                "Pantalla táctil de 13.4 pulgadas",
                "Audio Premium Bose",
                "Asientos de cuero con ajuste eléctrico",
                "Sunroof eléctrico"
            ]
        }
    ],

    "SUV & Crossovers": [
        {
            id: 4,
            nombre: "Chevrolet Groove",
            imagen: groove, // Corregido el nombre de la variable de imagen
            descripcion: "SUV compacto y moderno.",
            precio: "Desde $19.990",
            motor: "1.5L de 4 cilindros",
            potencia: "110 HP",
            transmision: "Manual de 5 velocidades / CVT",
            combustible: "Gasolina",
            tracción: "4x2 FWD",
            seguridad: [
                "4 airbags",
                "Control de tracción y estabilidad",
                "Asistente de arranque en pendiente"
            ],
            equipamiento: [
                "Pantalla táctil de 8 pulgadas",
                "Conectividad Bluetooth y USB",
                "Aire acondicionado digital",
                "Techo panorámico según versión"
            ]
        },
        {
            id: 5,
            nombre: "Chevrolet Tracker Turbo",
            imagen: tracker, // Corregido el nombre de la variable de imagen
            descripcion: "Motor turbo y gran tecnología.",
            precio: "Desde $23.990",
            motor: "1.2L Turbo de 3 cilindros",
            potencia: "132 HP",
            transmision: "Automática de 6 velocidades",
            combustible: "Gasolina",
            tracción: "4x2 FWD",
            seguridad: [
                "6 airbags",
                "Frenado automático de emergencia",
                "Alerta de punto ciego"
            ],
            equipamiento: [
                "Pantalla MyLink de 8 pulgadas",
                "Conectividad Wi-Fi nativa",
                "Apple CarPlay y Android Auto",
                "Cargador inalámbrico"
            ]
        },
        {
            id: 6,
            nombre: "Chevrolet Captiva XL",
            imagen: captiva, // Corregido el nombre de la variable de imagen
            descripcion: "Espacio para toda la familia.",
            precio: "Desde $28.490",
            motor: "1.5L Turbo de 4 cilindros",
            potencia: "147 HP",
            transmision: "Automática CVT de 8 velocidades simuladas",
            combustible: "Gasolina",
            tracción: "4x2 FWD",
            seguridad: [
                "6 airbags",
                "Sensores de estacionamiento delanteros y traseros",
                "Monitoreo de presión de neumáticos"
            ],
            equipamiento: [
                "Pantalla vertical de 10.4 pulgadas",
                "Capacidad para 7 pasajeros (3 filas de asientos)",
                "Techo panorámico",
                "Acceso y encendido sin llave"
            ]
        },
                {
            id: 7,
            nombre: "Chevrolet Trailblazer",
            imagen: trailblazer,
            descripcion: "Aventura y confort sin límites para terrenos difíciles.",
            precio: "Desde $41.990",
            motor: "2.8L Turbo Diesel",
            potencia: "200 HP",
            transmision: "Automática de 6 velocidades",
            combustible: "Diésel",
            tracción: "4x4 con acople electrónico",
            seguridad: [
                "6 airbags",
                "Alerta de cambio de carril involuntario",
                "Alerta de punto ciego y tráfico cruzado"
            ],
            equipamiento: [
                "Pantalla MyLink de 8 pulgadas",
                "Asientos de cuero con ajuste eléctrico",
                "Sistema de encendido remoto del motor",
                "Aire acondicionado digital con climatizador trasero"
            ]
        },
        {
            id: 8,
            nombre: "Chevrolet Suburban",
            imagen: suburban,
            descripcion: "La máxima expresión de espacio, lujo y potencia.",
            precio: "Desde $94.990",
            motor: "5.3L V8 EcoTec3",
            potencia: "355 HP",
            transmision: "Automática de 10 velocidades",
            combustible: "Gasolina",
            tracción: "4x4 Autotrac",
            seguridad: [
                "7 airbags",
                "Frenado automático de emergencia de alta velocidad",
                "Asistente de estacionamiento automático",
                "Cámara de visión de 360 grados de alta definición"
            ],
            equipamiento: [
                "Pantallas de entretenimiento de 12.6 pulgadas para asientos traseros",
                "Sistema de sonido Premium Bose con 10 parlantes",
                "Suspensión adaptativa Magnetic Ride Control",
                "Capacidad para hasta 8 pasajeros con máximo confort"
            ]
        },
                {
            id: 9,
            nombre: "Chevrolet Tahoe",
            imagen: tahoe,
            descripcion: "Aventura y confort sin límites para terrenos difíciles.",
            precio: "Desde $41.990",
            motor: "2.8L Turbo Diesel",
            potencia: "200 HP",
            transmision: "Automática de 6 velocidades",
            combustible: "Diésel",
            tracción: "4x4 con acople electrónico",
            seguridad: [
                "6 airbags",
                "Alerta de cambio de carril involuntario",
                "Alerta de punto ciego y tráfico cruzado"
            ],
            equipamiento: [
                "Pantalla MyLink de 8 pulgadas",
                "Asientos de cuero con ajuste eléctrico",
                "Sistema de encendido remoto del motor",
                "Aire acondicionado digital con climatizador trasero"
            ]
        }
        
    ],

    "Híbridos": [
        {
            id: 10,
            nombre: "Captiva Hibrida",
            imagen: captivaHibrida, // Corregido el nombre de la variable de imagen
            descripcion: "Tecnología híbrida enchufable.",
            precio: "Desde $36.990",
            motor: "1.5L Turbo + Motor Eléctrico",
            potencia: "241 HP combinada",
            transmision: "Automática dedicada híbrida (DHT)",
            combustible: "Híbrido Enchufable (Gasolina/Electricidad)",
            tracción: "4x2 FWD",
            seguridad: [
                "6 airbags",
                "Frenado regenerativo inteligente",
                "Cámara de entorno 360 grados"
            ],
            equipamiento: [
                "Cuadro de instrumentos digital avanzado",
                "Modos de manejo EV / HEV ajustables",
                "Carga rápida de batería",
                "Asientos calefaccionados"
            ]
        }
    ],

    "Vans": [
        {
            id: 11,
            nombre: "N400 Cargo",
            imagen: n400, // Corregido el nombre de la variable de imagen
            descripcion: "Ideal para trabajo y carga.",
            precio: "Desde $13.490",
            motor: "1.5L VVT de 4 cilindros",
            potencia: "103 HP",
            transmision: "Manual de 5 velocidades",
            combustible: "Gasolina",
            tracción: "Trasera (RWD)",
            seguridad: [
                "2 airbags",
                "Frenos ABS con EBD",
                "Barras de protección contra impactos laterales"
            ],
            equipamiento: [
                "Aire acondicionado",
                "Radio con entrada USB y Auxiliar",
                "Dirección asistida eléctricamente",
                "Puertas laterales corredizas dobles"
            ]
        },
                {
            id: 12,
            nombre: "Chevrolet N400 Pasajeros",
            imagen: n400Pasajeros,
            descripcion: "La combinación perfecta de espacio, economía y comodidad para tu negocio.",
            precio: "Desde $14.990",
            motor: "1.5L VVT de 4 cilindros",
            potencia: "103 HP",
            transmision: "Manual de 5 velocidades",
            combustible: "Gasolina",
            tracción: "Trasera (RWD)",
            seguridad: [
                "2 airbags frontales",
                "Frenos ABS con distribución electrónica de frenado (EBD)",
                "Zonas de deformación programada y barras laterales"
            ],
            equipamiento: [
                "Capacidad para 8 pasajeros cómodamente sentados",
                "Aire acondicionado trasero con control independiente",
                "Radio AM/FM con entrada USB y Auxiliar",
                "Cierre centralizado y vidrios eléctricos delanteros"
            ]
        }

    ],

    "Eléctricos": [
        {
            id: 13,
            nombre: "Captiva ev",
            imagen: captivaEV, // Corregido el nombre de la variable de imagen
            descripcion: "El futuro de Chevrolet.",
            precio: "Desde $59.990",
            motor: "Motor Eléctrico Ultium",
            potencia: "288 HP",
            transmision: "Automática directa de 1 velocidad",
            combustible: "Eléctrico (Batería de 85 kWh)",
            tracción: "AWD (Tracción total electrónica)",
            seguridad: [
                "8 airbags",
                "Chevy Safety Assist avanzado",
                "Detección de peatones trasera",
                "Control de crucero adaptativo"
            ],
            equipamiento: [
                "Pantalla de infoentretenimiento de 17.7 pulgadas",
                "Panel de instrumentos digital de 11 pulgadas",
                "Autonomía estimada de hasta 449 km",
                "Apertura manos libres de la compuerta trasera"
            ]
        },
                {
            id: 14,
            nombre: "Chevrolet Spark EUV",
            imagen: sparkEUV,
            descripcion: "Eléctrico, compacto y ágil para revolucionar tu movilidad urbana.",
            precio: "Desde $26.990",
            motor: "Motor Eléctrico de Imán Permanente",
            potencia: "150 HP",
            transmision: "Automática directa de 1 velocidad",
            combustible: "Eléctrico (Batería de Litio de 50 kWh)",
            tracción: "4x2 FWD",
            seguridad: [
                "6 airbags",
                "Asistente de mantenimiento de carril con advertencia",
                "Frenado autónomo de emergencia con detección de peatones"
            ],
            equipamiento: [
                "Autonomía estimada de hasta 380 km por carga",
                "Pantalla táctil de 10.2 pulgadas con Apple CarPlay y Android Auto",
                "Panel de instrumentos digital configurable de 8 pulgadas",
                "Compatible con carga rápida de corriente continua (DC)"
            ]
        }

    ]
}


export default vehiculosData;
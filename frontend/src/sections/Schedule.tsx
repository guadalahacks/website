import React from 'react';
import { Varela_Round } from 'next/font/google';
import './Schedule.scss';

const valeraLight = Varela_Round({ weight: "400", subsets: ["latin"] });

export const Schedule: React.FC = () => {
    return (
        <div className={`schedule-container ${valeraLight.className}`} id="schedule">
            <h1 className="schedule-title">Agenda</h1>
            <div className="schedule-table">
                <div className="schedule-row schedule-header">
                    
                    <div className="schedule-cell"><strong>Fecha</strong></div>
                    <div className="schedule-cell"><strong>Hora</strong></div>
                    <div className="schedule-cell"><strong>Evento</strong></div>
                    <div className="schedule-cell"><strong>Lugar</strong></div>
                    
                </div>
                <div className="schedule-row">
                    <div className="schedule-cell">18 de mayo</div>
                    <div className="schedule-cell">9:00 AM</div>
                    <div className="schedule-cell">Inicia Registro</div>
                    <div className="schedule-cell">Auditorio TecSalud</div>
                </div>
                <div className="schedule-row">
                    <div className="schedule-cell">18 de mayo</div>
                    <div className="schedule-cell">10:30 AM</div>
                    <div className="schedule-cell">Inauguración</div>
                    <div className="schedule-cell">Auditorio TecSalud</div>
                </div>
                <div className="schedule-row">
                    <div className="schedule-cell">18 de mayo</div>
                    <div className="schedule-cell">Por anunciar</div>
                    <div className="schedule-cell">Comida</div>
                    <div className="schedule-cell">Habitat de Negocios</div>
                </div>
                <div className="schedule-row">
                    <div className="schedule-cell">18 de mayo</div>
                    <div className="schedule-cell">Por anunciar</div>
                    <div className="schedule-cell">Cena</div>
                    <div className="schedule-cell">Habitat de Negocios</div>
                </div>
                <div className="schedule-row">
                    <div className="schedule-cell">19 de mayo</div>
                    <div className="schedule-cell">Por anunciar</div>
                    <div className="schedule-cell">Desayuno</div>
                    <div className="schedule-cell">Habitat de Negocios</div>
                </div>
                <div className="schedule-row">
                    <div className="schedule-cell">19 de mayo</div>
                    <div className="schedule-cell">11:00 AM</div>
                    <div className="schedule-cell">Cierre de Envíos</div>
                    <div className="schedule-cell">Habitat de Negocios</div>
                </div>
                <div className="schedule-row">
                    <div className="schedule-cell">19 de mayo</div>
                    <div className="schedule-cell">2:00 PM</div>
                    <div className="schedule-cell">Cierre</div>
                    <div className="schedule-cell">Auditorio TecSalud</div>
                </div>
            </div>
        </div>
    );
};
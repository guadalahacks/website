import React from 'react';
import { Varela_Round } from 'next/font/google';
import './Schedule.scss';
import { getLocalizedElement } from '@/app/locale';

const valeraLight = Varela_Round({ weight: "400", subsets: ["latin"] });

export const Schedule: React.FC = () => {
    return (
        <div className={`schedule-container ${valeraLight.className}`} id="schedule">
            <h1 className="schedule-title">{getLocalizedElement("schedule_title")}</h1>
            <div className="schedule-table">
                <div className="schedule-row schedule-header">
                    
                    <div className="schedule-cell"><strong>{getLocalizedElement("schedule_table_date")}</strong></div>
                    <div className="schedule-cell"><strong>{getLocalizedElement("schedule_table_time")}</strong></div>
                    <div className="schedule-cell"><strong>{getLocalizedElement("schedule_table_event")}</strong></div>
                    <div className="schedule-cell"><strong>{getLocalizedElement("schedule_table_location")}</strong></div>
                    
                </div>
                <div className="schedule-row">
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_date_0518")}</div>
                    <div className="schedule-cell">9:00</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_event_registration")}</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_location_tecSalud")}</div>
                </div>
                <div className="schedule-row">
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_date_0518")}</div>
                    <div className="schedule-cell">10:30</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_event_inauguration")}</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_location_tecSalud")}</div>
                </div>
                <div className="schedule-row">
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_date_0518")}</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_time_tbd")}</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_event_lunch")}</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_location_negocios")}</div>
                </div>
                <div className="schedule-row">
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_date_0518")}</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_date_0518")}</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_event_dinner")}</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_location_negocios")}</div>
                </div>
                <div className="schedule-row">
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_date_0519")}</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_date_0518")}</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_event_breakfast")}</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_location_negocios")}</div>
                </div>
                <div className="schedule-row">
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_date_0519")}</div>
                    <div className="schedule-cell">11:00</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_event_deadline")}</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_location_negocios")}</div>
                </div>
                <div className="schedule-row">
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_date_0519")}</div>
                    <div className="schedule-cell">14:00</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_event_closure")}</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_location_tecSalud")}</div>
                </div>
            </div>
        </div>
    );
};
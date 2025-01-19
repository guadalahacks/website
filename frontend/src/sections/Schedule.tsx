import React from 'react';
import { Varela_Round } from 'next/font/google';
import './Schedule.scss';
import { getLocalizedElement, languageState } from '@/app/locale';

const valeraLight = Varela_Round({ weight: "400", subsets: ["latin"] });

export const Schedule: React.FC = () => {
    const [language, _] = languageState.useState();
    return (
        <div className={`schedule-container ${valeraLight.className}`} id="schedule">
            <h1 className="schedule-title">{getLocalizedElement("schedule_title", language)}</h1>
            <div className="schedule-table">
                <div className="schedule-row schedule-header">
                    
                    <div className="schedule-cell"><strong>{getLocalizedElement("schedule_table_date", language)}</strong></div>
                    <div className="schedule-cell"><strong>{getLocalizedElement("schedule_table_time", language)}</strong></div>
                    <div className="schedule-cell"><strong>{getLocalizedElement("schedule_table_event", language)}</strong></div>
                    <div className="schedule-cell"><strong>{getLocalizedElement("schedule_table_location", language)}</strong></div>
                    
                </div>
                <div className="schedule-row">
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_date_0518", language)}</div>
                    <div className="schedule-cell">9:00</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_event_registration", language)}</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_location_tecSalud", language)}</div>
                </div>
                <div className="schedule-row">
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_date_0518", language)}</div>
                    <div className="schedule-cell">10:30</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_event_inauguration", language)}</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_location_tecSalud", language)}</div>
                </div>
                <div className="schedule-row">
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_date_0518", language)}</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_time_tbd", language)}</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_event_lunch", language)}</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_location_negocios", language)}</div>
                </div>
                <div className="schedule-row">
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_date_0518", language)}</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_date_0518", language)}</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_event_dinner", language)}</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_location_negocios", language)}</div>
                </div>
                <div className="schedule-row">
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_date_0519", language)}</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_date_0518", language)}</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_event_breakfast", language)}</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_location_negocios", language)}</div>
                </div>
                <div className="schedule-row">
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_date_0519", language)}</div>
                    <div className="schedule-cell">11:00</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_event_deadline", language)}</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_location_negocios", language)}</div>
                </div>
                <div className="schedule-row">
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_date_0519", language)}</div>
                    <div className="schedule-cell">14:00</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_event_closure", language)}</div>
                    <div className="schedule-cell">{getLocalizedElement("schedule_table_location_tecSalud", language)}</div>
                </div>
            </div>
        </div>
    );
};
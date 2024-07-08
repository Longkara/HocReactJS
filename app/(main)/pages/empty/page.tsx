"use client";
import { Calendar } from 'primereact/calendar';
import { Nullable } from 'primereact/ts-helpers';
import React, { useState } from 'react';

const EmptyPage = () => {
    const [date, setDate] = useState<Nullable<Date>>(null);
    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h5>Empty Page</h5>
                    <p>Use this page to start from scratch and place your custom content.</p>
                    <div className="card flex justify-content-center">
                        <Calendar value={date} onChange={(e) => setDate(e.value)} />
                        <h1>{date != null ?  date.toLocaleDateString() : "khong có ngày" }</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmptyPage;

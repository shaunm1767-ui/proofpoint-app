import React from 'react';
import CloudBackup from './CloudBackup.js';
import FirebaseDemo from './FirebaseDemo.js';
import PublicLegitimacyCheck from './PublicLegitimacyCheck.js';
import StolenDeviceReport from './StolenDeviceReport.js';
import DeviceCard from './DeviceCard.js';
import InvoiceUpload from './InvoiceUpload.js';

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            {/* Placeholder components */}
            <CloudBackup />
            <FirebaseDemo />
            <PublicLegitimacyCheck />
            <StolenDeviceReport />
            <DeviceCard />
            <InvoiceUpload />
        </div>
    );
}

export default Dashboard;

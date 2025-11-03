import express from 'express';

import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();  
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import MongoDB connection (db.js)
import './db.js'; // just import to connect

// Import routes
import packagesRoutes from './routes/packages.js';
import bookingStepsRoutes from './routes/bookingSteps.js';
import bookingsRoutes from './routes/bookings.js';
import servicesRoutes from './routes/services.js';
import guidesRoutes from './routes/guides.js';
import aboutRoutes from './routes/about.js';
import contactInfoRoutes from './routes/contactInfo.js';
import usersRoutes from './routes/users.js';
import authRoutes, { authenticateToken } from './routes/auth.js';
import dashboardRoutes from './routes/dashboard.js';

import travelaAboutRoutes from './travelaroutes/travelaAbout.js';
import travelaServiceRoutes from './travelaroutes/travelaService.js';
import travelaPackageRoutes from './travelaroutes/travelaPackage.js';
import travelaGuideRoutes from './travelaroutes/travelaGuide.js';
import travelabookingsRoutes from './travelaroutes/travelaBooking.js';
import travelausersRoutes from './travelaroutes/travelaUser.js';
import travelacontactInfoRoutes from './travelaroutes/travelaContactInfo.js';
import traveladashboardRoutes from './travelaroutes/travelaDashboard.js';
import travelaauthRoutes from './travelaroutes/travelaAuth.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Server is running' });
});

app.use('/api/packages', packagesRoutes);
app.use('/api/bookingSteps', bookingStepsRoutes);
app.use('/api/bookings', bookingsRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/guides', guidesRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/contact-info', contactInfoRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);

app.use('/travelaapi/about', travelaAboutRoutes);
app.use('/travelaapi/services', travelaServiceRoutes);
app.use('/travelaapi/packages', travelaPackageRoutes);
app.use('/travelaapi/guides', travelaGuideRoutes);
app.use('/travelaapi/bookings', travelabookingsRoutes);
app.use('/travelaapi/users', travelausersRoutes);
app.use('/travelaapi/contact-info', travelacontactInfoRoutes);
app.use('/travelaapi/dashboard', traveladashboardRoutes);
app.use('/travelaapi/auth', travelaauthRoutes);

// Error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.json({ message: 'Server is running' });
});

import Test from './models/Test.js';

async function createTestData() {
  const doc = new Test({ name: 'First Entry' });
  await doc.save();
  console.log('✅ Document saved, database created!');
}

createTestData();
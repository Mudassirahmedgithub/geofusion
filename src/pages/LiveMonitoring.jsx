import React, { useState, useEffect } from 'react';
import { Satellite, CloudRain, Activity, AlertTriangle, Gauge, Map, TrendingUp, Eye, Zap, Droplets } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';

// Mock real-time data generator
const generateSensorData = () => ({
  rainfall: Math.random() * 50 + 10,
  soilMoisture: Math.random() * 40 + 30,
  seismic: Math.random() * 2 + 0.1,
  groundwater: Math.random() * 200 + 800,
  temperature: Math.random() * 15 + 20,
  humidity: Math.random() * 30 + 60,
});

// Generate historical data for charts
const generateHistoricalData = () => {
  const data = [];
  for (let i = 23; i >= 0; i--) {
    data.push({
      time: `${String(23 - i).padStart(2, '0')}:00`,
      rainfall: Math.random() * 30 + 5,
      soilMoisture: Math.random() * 20 + 40,
      seismic: Math.random() * 1.5 + 0.2,
      temperature: Math.random() * 10 + 25,
    });
  }
  return data;
};

// Rainfall prediction data
const rainfallForecast = [
  { day: 'Today', prediction: 85, actual: 82 },
  { day: 'Tomorrow', prediction: 92, actual: null },
  { day: 'Day 3', prediction: 78, actual: null },
  { day: 'Day 4', prediction: 45, actual: null },
  { day: 'Day 5', prediction: 23, actual: null },
];

export default function LiveMonitoring() {
  const [sensorData, setSensorData] = useState(generateSensorData());
  const [historicalData] = useState(generateHistoricalData());
  const [selectedSatelliteView, setSelectedSatelliteView] = useState('terrain');
  const [alertLevel, setAlertLevel] = useState('medium');
  
  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData(generateSensorData());
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Calculate risk level based on sensor data
  const calculateRiskLevel = () => {
    const { rainfall, soilMoisture, seismic } = sensorData;
    if (rainfall > 40 || soilMoisture > 60 || seismic > 1.5) return 'high';
    if (rainfall > 25 || soilMoisture > 50 || seismic > 1.0) return 'medium';
    return 'low';
  };

  const riskLevel = calculateRiskLevel();
  const riskColors = {
    low: 'bg-green-500',
    medium: 'bg-yellow-500',
    high: 'bg-red-500'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <div className="border-b border-slate-700 bg-slate-800/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                GeoFusion Live Monitor
              </h1>
              <p className="text-slate-400 mt-1">Real-time landslide detection & prediction system</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className={`px-4 py-2 rounded-full ${riskColors[riskLevel]} bg-opacity-20 border border-current`}>
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${riskColors[riskLevel]} animate-pulse`}></div>
                  <span className="text-sm font-medium capitalize">{riskLevel} Risk</span>
                </div>
              </div>
              <div className="text-sm text-slate-400">
                Last updated: {new Date().toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Top Row - Satellite & Risk Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Satellite Imagery */}
          <div className="lg:col-span-2 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden">
            <div className="p-6 border-b border-slate-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Satellite className="w-6 h-6 text-blue-400" />
                  <h2 className="text-xl font-semibold">Satellite Imagery</h2>
                </div>
                <div className="flex space-x-2">
                  {['terrain', 'satellite', 'hybrid'].map((view) => (
                    <button
                      key={view}
                      onClick={() => setSelectedSatelliteView(view)}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                        selectedSatelliteView === view
                          ? 'bg-blue-500 text-white'
                          : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                      }`}
                    >
                      {view.charAt(0).toUpperCase() + view.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative h-64 bg-slate-700">
              {/* Simulated satellite map */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-green-800/20 to-brown-800/30">
                <div className="absolute top-4 left-4 bg-red-500 w-3 h-3 rounded-full animate-ping"></div>
                <div className="absolute top-4 left-4 bg-red-500 w-3 h-3 rounded-full"></div>
                <div className="absolute top-8 right-8 bg-yellow-500 w-2 h-2 rounded-full"></div>
                <div className="absolute bottom-8 left-8 bg-green-500 w-2 h-2 rounded-full"></div>
              </div>
              <div className="absolute top-4 right-4 bg-black/50 rounded p-2">
                <div className="text-xs space-y-1">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>High Risk Zone</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Medium Risk</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Low Risk</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-xs text-slate-300">
                Coordinates: 17.3850°N, 78.4867°E
              </div>
            </div>
          </div>

          {/* Risk Assessment Panel */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-yellow-400" />
              <h2 className="text-xl font-semibold">Risk Assessment</h2>
            </div>
            
            <div className="space-y-4">
              <div className="text-center">
                <div className={`w-24 h-24 mx-auto rounded-full ${riskColors[riskLevel]} bg-opacity-20 flex items-center justify-center mb-3`}>
                  <span className="text-2xl font-bold capitalize">{riskLevel}</span>
                </div>
                <p className="text-sm text-slate-400">Current Risk Level</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Rainfall Impact</span>
                  <div className="flex-1 mx-3 bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-blue-400 h-2 rounded-full" 
                      style={{ width: `${(sensorData.rainfall / 60) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm w-8">{Math.round((sensorData.rainfall / 60) * 100)}%</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Soil Saturation</span>
                  <div className="flex-1 mx-3 bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-yellow-400 h-2 rounded-full" 
                      style={{ width: `${(sensorData.soilMoisture / 70) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm w-8">{Math.round((sensorData.soilMoisture / 70) * 100)}%</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Seismic Activity</span>
                  <div className="flex-1 mx-3 bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-red-400 h-2 rounded-full" 
                      style={{ width: `${(sensorData.seismic / 3) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm w-8">{Math.round((sensorData.seismic / 3) * 100)}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sensor Data Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <CloudRain className="w-8 h-8 text-blue-400" />
                <h3 className="font-semibold">Rainfall</h3>
              </div>
              <span className="text-2xl font-bold text-blue-400">{sensorData.rainfall.toFixed(1)}</span>
            </div>
            <p className="text-slate-400 text-sm mb-2">mm/hour</p>
            <div className="text-xs text-slate-500">
              Threshold: <span className="text-yellow-400">35 mm/hr</span>
            </div>
            {sensorData.rainfall > 35 && (
              <div className="mt-2 text-xs text-red-400 animate-pulse">⚠️ Threshold exceeded</div>
            )}
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Droplets className="w-8 h-8 text-green-400" />
                <h3 className="font-semibold">Soil Moisture</h3>
              </div>
              <span className="text-2xl font-bold text-green-400">{sensorData.soilMoisture.toFixed(1)}</span>
            </div>
            <p className="text-slate-400 text-sm mb-2">%</p>
            <div className="text-xs text-slate-500">
              Threshold: <span className="text-yellow-400">60%</span>
            </div>
            {sensorData.soilMoisture > 60 && (
              <div className="mt-2 text-xs text-red-400 animate-pulse">⚠️ Threshold exceeded</div>
            )}
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Activity className="w-8 h-8 text-red-400" />
                <h3 className="font-semibold">Seismic</h3>
              </div>
              <span className="text-2xl font-bold text-red-400">{sensorData.seismic.toFixed(2)}</span>
            </div>
            <p className="text-slate-400 text-sm mb-2">Magnitude</p>
            <div className="text-xs text-slate-500">
              Threshold: <span className="text-yellow-400">1.5</span>
            </div>
            {sensorData.seismic > 1.5 && (
              <div className="mt-2 text-xs text-red-400 animate-pulse">⚠️ Threshold exceeded</div>
            )}
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Gauge className="w-8 h-8 text-purple-400" />
                <h3 className="font-semibold">Groundwater</h3>
              </div>
              <span className="text-2xl font-bold text-purple-400">{sensorData.groundwater.toFixed(0)}</span>
            </div>
            <p className="text-slate-400 text-sm mb-2">kPa</p>
            <div className="text-xs text-slate-500">
              Normal: <span className="text-green-400">800-1000 kPa</span>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Real-time Sensor Trends */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <TrendingUp className="w-6 h-6 text-green-400" />
              <h2 className="text-xl font-semibold">24-Hour Trends</h2>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={historicalData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px'
                  }} 
                />
                <Line type="monotone" dataKey="rainfall" stroke="#60A5FA" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="soilMoisture" stroke="#34D399" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="seismic" stroke="#F87171" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Rainfall Prediction */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Eye className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-semibold">Rainfall Forecast</h2>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={rainfallForecast}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="day" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px'
                  }} 
                />
                <Bar dataKey="prediction" fill="#60A5FA" name="Predicted (mm)" />
                <Bar dataKey="actual" fill="#34D399" name="Actual (mm)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Alert System */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Zap className="w-6 h-6 text-yellow-400" />
            <h2 className="text-xl font-semibold">Active Alerts & Notifications</h2>
          </div>
          
          <div className="space-y-4">
            {sensorData.rainfall > 35 && (
              <div className="flex items-center space-x-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                <div>
                  <p className="font-medium text-red-400">High Rainfall Alert</p>
                  <p className="text-sm text-slate-400">Rainfall exceeds threshold - monitoring for landslide risk</p>
                </div>
                <span className="text-xs text-slate-500 ml-auto">Now</span>
              </div>
            )}
            
            {sensorData.soilMoisture > 60 && (
              <div className="flex items-center space-x-3 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
                <div>
                  <p className="font-medium text-yellow-400">Soil Saturation Warning</p>
                  <p className="text-sm text-slate-400">Soil moisture levels approaching critical threshold</p>
                </div>
                <span className="text-xs text-slate-500 ml-auto">2 min ago</span>
              </div>
            )}
            
            <div className="flex items-center space-x-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <Activity className="w-5 h-5 text-blue-400" />
              <div>
                <p className="font-medium text-blue-400">System Status</p>
                <p className="text-sm text-slate-400">All sensors operational - data streaming normally</p>
              </div>
              <span className="text-xs text-slate-500 ml-auto">5 min ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
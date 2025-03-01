import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Sample data for the analytics chart
const data = [
  { name: 'User 1', visits: 4000, signups: 2400 },
  { name: 'User 2', visits: 3000, signups: 1398 },
  { name: 'User 3', visits: 2000, signups: 9800 },
  { name: 'User 4', visits: 2780, signups: 3908 },
  { name: 'User 5', visits: 1890, signups: 4800 },
];

const UserAnalyticsWidget = () => (
  <BarChart width={600} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="visits" fill="#8884d8" />
    <Bar dataKey="signups" fill="#82ca9d" />
  </BarChart>
);

export default UserAnalyticsWidget;
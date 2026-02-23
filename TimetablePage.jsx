import React from 'react';
import './TimetablePage.css';

export default function TimetablePage() {
  return (
    <div className="hub-bg">
      <header className="hub-header">
        <div className="hub-logo">Eduvos HUB</div>
        <nav className="hub-nav">
          <a className="nav-item home-icon selected">Dashboard</a>
          <a className="nav-item">My Courses</a>
          <a className="nav-item timetable selected">Timetable</a>
          <a className="nav-item">Due Dates</a>
          <a className="nav-item">Email</a>
          <a className="nav-item">Teams</a>
          <a className="nav-item">Calendar</a>
          <a className="nav-item">Settings</a>
        </nav>
        <div className="hub-icons">
          <span className="icon-search"></span>
          <span className="icon-bell"></span>
          <span className="icon-help"></span>
          <span className="avatar"></span>
        </div>
      </header>

      <main className="hub-main">
        <h2>Timetable</h2>
        <div className="controls">
          <select>
            <option>Week</option>
            <option>Day</option>
          </select>
          <input type="date" value="2026-04-16" />
          <button className="filter-btn">Filter</button>
          <select>
            <option>PTA Group 5</option>
          </select>
        </div>
        <div className="timetable-grid">
          {/* Days of week */}
          <div className="timetable-days">
            <div>Mo 16.02.</div>
            <div>Tue 17.02.</div>
            <div>Wed 18.02.</div>
            <div>Thu 19.02.</div>
            <div>Thu 19.02.</div>
          </div>
          {/* Timetable events */}
          <div className="timetable-events">
            <div className="event-card">
              <span>COECA1 ...</span>
              <span>Mr. van Houwen...</span>
              <span>LV1001A</span>
              <span>PTA Group 1</span>
              <span>09:00 – 09:50</span>
            </div>
            {/* ...repeat for other events */}
          </div>
        </div>
        <div className="hub-actions">
          <button>Export</button>
          <button>Manage Timetables</button>
          <button className="add-event">+ Add Event</button>
        </div>
      </main>
    </div>
  );
}

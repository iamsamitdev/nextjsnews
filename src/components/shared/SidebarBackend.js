/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faDashboard } from "@fortawesome/free-solid-svg-icons"; 

const SidebarBackend = () => {
  return (
    <nav id="sidebar" className="sidebar">
      <div className="sidebar-content js-simplebar">
        <a className="sidebar-brand" href="#">
          <span className="align-middle">NextJS News</span>
        </a>
        <ul className="sidebar-nav">
          <li className="sidebar-header">Pages</li>
          <li className="sidebar-item">
            <Link href="/backend/dashboard">
              <a className="sidebar-link">
              <FontAwesomeIcon icon={faDashboard} style={{fontSize: '24px'}} />&nbsp;
                <span className="align-middle">Dashboard</span>
              </a>
            </Link>
          </li>
          <li className="sidebar-item">
            <a
              data-target="#forms"
              data-toggle="collapse"
              className="sidebar-link collapsed"
            >
              <FontAwesomeIcon icon={faDashboard} style={{fontSize: '24px'}} />&nbsp;
              <span className="align-middle">Stock</span>
            </a>
            <ul
              id="forms"
              className="sidebar-dropdown list-unstyled collapse "
              data-parent="#sidebar"
            >
              <li className="sidebar-item">
              <Link href="/backend/product" className="sidebar-link">
                  <a className="sidebar-link">
                    Product
                  </a>
                </Link>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="#">
                  Report
                </a>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="#">
            <FontAwesomeIcon icon={faDashboard} style={{fontSize: '24px'}} />&nbsp;
              <span className="align-middle">Profile</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="#">
            <FontAwesomeIcon icon={faDashboard} style={{fontSize: '24px'}} />&nbsp;&nbsp;
              <span className="align-middle">Settings</span>
            </a>
          </li>
          
          <li className="sidebar-header">Tools &amp; Components</li>
          
          <li className="sidebar-item">
            <a className="sidebar-link" href="#">
            <FontAwesomeIcon icon={faDashboard} style={{fontSize: '24px'}} />&nbsp;
              <span className="align-middle">Icons</span>
            </a>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="#">
            <FontAwesomeIcon icon={faDashboard} style={{fontSize: '24px'}} />&nbsp;
              <span className="align-middle">Tables</span>
            </a>
          </li>
         
        </ul>
      </div>
    </nav>
  )
}

export default SidebarBackend
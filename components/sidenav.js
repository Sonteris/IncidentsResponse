import React from "react";

import {
  FaInbox,
  FaClipboardList,
  FaTicketAlt,
  FaHeart,
  FaStore,
  FaHistory,
  FaUser,
  FaBook,
  FaEnvelopeOpenText,
  FaCartArrowDown,
  FaSignOutAlt,
} from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";
8;
export default function SideBar() {
  const path = usePathname();
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h4>Incident Response System</h4>
      </div>
      <ul className="sidebar-menu">
        <li>
          <FaClipboardList />{" "}
          <Link
            href="/dashboard"
            className={[
              "sidebar-item",
              path === "/dashboard" ? "active" : undefined,
            ]}
          >
            Home
          </Link>
        </li>
        <li
          className={[
            "sidebar-item",
            path === "/view-incident" ? "active" : undefined,
          ]}
        >
          <FaInbox />
          <Link
            href="/view-incident"
            className={path === "/view-incident" ? "active" : undefined}
          >
            View Incident
          </Link>
        </li>
        <li className="sidebar-item">
          <FaClipboardList />{" "}
          <Link
            href="/report-incident"
            className={path.startsWith("/report-incident") ? "active" : undefined}
          >
            Reports
          </Link>
        </li>
        <li className="sidebar-item">
          <FaTicketAlt />  <Link
            href="/incidents-details"
            className={path === "/incidents-details" ? "active" : undefined}
          >
            Incidents Details
          </Link>
        </li>
        <li className="sidebar-item">
          <FaHeart /> <Link
            href="/incident-description"
            className={path === "/incident-description" ? "active" : undefined}
          >
            Incident Description
          </Link>
        </li>
        <li className="sidebar-item">
          <FaStore /> <Link
            href="/incident-analysis"
            className={path === "/incident-analysis" ? "active" : undefined}
          >
            Incident Analysis
          </Link>
        </li>
        <li className="sidebar-item">
          <FaHistory /> <Link
            href="/notifications"
            className={path === "/notifications" ? "active" : undefined}
          >
            Notifications
          </Link>
        </li>
        <li className="sidebar-item">
          <FaUser /> <Link
            href="/help"
            className={path === "/help" ? "active" : undefined}
          >
            Help
          </Link>
        </li>
        <li className="sidebar-item">
          <FaBook /> <Link
            href="/search"
            className={path === "/search" ? "active" : undefined}
          >
            Search
          </Link>
        </li>
      </ul>
      <div className="sidebar-logout">
        <FaSignOutAlt /> Logout
      </div>
    </aside>
  );
}

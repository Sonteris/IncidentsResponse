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
            href="/view-incident"
            className={path.startsWith("/view-incident") ? "active" : undefined}
          >
            Reports
          </Link>
        </li>
        <li className="sidebar-item">
          <FaTicketAlt /> Voucher
        </li>
        <li className="sidebar-item">
          <FaHeart /> Saved Items
        </li>
        <li className="sidebar-item">
          <FaStore /> Followed Sellers
        </li>
        <li className="sidebar-item">
          <FaHistory /> Recently Viewed
        </li>
        <li className="sidebar-item">
          <FaUser /> Account Management
        </li>
        <li className="sidebar-item">
          <FaBook /> Address Book
        </li>
        <li className="sidebar-item">
          <FaEnvelopeOpenText /> Newsletter Preferences
        </li>
      </ul>
      <div className="sidebar-logout">
        <FaSignOutAlt /> Logout
      </div>
    </aside>
  );
}

/* eslint-disable react/prop-types */
import React from 'react';

export const Notification = ({
  icon, notificationClassName, notificationType, notificationBody,
}) => (
  <div
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    data-autohide="false"
    className={notificationClassName ? `notification show ${notificationClassName}` : 'notification show'}
  >
    <div className="notification-body">
      <div className="notification-header">
        <i className={ icon ? `bi ${icon}` : null}></i>
        <strong className="mr-auto notification-title">{notificationType}:</strong>
      </div>
      <div className="notification-content">
        <span className="notification-text">{notificationBody}</span>
      </div>
      <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
);

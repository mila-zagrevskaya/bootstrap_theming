import React from 'react';

import { Notification } from 'components/common/Notification/index.jsx';

export const Notifications = () => (
  <section className="section container" id="notifications">
    <h2 className="title-2">Notifications</h2>

    <Notification notificationType="INFO ALERT"
      icon="bi-info-circle"
      notificationClassName="bg-info"
      notificationBody="You've got some friends nearby, stop looking at your phone and find them..."/>

    <Notification notificationType="SUCCESS ALERT"
      icon="bi-check2"
      notificationClassName="bg-success"
      notificationBody="You've got some friends nearby, stop looking at your phone and find them..."/>

    <Notification notificationType="WARNING ALERT"
      icon="bi-exclamation-triangle-fill"
      notificationClassName="bg-warning"
      notificationBody="You've got some friends nearby, stop looking at your phone and find them..."/>

    <Notification notificationType="DANGER ALERT"
      icon="bi-info-circle"
      notificationClassName="bg-danger"
      notificationBody="You've got some friends nearby, stop looking at your phone and find them..."/>
  </section>
);

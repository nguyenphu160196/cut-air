import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import Setting from 'material-ui/svg-icons/action/settings';
import Public from 'material-ui/svg-icons/social/public';

const TabsExampleIconText = () => (
    <Tabs inkBarStyle={{
        backgroundColor: 'red'
      }}
      tabItemContainerStyle={{
        background: '#0084ff'
      }}>
      <Tab
        icon={<Public/>}
      >
        <div>Public</div>
      </Tab>
      <Tab
        icon={<MapsPersonPin />}
      >
        <div>Friend Noti</div>
      </Tab>
      <Tab
        icon={<Setting/>}
      >
        <div>Setting</div>
      </Tab>
    </Tabs>
  );
  
  export default TabsExampleIconText;
import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import Setting from 'material-ui/svg-icons/action/settings';
import Public from 'material-ui/svg-icons/social/public';

const TabsExampleIconText = () => (
    <Tabs inkBarStyle={{
        backgroundColor: '#fff'
      }}
      tabItemContainerStyle={{
        background: '#0084ff'
      }}>
      <Tab
        icon={<Public/>}
      />
      <Tab
        icon={<MapsPersonPin />}
      />
      <Tab
        icon={<Setting/>}
      />
    </Tabs>
  );
  
  export default TabsExampleIconText;
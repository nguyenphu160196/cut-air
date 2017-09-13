import React from 'react'

import Title from './components/title.jsx';
import Search from './components/search.jsx';
import List from './components/list.jsx';
import VideoCall from './components/videoCall.jsx';
import OwnAccount from './components/ownAccount.jsx';
import Chatfield from './components/chatField.jsx';
import InputChat from './components/inputChat.jsx';
import AccountSetting from './components/accountSetting.jsx';
import Options from './components/options.jsx';


class Main extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div className='container col-12'>
                    <div className='left-content col-3'>
                        <div className='cpt-title'>
                            <Title></Title>
                        </div>
                        <div className='cpt-search'>
                            <Search></Search>
                        </div>
                        <div className='cpt-list'>
                            <List></List>
                        </div>
                    </div>
                    <div className='right-content col-9'>
                        <div className='above-right-content'>
                            <VideoCall></VideoCall>
                        </div>
                        <div className='below-right-content'>
                            <div className='split-left col-8'>
                                <div className='split-left-f col-8'>
                                    <OwnAccount></OwnAccount>
                                </div>
                                <div className='split-left-s col-8'>
                                    <Chatfield></Chatfield>
                                </div>
                                <div className='split-left-t col-8'>
                                    <InputChat></InputChat>
                                </div>
                            </div>
                            <div className='split-right col-4'>
                                <div className='split-right-f '>
                                    <AccountSetting></AccountSetting>
                                </div>
                                <div className='split-right-s '>
                                    <Options></Options>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Main;
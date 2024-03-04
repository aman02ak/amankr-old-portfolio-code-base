import React from 'react';
import MenuItems1 from '../Components/MenuItems1';
import Tittle from '../Components/Tittle';
import achievement from '../Components/allachievement';
import { useState } from 'react';

function AchievementPage() {
    const [menuItems1, setMenuItems1] = useState(achievement);

    return (
        <div className="PortfolioPage">
            <div className="title">
                <Tittle title={'Achievements'} span={'Achievements'} />
            </div>
            <div className="achievement-data">
                <MenuItems1 menuItem={menuItems1} />
            </div>
        </div>
    )
}

export default AchievementPage;

import React from 'react';
import { Column } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import LogoComponent from './LogoComponent';
import MenuItemComponent from './MenuItemComponent';
import IconOverview from '../../assets/icon-overview.js';
import Icons from '../../assets/icon-search.js';
import IconIdeas from '../../assets/icon-settings.js';
import IconContacts from '../../assets/icon-contacts';
import IconAgents from '../../assets/icon-agents';
import IconArticles from '../../assets/icon-articles';
import IconSettings from '../../assets/icon-ideas';


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        width: 255,
        paddingTop: 32
    },
    menuItemList: {
        marginTop: 52
    },
    // separator: {
    //     borderTop: '1px solid #DFE0EB',
    //     marginTop: 16,
    //     marginBottom: 16,
    //     opacity: 0.06
    // }
});

function SidebarComponent(props) {
    return (
        <Column className={css(styles.container)}>
            <LogoComponent />
            <Column className={css(styles.menuItemList)}>
                <MenuItemComponent
                    title="Dashboard" icon={IconOverview} 
                    onClick={() => props.onChange('Overview')}
                    active={props.selectedItem === 'Overview'}
                />
                <MenuItemComponent
                    title="Pages" 
                    icon={Icons}
                  
                />
                <MenuItemComponent
                    title="Applications" icon={IconIdeas}
                  />
                <MenuItemComponent
                    title="UI Component" icon={IconContacts}
                 
                    />
                <MenuItemComponent
                    title="Widgits" icon={IconAgents}
              
                    />
                <MenuItemComponent
                    title="Forms" icon={IconArticles}
                 
                    />
              
                <MenuItemComponent
                    title="Charts" icon={IconSettings}
                
                    />
               
            </Column>
        </Column>
    );
}

export default SidebarComponent;

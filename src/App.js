import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import SidebarComponent from './components/sidebar/SidebarComponent';
import HeaderComponent from './components/Header/HeaderComponent';
import './App.css';




const styles = StyleSheet.create({
    container: {
        height: '100vh'
    },
    content: {
        marginTop: 54
    },
    mainBlock: {
        backgroundColor: '#F7F8FC',
        padding: 30
    }
});

class App extends React.Component {

    state = { selectedItem: '' };

    render() {
        const { selectedItem } = this.state;
        return (
            <div>
                <Row className={css(styles.container)}>
                    <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
                    <Column flexGrow={1} className={css(styles.mainBlock)}>
                        <HeaderComponent title={selectedItem} />
                        <div className={css(styles.content)}>

                         <div style={{display:'flex',flexDirection:'row',marginBottom:10,marginTop:0,border:5,justifyContent:'space-around'}} className='main'>
                            <div style={{ height: 150, width: 500, backgroundColor: 'rgb(58, 91, 160)', color: 'white', borderRadius: 10, marginLeft: 150,textAlign:'center-left',position:'relative' }} className="card1">
                                <div style={{margin:10,justifyContent: 'center',textAlign: 'left',padding:0,border:0}}  className="card-body">
                                    <h5 className="card-title">Total Income</h5>
                                    <h1>$579,000</h1>
                                    <h7>Saved 25%</h7>
                                </div>
                            </div>
                            <div style={{ height: 150, width: 500, backgroundColor: 'rgb(71, 181, 255)', color: 'white', borderRadius: 10, position: 'relative',float:'right',marginTop:0 , marginLeft: 0 }}  className="card2">
                                <div style={{margin:10,justifyContent: 'center',textAlign: 'left',padding:0,border:0}}  className="card-body">
                                    <h5 className="card-title">Total Expenses</h5>
                                    <h1>$79,000</h1>
                                    <h7>Saved 25%</h7>
                                </div>
                            </div >
                            </div>

                            <div style={{display:'flex',flexDirection:'row',marginBottom:10, marginTop:0,border:5,justifyContent:'space-around'}} className='main1'>
                            <div style={{ height: 150, width: 500, backgroundColor: 'rgb(113, 43, 117)', color: 'white', borderRadius: 10, marginLeft: 150 ,position:'relative',}} className="card3">
                                <div style={{margin:10,justifyContent: 'center',textAlign: 'left',padding:0,border:0}}  className="card-body">
                                    <h5 className="card-title">Cash On Hand</h5>
                                    <h1>$92,000</h1>
                                    <h7>Saved 25%</h7>
                                </div>
                            </div>
                            <div style={{ height: 150, width: 500, backgroundColor: 'rgb(81, 146, 89)', color: 'white', borderRadius: 10, position: 'relative',float:'right',marginTop:0 , marginLeft: 0 }}  className="card4">
                                <div style={{margin:10,justifyContent: 'center',textAlign: 'left',padding:0,border:0}} className="card-body">
                                    <h5 className="card-title">Net Profit Margin</h5>
                                    <h1>$179,000</h1>
                                    <h7>Saved 65%</h7>
                                </div>
                            </div>

                        </div>
                        </div>
                       
                    </Column>
                </Row>





            </div>

        );
    }
}

export default App;
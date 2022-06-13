import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import SidebarComponent from './components/sidebar/SidebarComponent';
import HeaderComponent from './components/Header/HeaderComponent';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import Img22 from './img22.png';
import './App.css';






const styles = StyleSheet.create({
    container: {
        height: '120vh',
        overflow: 'scroll',
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

                            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 25, marginTop: 0, border: 5, justifyContent: 'space-around' }} className='main'>
                                <div style={{ height: 150, width: 500, backgroundColor: 'rgb(58, 91, 160)', color: 'white', borderRadius: 10, marginLeft: 20, textAlign: 'center-left', position: 'relative' }} className="card1">
                                    <div style={{ margin: 15, justifyContent: 'center', textAlign: 'left', padding: 0, border: 0 }} className="card-body">
                                        <h5 className="card-title">Total Income</h5>
                                        <h1>$579,000</h1>
                                        <h7>Saved 25%</h7>
                                    </div>
                                </div>
                                <div style={{ height: 150, width: 500, backgroundColor: 'rgb(71, 181, 255)', color: 'white', borderRadius: 10, position: 'relative', float: 'right', marginTop: 0, marginLeft: 0 }} className="card2">
                                    <div style={{ margin: 15, justifyContent: 'center', textAlign: 'left', padding: 0, border: 0 }} className="card-body">
                                        <h5 className="card-title">Total Expenses</h5>
                                        <h1>$79,000</h1>
                                        <h7>Saved 25%</h7>
                                    </div>
                                </div >
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 20, marginTop: 0, border: 5, justifyContent: 'space-around' }} className='main1'>
                                <div style={{ height: 150, width: 500, backgroundColor: 'rgb(113, 43, 117)', color: 'white', borderRadius: 10, marginLeft: 20, position: 'relative', }} className="card3">
                                    <div style={{ margin: 15, justifyContent: 'center', textAlign: 'left', padding: 0, border: 0 }} className="card-body">
                                        <h5 className="card-title">Cash On Hand</h5>
                                        <h1>$92,000</h1>
                                        <h7>Saved 25%</h7>

                                        <img style={{height:300,width:500,marginTop:50,borderRadius:20}} src={Img22} alt="graph"  />
                                    </div>
                               
                                </div>
                                
                                <div style={{ height: 150, width: 500, backgroundColor: 'rgb(81, 146, 89)', color: 'white', borderRadius: 10, position: 'relative', float: 'right', marginTop: 0, marginLeft: 0, marginBottom: 20 }} className="card4">
                                    <div style={{ margin: 15, justifyContent: 'center', textAlign: 'left', padding: 0, border: 0 }} className="card-body">
                                        <h5 className="card-title">Net Profit Margin</h5>
                                        <h1>$179,000</h1>
                                        <h7>Saved 65%</h7>
                                    </div>
                                    <div>
                                    </div>
                                    <div style={{ marginTop: 100 }}>
                                        <h4 style={{ color: 'black', display: 'inline', marginRight: 110, border: 25, justifyContent: 'end', marginTop: 20, marginBottom: 20, padding: 30 }}>% of Income Budget

                                            <span style={{ color: 'black', display: 'inline', marginRight: 20, marginLeft: 50, marginTop: 20, marginBottom: 20, borderTop: 20 }}>
                                                % of Expenses Budget
                                            </span>
                                        </h4>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 10, marginTop: 20, border: 5, top: 20, justifyContent: 'space-around' }} className='main1' >
                                        <Progress
                                            type="circle"
                                            strokeWidth={8}
                                            width={200}
                                            percent={67}
                                        />
                                        <Progress
                                            type="circle"
                                            strokeWidth={8}
                                            width={200}
                                            percent={48}
                                        />
                                    </div>
                                    <div style={{ marginTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <h4 style={{ color: 'black', display: 'inline', marginRight: 110, border: 25, justifyContent: 'end', marginTop: 10, marginBottom: 10, padding: 30 }}>
                                            Balance:
                                            -$18570
                                            <br></br>
                                            <span style={{ color: 'black', display: 'inline', margin: 10, borderTop: 10 }}>
                                                Balance:
                                                $31430
                                                <br />
                                            </span>
                                        </h4>
                                        <h4 style={{ color: 'black', display: 'inline', marginRight: 100, border: 20, justifyContent: 'end', marginTop: 10, marginBottom: 10, padding: 30 }}>
                                            Balance:
                                            -$18570
                                            <br></br>
                                            <span style={{ color: 'black', display: 'inline', margin: 5, borderTop: 10 }}>
                                                Balance:
                                                $31430
                                            </span>
                                        </h4>
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
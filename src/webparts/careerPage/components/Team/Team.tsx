import * as React from 'react';
import styles from './Team.module.scss'; // Ensure this file is named correctly

const Team: React.FC = () => {
    return (
        <div className={styles.Team}>
            <div className={styles.Team_container}>
               <div className={styles.Team_title}>
                    <p>
                        Notre équipe <br /><span style={{fontSize:'24px', fontWeight:'700', color:'#044123'}}>Équipe Recrutement</span>
                    </p>
               </div>
               <div className={styles.members}>
                    <div className={styles.member_card}>
                        <div className={styles.holder}>
                            <div className={styles.img_holder}>
                                <img src="/sites/Cnet/Assets/Talal.png"   alt="" />
                            </div>
                        </div>
                        <div className={styles.name_function}>
                            <p>
                            Talal Sebai <br /><span style={{fontSize:'14px', fontWeight:'400', color:'#8EB1E3'}}>Talent Acquisition Manager</span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.member_card}>
                        <div className={styles.holder}>
                            <div className={styles.img_holder}>
                                <img src="/sites/Cnet/Assets/Driss.png"  alt="" />
                            </div>
                        </div>
                        <div className={styles.name_function}>
                            <p>
                            Driss El Ghouass <br /><span style={{fontSize:'14px', fontWeight:'400', color:'#8EB1E3'}}>Talent Acquisition Partner</span>
                            </p>
                        </div>
                    </div>
                    
                    <div className={styles.member_card}>
                        <div className={styles.holder}>
                            <div className={styles.img_holder}>
                                <img src="/sites/Cnet/Assets/Lamyae.png"  alt="" />
                            </div>
                        </div>
                        <div className={styles.name_function}>
                            <p>
                            Lamyaa El Idrissi<br /><span style={{fontSize:'14px', fontWeight:'400', color:'#8EB1E3'}}>Chargée de Recrutement et Intégration IT</span>
                            </p>
                        </div>
                    </div>
                    


               </div>
            </div>
        </div>
    );
};

export default Team;

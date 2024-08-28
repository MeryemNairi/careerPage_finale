import * as React from 'react';
import styles from './Process.module.scss';
import { ProcessItem, fetchProcessData } from './Process_Service'; // Assuming you have the service file



const Process: React.FC = () => {

    const [Process, setEvents] = React.useState<ProcessItem[]>([]); // State to hold the fetched events



    // Fetch data on component mount
    React.useEffect(() => {
        async function fetchEvents() {
            try {
                const data = await fetchProcessData();
                setEvents(data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        }
        fetchEvents();
    }, []);
    
    return (
        <div className={styles.Process_holder}>
            <div className={styles.process_content}>
                <div className={styles.process_title}>
                    <div className={styles.title}>
                        <p>Processus de recrutement</p>
                    </div>
                    <div className={styles.underline}>
                    </div>
                </div>
                
                <div className={styles.process_cards}>
                {Process.map((process, index) => (
                        <div className={styles.process_card}>
                        <div className={styles.top}>
                            
                            <div className={styles.number}>
                                <p>{process.Number}</p>
                            </div>

                            <div className={styles.icon}>

                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.99987 12.9167C9.22632 12.9167 8.48445 12.6095 7.93747 12.0625C7.39049 11.5155 7.0832 10.7736 7.0832 10.0001C7.0832 9.22653 7.39049 8.48467 7.93747 7.93769C8.48445 7.39071 9.22632 7.08342 9.99987 7.08342C10.7734 7.08342 11.5153 7.39071 12.0623 7.93769C12.6092 8.48467 12.9165 9.22653 12.9165 10.0001C12.9165 10.7736 12.6092 11.5155 12.0623 12.0625C11.5153 12.6095 10.7734 12.9167 9.99987 12.9167ZM16.1915 10.8084C16.2249 10.5417 16.2499 10.2751 16.2499 10.0001C16.2499 9.72508 16.2249 9.45008 16.1915 9.16675L17.9499 7.80842C18.1082 7.68342 18.1499 7.45842 18.0499 7.27508L16.3832 4.39175C16.2832 4.20842 16.0582 4.13342 15.8749 4.20842L13.7999 5.04175C13.3665 4.71675 12.9165 4.43342 12.3915 4.22508L12.0832 2.01675C12.0663 1.9186 12.0151 1.82961 11.9389 1.76554C11.8626 1.70148 11.7661 1.66648 11.6665 1.66675H8.3332C8.12487 1.66675 7.94987 1.81675 7.91653 2.01675L7.6082 4.22508C7.0832 4.43342 6.6332 4.71675 6.19987 5.04175L4.12487 4.20842C3.94153 4.13342 3.71653 4.20842 3.61653 4.39175L1.94987 7.27508C1.84153 7.45842 1.89153 7.68342 2.04987 7.80842L3.8082 9.16675C3.77487 9.45008 3.74987 9.72508 3.74987 10.0001C3.74987 10.2751 3.77487 10.5417 3.8082 10.8084L2.04987 12.1917C1.89153 12.3167 1.84153 12.5417 1.94987 12.7251L3.61653 15.6084C3.71653 15.7917 3.94153 15.8584 4.12487 15.7917L6.19987 14.9501C6.6332 15.2834 7.0832 15.5667 7.6082 15.7751L7.91653 17.9834C7.94987 18.1834 8.12487 18.3334 8.3332 18.3334H11.6665C11.8749 18.3334 12.0499 18.1834 12.0832 17.9834L12.3915 15.7751C12.9165 15.5584 13.3665 15.2834 13.7999 14.9501L15.8749 15.7917C16.0582 15.8584 16.2832 15.7917 16.3832 15.6084L18.0499 12.7251C18.1499 12.5417 18.1082 12.3167 17.9499 12.1917L16.1915 10.8084Z" fill="#FFAE34"/>
                                </svg>

                            </div>
                        </div>
                        <div className={styles.content}>
                            <p>{process.Process}</p>
                        </div>

                        </div>
                ))}      
                </div>
               
            </div>
            
        </div>
    );
}

export default Process;

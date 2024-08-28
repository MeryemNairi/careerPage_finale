import * as React from 'react';
import styles from './JobOffers.module.scss';
import EJ from './ExternalJobs/JobApi/JobApi';
import IO from './InternalJobs/InternalJobs';




const JobOffers: React.FC = () => {
    return (
        <div className={styles.Joboffers_holder}>
            <div className={styles.external_job_offers}>
                
                    <EJ/>
                
            </div>
            <div className={styles.Internal_job_offers}>
                    <IO />
            </div>
            <div className={styles.next_step}>
                <div className={styles.n_container}>
                    <div className={styles.n_bcg}>
                        <img src="/sites/CnexiaForEveryone/Assets/nextstep.jpg" alt="" />
                    </div>
                    <div className={styles.n_gradient}>

                    </div>
                    <div className={styles.n_content}>
                        <p>
                        Passer à la prochaine<br />étape

                        </p>
                        <div className={styles.btn_Container}>
                        <a href="https://cnexia.sharepoint.com/sites/CnexiaForEveryone/SitePages/to%20the%20next%20Step.aspx"><button className={styles.btn1}>
                            Découvrir plus <span><svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.79312 10.041C7.98065 10.217 8.23496 10.3159 8.50013 10.3159C8.7653 10.3159 9.01961 10.217 9.20714 10.041L13.7072 5.81609C13.8947 5.64003 14 5.40127 14 5.15231C14 4.90335 13.8947 4.66459 13.7072 4.48853L9.20714 0.263591C9.01854 0.0925674 8.76593 -0.00206566 8.50373 7.34329e-05C8.24153 0.00221252 7.99071 0.100953 7.8053 0.275027C7.61989 0.449102 7.51472 0.684585 7.51244 0.930754C7.51016 1.17692 7.61096 1.41409 7.79312 1.59116L10.5002 4.21344H1.00002C0.734795 4.21344 0.480437 4.31235 0.292898 4.48843C0.105358 4.6645 0 4.9033 0 5.15231C0 5.40131 0.105358 5.64012 0.292898 5.81619C0.480437 5.99227 0.734795 6.09118 1.00002 6.09118H10.5002L7.79312 8.71346C7.60565 8.88952 7.50033 9.12829 7.50033 9.37724C7.50033 9.6262 7.60565 9.86496 7.79312 10.041Z" fill="#00966C"/>
                            </svg>
                            </span>
                        </button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.progress_path}>
                <div className={styles.PP_bcg}>
                <img src="/sites/CnexiaForEveryone/Assets/ProgressPath.png" alt="" />

                </div>
                <div className={styles.PP_container}>
                    <div className={styles.PP_title}>
                        <p>
                            Career Path
                        </p>
                    </div>
                    <div className={styles.PP_content}>
                        <p>
                        Découvrez les opportunités de carrière chez Cnexia et naviguez dans votre parcours professionnel avec clarté et objectif. Découvrez les différents chemins de croissance et d'avancement au sein de notre organisation, que vous cherchiez à vous spécialiser dans un domaine spécifique, à gravir l'échelle de leadership, ou à explorer des rôles interdisciplinaires.                        </p>
                    </div>
                    <div className={styles.PP_btn}>

                    <a href="https://cnexia.sharepoint.com/:b:/s/CnexiaForEveryone/EZeBTeaDcNRIrZmJY2Jeb5cBpafTMfuVDebPh-XZkAiItA?e=bkzS4I"><button className={styles.btn2}>
                            Découvrir plus <span><svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.79312 10.041C7.98065 10.217 8.23496 10.3159 8.50013 10.3159C8.7653 10.3159 9.01961 10.217 9.20714 10.041L13.7072 5.81609C13.8947 5.64003 14 5.40127 14 5.15231C14 4.90335 13.8947 4.66459 13.7072 4.48853L9.20714 0.263591C9.01854 0.0925674 8.76593 -0.00206566 8.50373 7.34329e-05C8.24153 0.00221252 7.99071 0.100953 7.8053 0.275027C7.61989 0.449102 7.51472 0.684585 7.51244 0.930754C7.51016 1.17692 7.61096 1.41409 7.79312 1.59116L10.5002 4.21344H1.00002C0.734795 4.21344 0.480437 4.31235 0.292898 4.48843C0.105358 4.6645 0 4.9033 0 5.15231C0 5.40131 0.105358 5.64012 0.292898 5.81619C0.480437 5.99227 0.734795 6.09118 1.00002 6.09118H10.5002L7.79312 8.71346C7.60565 8.88952 7.50033 9.12829 7.50033 9.37724C7.50033 9.6262 7.60565 9.86496 7.79312 10.041Z" fill="#00966C"/>
                            </svg>
                            </span>
                        </button></a>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobOffers;
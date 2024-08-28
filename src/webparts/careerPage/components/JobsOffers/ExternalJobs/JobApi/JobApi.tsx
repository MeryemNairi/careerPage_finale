import * as React from 'react';
import  { useEffect, useState } from 'react';
import styles from './JobApi.module.scss';
import { IJobsApiProps } from './IJobsApiProps';
import { Job, fetchJobsFromXml } from '../Services/JobApiService';

const JobsApi: React.FC<IJobsApiProps> = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    async function fetchJobs() {
      try {
        const fetchedJobs = await fetchJobsFromXml();
        setJobs(fetchedJobs);
      } catch (error) {
        // Handle error "we can do it better"
      }
    }

    fetchJobs();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
  };

  const filteredJobs = jobs.filter(job =>
    job.PositionTitle.toLowerCase().includes(searchTerm)
  );

  return (
    <section className={styles.jobsApi}>
      <div className={styles.container_title}>
        <p>Offres d'emploi externes</p>
      </div>
      <div className={styles.Jobs_container}>
        <div className={styles.job_navigation_bar}>
          <div className={styles.serch_icon}>
            <svg
              id="serch_icon"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.75 18.25L1 24"
                stroke="#9A9A9A"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M24 10.8571C24 16.3011 19.5868 20.7143 14.1429 20.7143C11.4162 20.7143 8.94798 19.6072 7.16351 17.8179C5.38511 16.0349 4.28571 13.5744 4.28571 10.8571C4.28571 5.41319 8.69892 1 14.1429 1C19.5868 1 24 5.41319 24 10.8571Z"
                stroke="#9A9A9A"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
  
          <input
            className={styles.job_search_input}
            type="text"
            placeholder="Search for job titles..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className={styles.Jobs_holder_scroller}>
          <div className={styles.jobs_display_container}>
            {/* Render filtered jobs here */}
            {filteredJobs.map((job) => (
              <div key={job.JobId} className={styles.jobs_display}>
                {/* Job details */}
                <div className={styles.ACI}>
                  <p>Offre ext</p>
                </div>
                <div className={styles.job_title}>
                  <h2>{job.PositionTitle}</h2>
                </div>
                <div className={styles.job_description}>
                  <p>{job.JobType}</p>
                  {/* Use dangerouslySetInnerHTML "it's really important bcs the data we have it as HTML soo"*/}
                  <div dangerouslySetInnerHTML={{ __html: job.JobDescription }} />
                </div>
                <div className={styles.card_button}>
                  <a href={job.JobUrl}>Voire plus</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsApi;

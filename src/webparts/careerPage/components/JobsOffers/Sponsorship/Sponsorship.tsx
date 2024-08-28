import * as React from 'react';
import { sp } from "@pnp/sp/presets/all";
import { useEffect, useState } from "react";
import styles from './Sponsorship.module.scss';

interface InternalOffersItem {
  offer_title: string;
  short_description: string;
  deadline: string;
  city: string;
  Sponsorship : boolean;
}

const Sponsorship: React.FC = () => {
  const [JobsData, setJobsData] = useState<InternalOffersItem[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<InternalOffersItem[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const fetchJobsData = async () => {
    try {
      const response = await sp.web.lists.getByTitle("Internal_recrutement").items.select("offer_title", "short_description", "deadline", "city", "Sponsorship").filter("Sponsorship eq false").get();
      console.log("Internal Jobs data response:", response);
      if (response && response.length > 0) {
        return response;
      } else {
        console.error("Empty response received for Internal Jobs data.");
        return [];
      }
    } catch (error) {
      console.error("Error fetching Internal Jobs data:", error);
      return [];
    }
  };
  
  
  

  useEffect(() => {
    const getData = async () => {
      const InternalJobs = await fetchJobsData();
      setJobsData(InternalJobs);
      setFilteredJobs(InternalJobs); // Initialize filtered jobs with all jobs -- working as the other one same logic
      console.log("InternalJobs data:", InternalJobs);
    };
    getData();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    // Filter jobs based on search term --as the other one, its work fine
    const filteredJobs = JobsData.filter(job =>
      job.offer_title.toLowerCase().includes(searchTerm)
    );
    setFilteredJobs(filteredJobs);
  };

  return (
    <section className={styles.jobsApi}>
      <div className={styles.container_title}>
        <p>offres de parrainage</p>
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
                stroke="#FFFFFF"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M24 10.8571C24 16.3011 19.5868 20.7143 14.1429 20.7143C11.4162 20.7143 8.94798 19.6072 7.16351 17.8179C5.38511 16.0349 4.28571 13.5744 4.28571 10.8571C4.28571 5.41319 8.69892 1 14.1429 1C19.5868 1 24 5.41319 24 10.8571Z"
                stroke="#FFFFFF"
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
          {filteredJobs.map((job: InternalOffersItem, index: number) => (
            <div key={index} className={styles.jobs_display_container}>
              <div className={styles.jobs_display}>
                <div className={styles.ACI}>
                  <p>Offre PAR</p>
                </div>
                <div className={styles.job_title}>
                  <h2>{job.offer_title}</h2>
                </div>
                <div className={styles.job_description}>
                  <p>{job.short_description}</p>
                </div>
                <div className={styles.card_button}>


                <div className={styles.lieu}>
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.00008 0C3.58908 0 8.14446e-05 3.589 8.14446e-05 7.995C-0.0289186 14.44 7.69608 19.784 8.00008 20C8.00008 20 16.0291 14.44 16.0001 8C16.0001 3.589 12.4111 0 8.00008 0ZM8.00008 12C5.79008 12 4.00008 10.21 4.00008 8C4.00008 5.79 5.79008 4 8.00008 4C10.2101 4 12.0001 5.79 12.0001 8C12.0001 10.21 10.2101 12 8.00008 12Z" fill="#00966C"/>
                    </svg>

                    <p>
                        {job.city}
                    </p>
                  </div> 
                  <a href='#'>{job.deadline}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsorship;
